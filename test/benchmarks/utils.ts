import { bench } from 'vitest'
import type { Task as BenchTask } from 'tinybench'
import {
  ICollection,
  numberComparatorASC,
  List,
  LinkedList,
  DoublyLinkedList,
  CyclicDoublyLinkedList,
  Queue,
  LinkedQueue,
  PriorityQueue,
  Stack,
  LinkedStack,
  Dequeue,
  IStack,
  IQueue,
  IList,
} from '../../src'

export const OPTIONS = {
  time: 150,
  iterations: 15,
  warmupTime: 120,
  warmupIterations: 30,
  minSamples: 150,
  maxSamples: 1500,
}

type CollectionFactory<E, C extends ICollection<E> = ICollection<E>> = () => C
type SetupFn<E> = (collection: ICollection<E>) => void | Promise<void>
type BenchmarkFn<E> = (collection: ICollection<E>) => void | Promise<void>
type BenchmarkListFn<E> = (collection: IList<E>) => void | Promise<void>
type BenchmarkQueueFn<E> = (collection: IQueue<E>) => void | Promise<void>
type BenchmarkStackFn<E> = (collection: IStack<E>) => void | Promise<void>

export type InstrumentedCollectionsTask<C extends ICollection<number> = ICollection<number>> = BenchTask & {
  collection?: C
}

type Test<E, C extends ICollection<E>> =
  | BenchmarkStackFn<E>
  | BenchmarkListFn<E>
  | BenchmarkQueueFn<E>
  | BenchmarkFn<E>
  | ((collection: C) => void | Promise<void>)

export function benchmark<
  C extends ICollection<number>,
  T extends InstrumentedCollectionsTask<C>,
>(
  label: string,
  factory: CollectionFactory<number, C>,
  initialize: SetupFn<number>,
  fn: Test<number, C>,
) {
  // @ts-ignore
  bench(label, async function (this: BenchTask) {
    const instrumented = this as T
    const collection = instrumented.collection
    if (!collection) throw new Error('benchmark collection not initialized')

    await (fn as (collection: C) => void | Promise<void>)(collection)
  }, {
    ...OPTIONS,
    setup: async (task: BenchTask) => {
      const instrumented = task as T

      const prepare = async () => {
        const collection = factory()
        await initialize(collection)
        instrumented.collection = collection
      }

      instrumented.opts.beforeEach = prepare
      instrumented.opts.afterEach = () => {
        instrumented.collection = undefined
      }

      await prepare()
    },
  })
}

export function fillCollection(collection: ICollection<number>, size = 32) {
  for (let i = 1; i <= size; i++) {
    collection.add(i)
  }
}

export const DATA_STRUCTURES_MAP: Record<string, CollectionFactory<number>> = {
  'List': () => new List(),
  'LinkedList': () => new LinkedList(),
  'DoublyLinkedList': () => new DoublyLinkedList(),
  'CyclicDoublyLinkedList': () => new CyclicDoublyLinkedList(),
  'Queue': () => new Queue(),
  'LinkedQueue': () => new LinkedQueue(),
  'PriorityQueue': () => new PriorityQueue(numberComparatorASC),
  'Stack': () => new Stack(),
  'LinkedStack': () => new LinkedStack(),
  'Dequeue': () => new Dequeue(),
}

export const LIST_MAP: Record<string, CollectionFactory<number, IList<number>>> = {
  'List': () => new List(),
  'LinkedList': () => new LinkedList(),
  'DoublyLinkedList': () => new DoublyLinkedList(),
  'CyclicDoublyLinkedList': () => new CyclicDoublyLinkedList(),
}

export const QUEUE_MAP: Record<string, CollectionFactory<number, IQueue<number>>> = {
  'Queue': () => new Queue(),
  'LinkedQueue': () => new LinkedQueue(),
  'PriorityQueue': () => new PriorityQueue(numberComparatorASC),
  'Dequeue': () => new Dequeue(),
}

export const STACK_MAP: Record<string, CollectionFactory<number, IStack<number>>> = {
  'Stack': () => new Stack(),
  'LinkedStack': () => new LinkedStack(),
  'Dequeue': () => new Dequeue(),
}

const OPS = 256

export function dequeueTest(queue: IQueue<number>) {
  for (let i = 0; i < OPS; i++) {
    const value = queue.dequeue()
    queue.enqueue(value)
  }
}

export function popTest(stack: IStack<number>) {
  for (let i = 0; i < OPS; i++) {
    const value = stack.pop()
    stack.push(value)
  }
}

export function removeTest(collection: ICollection<number>) {
  for (let i = 0; i < OPS; i++) {
    if (collection.size === 0) fillCollection(collection)
    const value = collection.remove(collection.size - 1)
    if (typeof value === 'number') {
      collection.add(value)
    }
  }
}

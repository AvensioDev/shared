import {
  type Comparator,
  type ICollection,
  type IStack,
  type Node,
  Ordering,
} from './'
import { BinaryHeap } from './heap'

/**
 * @description FIFO queue contract shared by all queue implementations.
 *
 * @template E Value type.
 */
export interface IQueue<E> extends ICollection<E> {
  /**
   * Append an element to the tail.
   *
   * @param e - Value to enqueue.
   * @remarks Complexity: O(1) amortized
   */
  enqueue(e: E): void

  /**
   * Remove and return the head element.
   *
   * @returns Dequeued value.
   * @throws {Error} When empty.
   * @remarks Complexity: O(1) amortized
   */
  dequeue(): E

  /**
   * Peek the head without removal.
   *
   * @returns Head value.
   * @throws {Error} When empty.
   */
  head(): E
}

/**
 * @description Hybrid queue/stack contract exposing push/pop on both ends.
 */
export interface IDequeue<E> extends IQueue<E>, IStack<E> {
}

/**
 * @description Array-backed queue with amortized O(1) operations using a moving head index.
 *
 * @template E Value type.
 * @example
 * ```ts
 * const queue = new Queue<string>()
 * queue.enqueue('task')
 * queue.dequeue()
 * ```
 */
export class Queue<E> implements IQueue<E> {
  private arr: E[] = []
  /**
   * Current head index
   * @private
   */
  private headIndex = 0
  /**
   * {@inheritDoc ICollection.size}
   */
  size = 0
  /**
   * {@inheritDoc ICollection.comparator}
   */
  comparator: Comparator<E> = null!

  constructor(elements?: Iterable<E>, comparator?: Comparator<E>) {
    if (elements) {
      for (const el of elements) {
        this.enqueue(el)
      }
    }

    if (comparator) {
      this.comparator = comparator
      this.sort()
    }
  }

  private compactIfNeeded() {
    const shouldCompact = this.headIndex > 0 && this.headIndex >= this.arr.length / 2
    if (shouldCompact) {
      this.arr = this.arr.slice(this.headIndex)
      this.headIndex = 0
    }
  }

  private toArray(): E[] {
    return this.arr.slice(this.headIndex, this.headIndex + this.size)
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear(): void {
    this.arr = []
    this.headIndex = 0
    this.size = 0
  }

  /**
   * {@inheritDoc IQueue.dequeue}
   */
  dequeue(): E {
    if (this.size === 0) throw new Error('no such element')
    const value = this.arr[this.headIndex]
    this.arr[this.headIndex] = undefined!
    this.headIndex++
    this.size--

    if (this.size === 0) {
      this.clear()
    } else {
      this.compactIfNeeded()
    }

    return value
  }

  /**
   * {@inheritDoc IQueue.enqueue}
   */
  enqueue(e: E): void {
    if (e === undefined) return
    this.arr.push(e)
    this.size++
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    this.enqueue(e)
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(collection: ICollection<E>): void {
    for (const e of collection) {
      this.enqueue(e)
    }
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * {@inheritDoc IQueue.head}
   */
  head(): E {
    if (this.size === 0) throw new Error('no such element')
    const value = this.arr[this.headIndex]
    if (value === undefined) throw new Error('no such element')
    return value
  }

  /**
   * Checks if an element is contained in the Queue.
   * For this function to work, a comparator must be set!
   * O(size) amortized
   * @param element
   */
  contains(element: E): boolean {
    if (this.comparator) {
      for (let i = 0; i < this.size; i++) {
        const value = this.arr[this.headIndex + i]
        if (this.comparator(element, value) === Ordering.EQ) return true
      }
    } else {
      for (let i = 0; i < this.size; i++) {
        const value = this.arr[this.headIndex + i]
        if (value === element) return true
      }
    }
    return false
  }

  /**
   * Iterates through the LinkedQueue.
   * @returns Iterator for the LinkedQueue
   * @remarks Complexity: O(n)
   */
  [Symbol.iterator](): Iterator<E> {
    const queue = this
    let index = 0
    const end = this.size
    return {
      next(): IteratorResult<E> {
        if (index >= end) {
          return { done: true, value: undefined! }
        }
        const value = queue.arr[queue.headIndex + index]
        index++
        return {
          done: false,
          value
        }
      }
    }
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator(): Generator<E> {
    for (let i = this.size - 1; i >= 0; i--) {
      yield this.arr[this.headIndex + i]
    }
  }

  /**
   * {@inheritDoc ISortable.sort}
   */
  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const sorted = this.toArray().sort((a, b) => comparator(a, b))
    this.arr = sorted
    this.headIndex = 0
    this.size = sorted.length
    if (cmp) {
      this.comparator = comparator
    }
  }

  /**
   * {@inheritDoc ICollection.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    let index: number
    let values: E[] | undefined
    if (isIndex) {
      index = Number(target)
    } else {
      values = this.toArray()
      const cmp = this.comparator
      if (cmp) {
        index = values.findIndex(value => cmp(value, target as E) === Ordering.EQ)
      } else {
        index = values.findIndex(value => value === target)
      }
    }
    if (index < 0 || index >= this.size) throw new Error('no such element')
    values = values ?? this.toArray()
    const [removed] = values.splice(index, 1)
    if (removed === undefined) throw new Error('no such element')
    this.arr = values
    this.headIndex = 0
    this.size = values.length
    return isIndex ? removed : index
  }
}

/**
 * @description Linked-list queue optimized for consistent O(1) enqueues/dequeues regardless of size.
 */
export class LinkedQueue<E> implements IQueue<E> {
  private _head: Node<E>
  private _tail: Node<E>
  /**
   * {@inheritDoc ICollection.size}
   */
  size = 0
  /**
   * {@inheritDoc ICollection.comparator}
   */
  comparator: Comparator<E> = null!

  constructor(elements?: Iterable<E>, comparator?: Comparator<E>) {
    if (elements) {
      for (const el of elements) {
        this.enqueue(el)
      }
    }
    if (comparator) {
      this.comparator = comparator
    }
  }

  /**
   * {@inheritDoc IQueue.enqueue}
   */
  enqueue(e: E) {
    if (e === undefined) return
    const oldTail = this._tail
    this._tail = {
      value: e,
      next: undefined
    }
    if (this._head) oldTail!.next = this._tail
    else this._head = this._tail
    this.size++
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    this.enqueue(e)
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(collection: ICollection<E>): void {
    for (const e of collection) {
      this.enqueue(e)
    }
  }

  /**
   * {@inheritDoc IQueue.dequeue}
   */
  dequeue() {
    const head = this._head
    if (!head) throw new Error('no such element')
    this._head = head.next
    this.size--
    const value = head.value
    if (this.isEmpty()) {
      this._tail = undefined
    }

    head.value = head.prev = head.next = undefined! // GC
    return value
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty() {
    return this.size === 0
  }

  /**
   * {@inheritDoc IQueue.head}
   */
  head() {
    if (this._head) return this._head.value
    throw new Error('no such element')
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear() {
    this._head = this._tail = undefined
    this.size = 0
  }

  /**
   * Checks if an element is contained in the LinkedQueue.
   * For this function to work, a comparator must be set!
   * @param element
   * @remarks Complexity: O(size) amortized
   */
  contains(element: E): boolean {
    if (this.comparator) {
      for (const e of this) {
        if (this.comparator(element, e) === Ordering.EQ) return true
      }
    } else {
      for (const e of this) {
        if (e === element) return true
      }
    }
    return false
  }

  /**
   * Iterates through the LinkedQueue.
   * @returns Iterator for the LinkedQueue
   * @remarks Complexity: O(n)
   */
  [Symbol.iterator](): Iterator<E> {
    let head = this._head
    return {
      next: () => {
        const _head = head
        head = _head?.next
        return {
          done: _head == undefined,
          value: _head?.value!
        }
      }
    }
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator(): Generator<E> {
    const tmp = []
    for (const e of this) {
      tmp.push(e)
    }

    for (const e of tmp.reverse()) {
      yield e
    }
  }

  /**
   * {@inheritDoc ICollection.sort}
   */
  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const values = Array.from(this).sort((a, b) => comparator(a, b))
    this.clear()
    for (const value of values) {
      this.enqueue(value)
    }
    if (cmp) {
      this.comparator = comparator
    }
  }

  private removeAtIndex(index: number): E {
    if (index < 0 || index >= this.size) throw new Error('no such element')
    if (index === 0) return this.dequeue()

    let prev = this._head
    for (let i = 0; i < index - 1; i++) {
      prev = prev?.next
    }
    const toRemove = prev?.next
    if (!prev || !toRemove) throw new Error('no such element')
    prev.next = toRemove.next
    if (toRemove === this._tail) {
      this._tail = prev
    }
    this.size--
    const value = toRemove.value
    toRemove.value = toRemove.next = toRemove.prev = undefined!
    return value
  }

  /**
   * {@inheritDoc ICollection.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    let index: number
    if (isIndex) {
      index = Number(target)
    } else {
      let node = this._head
      index = -1
      let i = 0
      while (node) {
        const match = this.comparator ? this.comparator(node.value, target as E) === Ordering.EQ : node.value === target
        if (match) {
          index = i
          break
        }
        node = node.next
        i++
      }
    }
    if (index < 0 || index >= this.size) throw new Error('no such element')
    const removed = this.removeAtIndex(index)
    return isIndex ? removed : index
  }
}

/**
 * @description Comparator-driven queue backed by {@link BinaryHeap}.
 *
 * @template E Value type.
 */
export class PriorityQueue<E> implements IQueue<E> {
  private heap: BinaryHeap<E>

  constructor(comparator: Comparator<E>, elements?: Iterable<E>) {
    this.heap = new BinaryHeap(comparator, elements)
  }

  /**
   * Retrieve the current comparator.
   */
  get comparator(): Comparator<E> {
    return this.heap.comparator
  }

  /**
   * Sets a new Comparator.
   * @param cmp new Comparator.
   * @remarks creates a copy of the current heap and overwrites it.
   */
  set comparator(cmp: Comparator<E>) {
    this.heap = new BinaryHeap(cmp, this.heap)
  }

  /**
   * {@inheritDoc BinaryHeap.size}
   */
  get size(): number {
    return this.heap.size
  }

  /**
   * {@inheritDoc IQueue.enqueue}
   */
  enqueue(e: E): void {
    this.heap.insert(e)
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    this.heap.add(e)
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(collection: ICollection<E>): void {
    this.heap.addAll(collection)
  }

  /**
   * {@inheritDoc IQueue.dequeue}
   */
  dequeue(): E {
    return this.heap.extractMin()
  }

  /**
   * {@inheritDoc IQueue.head}
   */
  head(): E {
    return this.heap.peek()
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty(): boolean {
    return this.heap.isEmpty()
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear(): void {
    this.heap.clear()
  }

  /**
   * {@inheritDoc ICollection.contains}
   */
  contains(element: E): boolean {
    return this.heap.contains(element)
  }

  /**
   * Iterates through the PriorityQueue.
   * @returns Iterator for the queue
   */
  [Symbol.iterator](): Iterator<E> {
    return this.heap[Symbol.iterator]()
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator(): Generator<E> {
    yield* this.heap.reverseIterator()
  }

  /**
   * {@inheritDoc BinaryHeap.sort}
   */
  sort(cmp?: Comparator<E>): void {
    this.heap.sort(cmp)
  }

  /**
   * {@inheritDoc BinaryHeap.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    return this.heap.remove(target, isIndex)
  }
}

/**
 * @description Double-ended queue exposing push/pop operations on both ends.
 *
 * @template E Value type.
 */
export class Dequeue<E> implements IDequeue<E> {
  /**
   * {@inheritDoc ICollection.size}
   */
  size = 0
  private _head: Node<E>
  private _tail: Node<E>
  /**
   * {@inheritDoc ICollection.comparator}
   */
  comparator: Comparator<E> = null!

  constructor(elements?: Iterable<E>) {
    if (elements) {
      for (const el of elements) {
        this.enqueue(el)
      }
    }
  }

  /**
   * {@inheritDoc IQueue.enqueue}
   */
  enqueue(e: E): void {
    if (e === undefined) return
    if (!this._head) {
      this._head = { value: e }
      this._tail = this._head
    } else {
      const newTail = {
        value: e,
        prev: this._tail
      }
      this._tail!.next = newTail
      this._tail = newTail
    }
    this.size++
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    this.enqueue(e)
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(collection: ICollection<E>): void {
    for (const e of collection) {
      this.enqueue(e)
    }
  }

  /**
   * {@inheritDoc IQueue.dequeue}
   */
  dequeue(): E {
    if (this.size === 0) throw new Error('no such element')
    const head = this._head
    this._head = head!.next
    if (this._head) {
      this._head.prev = undefined
    } else {
      this._tail = undefined
    }
    this.size--
    const value = head!.value
    head!.value = head!.prev = head!.next = undefined!
    return value
  }

  /**
   * {@inheritDoc IStack.push}
   */
  push(e: E): void {
    if (e !== undefined) {
      if (!this._head) {
        this._head = { value: e }
        this._tail = this._head
      } else {
        const newHead = {
          value: e,
          next: this._head
        }
        this._head.prev = newHead
        this._head = newHead
      }
      this.size++
    }
  }

  /**
   * {@inheritDoc IStack.pop}
   */
  pop(): E {
    if (this.size === 0) throw new Error('no such element')
    const tail = this._tail
    this._tail = tail!.prev
    if (this._tail) {
      this._tail.next = undefined
    } else {
      this._head = undefined
    }
    this.size--
    const value = tail!.value
    tail!.value = tail!.prev = tail!.next = undefined!
    return value
  }

  /**
   * {@inheritDoc IStack.top}
   */
  top(): E {
    if (this._tail) return this._tail.value
    if (this._head) return this._head.value
    throw new Error('no such element')
  }

  /**
   * {@inheritDoc IQueue.head}
   */
  head(): E {
    if (this._head) return this._head.value
    throw new Error('no such element')
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear() {
    this._head = this._tail = undefined
    this.size = 0
  }

  /**
   * {@inheritDoc ICollection.contains}
   */
  contains(element: E): boolean {
    if (this.comparator) {
      for (const e of this) {
        if (this.comparator(element, e) === Ordering.EQ) return true
      }
    } else {
      for (const e of this) {
        if (e === element) return true
      }
    }
    return false
  }

  /**
   * {@link Iterable}
   */
  [Symbol.iterator](): Iterator<E> {
    let head = this._head
    return {
      next: () => {
        const _head = head
        head = _head?.next
        return {
          done: _head == undefined,
          value: _head?.value!
        }
      }
    }
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator() {
    let tail = this._tail
    while (tail != undefined) {
      yield tail.value
      tail = tail.prev
    }
  }

  /**
   * {@inheritDoc ISortable.sort}
   */
  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const values = Array.from(this).sort((a, b) => comparator(a, b))
    this.clear()
    for (const value of values) {
      this.enqueue(value)
    }
    if (cmp) {
      this.comparator = comparator
    }
  }

  private removeAtIndex(index: number): E {
    if (index < 0 || index >= this.size) throw new Error('no such element')
    if (index === 0) return this.dequeue()
    if (index === this.size - 1) return this.pop()

    let node = this._head
    for (let i = 0; i < index; i++) {
      node = node?.next
    }
    if (!node) throw new Error('no such element')
    node.prev!.next = node.next
    node.next!.prev = node.prev
    const value = node.value
    node.value = node.next = node.prev = undefined!
    this.size--
    return value
  }

  /**
   * {@inheritDoc ICollection.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    let index: number
    if (isIndex) {
      index = Number(target)
    } else {
      let node = this._head
      index = -1
      let i = 0
      while (node) {
        const match = this.comparator ? this.comparator(node.value, target as E) === Ordering.EQ : node.value === target
        if (match) {
          index = i
          break
        }
        node = node.next
        i++
      }
    }
    if (index < 0 || index >= this.size) throw new Error('no such element')
    const removed = this.removeAtIndex(index)
    return isIndex ? removed : index
  }
}

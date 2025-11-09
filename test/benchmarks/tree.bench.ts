import { bench, describe } from 'vitest'
import type { Task as BenchTask } from 'tinybench'
import { BinaryHeap, BinarySearchTree, numberComparatorASC, FibonacciHeap } from '../../src'
import { OPTIONS } from './utils'

type StructureTask<S> = BenchTask & { structure?: S }

type PrepFn<S> = (structure: S) => void

type Operation<S> = (structure: S) => void

const SIZES = [1_000]

function dataSet(size: number) {
  return Array.from({ length: size }, (_, i) => size - i)
}

function structureBenchmark<S>(
  label: string,
  factory: () => S,
  prepare: PrepFn<S>,
  operation: Operation<S>,
) {
  bench(label, function () {
    const task = this as StructureTask<S>
    if (!task.structure) throw new Error('structure not initialized')
    operation(task.structure)
  }, {
    ...OPTIONS,
    setup(task) {
      const instrumented = task as StructureTask<S>
      const ready = () => {
        const structure = factory()
        prepare(structure)
        instrumented.structure = structure
      }
      instrumented.opts.beforeEach = ready
      instrumented.opts.afterEach = () => {
        instrumented.structure = undefined
      }
      ready()
    },
  })
}

describe('insert: BinaryHeap vs BinarySearchTree vs FibonacciHeap', () => {
  for (const size of SIZES) {
    const values = dataSet(size)
    structureBenchmark(
      `BinaryHeap insert x${size}`,
      () => new BinaryHeap(numberComparatorASC),
      () => {
      },
      heap => {
        for (const value of values) {
          heap.insert(value)
        }
        heap.clear()
      }
    )

    structureBenchmark(
      `BinarySearchTree insert x${size}`,
      () => new BinarySearchTree(numberComparatorASC),
      () => {
      },
      tree => {
        for (const value of values) {
          tree.insert(value)
        }
      }
    )

    structureBenchmark(
      `FibonacciHeap insert x${size}`,
      () => new FibonacciHeap(numberComparatorASC),
      () => {
      },
      heap => {
        for (const value of values) {
          heap.insert(value)
        }
      }
    )
  }
})

describe('extractMin: BinaryHeap vs BinarySearchTree vs FibonacciHeap', () => {
  for (const size of SIZES) {
    const values = dataSet(size)
    structureBenchmark(
      `FibonacciHeap extractMin x${size}`,
      () => new FibonacciHeap(numberComparatorASC),
      heap => {
        for (const value of values) {
          heap.insert(value)
        }
      },
      heap => {
        values.forEach(() => heap.extractMin())
      }
    )

    structureBenchmark(
      `BinarySearchTree extractMin x${size}`,
      () => new BinarySearchTree(numberComparatorASC),
      tree => {
        for (const value of values) {
          tree.insert(value)
        }
      },
      tree => {
        let min: number | null
        do {
          min = tree.min()
          if (min !== null) {
            tree.delete(min)
          }
        } while (min !== null)
      }
    )

    structureBenchmark(
      `BinaryHeap extractMin x${size}`,
      () => new BinaryHeap(numberComparatorASC),
      heap => {
        for (const value of values) {
          heap.insert(value)
        }
      },
      heap => {
        while (!heap.isEmpty()) {
          heap.extractMin()
        }
      }
    )
  }
})

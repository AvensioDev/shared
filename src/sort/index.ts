import {
  type Comparator,
  FibonacciHeap,
  type ICollection,
} from '../'

/**
 * Contract for structures that can be sorted in-place.
 *
 * @template V Value type.
 */
export interface ISortable<V> {
  /**
   * Sort the structure using the provided comparator.
   *
   * @param cmp - Optional comparator; falls back to the internal one.
   */
  sort(cmp?: Comparator<V>): void
}

/**
 * Sort a collection by recursively partitioning around a pivot.
 *
 * @template V Value type.
 * @param collection - Target collection (mutated while sorting).
 * @param comparator - Comparator used for ordering.
 * @param factory - Factory used to allocate temporary collections.
 * @returns Sorted collection instance from the factory.
 * @example
 * ```ts
 * const sorted = quicksort(list, createComparator('score'), () => new List())
 * ```
 * @remarks Complexity: Average O(n log n), worst-case O(n²) when partitions are imbalanced.
 */
export function quicksort<V>(
  collection: ICollection<V>,
  comparator: Comparator<V>,
  factory: () => ICollection<V>
): ICollection<V> {
  if (collection.size <= 1) return collection

  const iterator = collection[Symbol.iterator]()
  const pivot = iterator.next().value

  const smaller = factory()
  const bigger = factory()

  for (const v of collection) {
    if (v === pivot) continue // Skip pivot itself (optional behavior)
    const cmp = comparator(v, pivot)
    if (cmp < 0) smaller.add(v)
    else bigger.add(v)
  }

  const sortedSmaller = quicksort(smaller, comparator, factory)
  const sortedBigger = quicksort(bigger, comparator, factory)

  const result = factory()
  for (const v of sortedSmaller) result.add(v)
  result.add(pivot)
  for (const v of sortedBigger) result.add(v)

  return result
}

/**
 * Build a Fibonacci heap from values which can then be drained in order.
 *
 * @template V Value type.
 * @param values - Iterable of values to heapify.
 * @param comparator - Comparator controlling heap ordering.
 * @returns Heap representation (call `extractMin` until empty to retrieve sorted order).
 * @example
 * ```ts
 * const heap = heapSort(items, numberComparatorASC)
 * heap.extractMin()
 * ```
 * @remarks Complexity: O(n) to build, O(log n) per extraction.
 */
export function heapSort<V>(values: Iterable<V>, comparator: Comparator<V>) {
  return new FibonacciHeap<V>(comparator, values)
}

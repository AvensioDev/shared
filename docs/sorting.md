# Sorting

Two algorithms are provided for collections that implement `ICollection`/`ISortable`.

## QuickSort (`quicksort`)
```ts
const sorted = quicksort(list, createComparator('score'), () => new List())
```
- Accepts the target collection, a comparator, and a factory that returns new empty collections for the recursive partitions.
- Operates entirely on the `ICollection` API (`add`, iteration, `size`).
- Returns the sorted collection produced by the factory.

## HeapSort (`heapSort`)
```ts
const heap = heapSort(items, createComparator('priority', 'desc'))
const max = heap.extractMin()
```
- Builds a `FibonacciHeap` using the provided iterable and comparator.
- Useful when you need both a sorted order and heap operations (e.g., repeatedly `extractMin`).

Remember to set comparators explicitly; neither algorithm can infer ordering for complex objects without one.

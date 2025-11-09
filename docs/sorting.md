# Sorting

Two helpers are provided: `quicksort` (operates on any `ICollection`) and `heapSort` (builds a
`FibonacciHeap`). Both require explicit comparators to define ordering.

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

## Complexity

| Algorithm  | Average | Worst-case | Notes |
| ---------- | ------- | ---------- | ----- |
| `quicksort` | O(n log n) | O(n²) | Requires a collection factory for partitions. |
| `heapSort`  | O(n) build + O(log n) per extract | same | Returns a heap you can drain incrementally. |

## Notes
- `heapSort` is handy when you need both sorting *and* fast incremental extraction.
- Supply stable comparators from [Comparator Helpers](./comparators.md) to avoid subtle bugs.
- For small collections consider [`List.sort`](./lists.md) which delegates to the built-in comparator.

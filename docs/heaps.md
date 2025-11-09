# Heaps

Heaps power priority queues and scheduling features.

## BinaryHeap
`BinaryHeap<E>` is an array-backed heap that provides `insert`, `extractMin`, `peek`, iteration, and `ICollection` APIs (`addAll`, `remove`, `contains`, `sort`). The comparator decides whether the heap behaves as a min- or max-heap.

```ts
const heap = new BinaryHeap(createComparator('priority'))
heap.insert({ priority: 10 })
heap.insert({ priority: 5 })
heap.extractMin() // -> { priority: 5 }
```

This structure backs `PriorityQueue`, so enqueuing/dequeuing there now defers to the heap implementation.

## Fibonacci Heap
`FibonacciHeap<E>` implements the amortized-efficient heap with support for `insert`, `minimum`, `extractMin`, `decreaseKey`, `delete`, and `union`.

```ts
const heap = new FibonacciHeap(createComparator('priority'))
heap.insert({ priority: 10 })
const min = heap.extractMin()
```

Notes:
- Comparators must return `Ordering.GT` when the “left” value is `null`. This requirement ensures deletion logic works correctly.
- `decreaseKey` accepts a node handle (returned by `insert`); pass `null` to mark a node as the new minimum before extracting.
- `extractChildren`/`extractNeighbours` help with custom traversals or visualizations.

Pick `BinaryHeap` for general-purpose scheduling and when you need `PriorityQueue`-style semantics. Choose Fibonacci heaps when you need fast amortized `decreaseKey` (e.g., Dijkstra-style algorithms).

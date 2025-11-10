---
description: Explains when to reach for BinaryHeap vs FibonacciHeap in @avensio/shared, covering APIs, sample usage, and complexity comparisons.
---

# Heaps

Heaps power priority queues and graph algorithms. Use `BinaryHeap` for general-purpose scheduling
and as the backing store for `PriorityQueue`, or `FibonacciHeap` when you need amortized O(1)
insert/decrease-key operations (e.g., Dijkstra, Prim).

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

## Complexity

| Operation          | `BinaryHeap` | `FibonacciHeap` |
| ------------------ | ------------ | --------------- |
| `insert` / `add`   | O(log n)     | O(1) amortized  |
| `extractMin`       | O(log n)     | O(log n) amortized |
| `peek` / `minimum` | O(1)         | O(1)            |
| `decreaseKey`      | —            | O(1) amortized  |
| `contains`         | O(n)         | O(n)            |

## Notes
- `PriorityQueue` now delegates to `BinaryHeap`, so the complexities above apply directly.
- When using `FibonacciHeap`, ensure your comparator returns {@link Ordering.GT} for `null` left
  operands so `delete` shortcuts remain valid.
- Combine heaps with the [Tree](./trees.md) or [Queue](./queues.md) docs for hybrid data-structure strategies.

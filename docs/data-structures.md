---
description: Summarizes the package's core data structures and contrasts BinaryHeap vs BinarySearchTree characteristics with sample code.
---

# Data Structures Overview

The shared package contains reusable lists, queues, stacks, heaps, trees, and math/comparator
utilities. Two recent additions are highlighted below:

- **BinaryHeap** – array-backed heap optimized for fast insert/extract and used by `PriorityQueue`.
- **BinarySearchTree** – pointer-based search tree that keeps data ordered while enabling in-order traversal and range queries.

## Complexity: BinaryHeap vs BinarySearchTree

| Structure | Insert | Lookup | Extract min/max | Traversal | Notes |
| --- | --- | --- | --- | --- | --- |
| BinaryHeap | `O(log n)` | `O(n)` (needs scan) | `O(log n)` | `O(n)` (via snapshot) | Great for schedulers/priority queues. Comparator defines min/max behavior. |
| BinarySearchTree | `O(log n)` average (`O(n)` worst) | `O(log n)` average | `O(log n)` | `O(n)` with chosen order | Maintains sorted order and exposes traversals + `min`/`max`. |

```ts
const heap = new BinaryHeap(createComparator('priority'))
heap.insert({ priority: 10 })
const top = heap.extractMin()

const tree = new BinarySearchTree(createComparator('id'))
;['b', 'a', 'c'].forEach(id => tree.insert({ id }))
const ordered = tree.traverse() // in-order
```

## Other structures (quick recap)
- **Lists**: flexible sequences (`List`, `LinkedList`, etc.) with slicing/splicing helpers.
- **Queues**: FIFO options (`Queue`, `LinkedQueue`, `PriorityQueue`, `Dequeue`).
- **Stacks**: LIFO via `Stack` and `LinkedStack`.
- **Heaps**: `BinaryHeap` for general use, `FibonacciHeap` for algorithms requiring amortized `decreaseKey`.
- **Sorting**: QuickSort/HeapSort utilities operating on `ICollection` implementations.
- **Math & utils**: `Point`, `Ordering`, `createComparator`, `printHeap`, and core interfaces.

## Notes
- Read more in [Heaps](./heaps.md) and [Trees](./trees.md).
- Lists, queues, stacks, and sorting helpers each have dedicated pages linked from the sidebar.
- All structures rely on the shared [Comparator helpers](./comparators.md) for deterministic ordering.

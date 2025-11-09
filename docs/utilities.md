# Helper Utilities

## Core types
- `Ordering`: enum with `LT`, `EQ`, `GT` used across comparators.
- `Comparator<T>`: `(a, b) => Ordering` signature accepted by every collection.
- `Node<T>`: linked-node structure used by linked lists/queues/stacks.
- `ICollection<T>`: base interface implemented by all structures (`add`, `remove`, `iterator`, `reverseIterator`, `size`, `comparator`).

## `printHeap`
Utility for visualizing Fibonacci heap levels in the console.
```ts
const heap = new FibonacciHeap(createComparator('priority'))
heap.insert({ priority: 1 })
printHeap(heap)
```
It traverses neighbours/children and prints each level with parent references, making it easier to debug heap unions or decrease-key operations.

Keep these helpers in mind when integrating the collections with custom tooling or diagnostics.

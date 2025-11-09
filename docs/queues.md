# Queues
`@avensio/shared` offers multiple FIFO-oriented structures for different workloads.

## `Queue`
- Array-backed with amortized O(1) enqueue/dequeue thanks to a moving head pointer.
- Automatically compacts when unused slots exceed half the buffer.
- Supports iteration, reverse iteration, `contains`, `sort`, and `remove` (by index or value).
- Accepts an `Iterable` + optional comparator in the constructor.

```ts
const queue = new Queue<string>(['a', 'b'])
queue.enqueue('c')
console.log(queue.dequeue()) // 'a'
```

## `LinkedQueue`
- Node-based queue with constant-time head/tail operations.
- Ideal when you frequently enqueue/dequeue large objects and want to avoid array copies.

## `PriorityQueue`
- Wraps the `BinaryHeap` implementation for its storage.
- Honors the configured comparator to always dequeue the “smallest” (or largest) element.

```ts
const pq = new PriorityQueue(createComparator('priority', 'desc'))
pq.enqueue({ priority: 10 })
pq.enqueue({ priority: 100 })
console.log(pq.dequeue()) // { priority: 100 }
```

## `Dequeue`
Implements both `IQueue` and `IStack`, enabling push/pop from either end. Useful for algorithms such as sliding-window computations or bidirectional traversals.

## Complexity

| Operation            | `Queue` | `LinkedQueue` | `PriorityQueue` (heap) | `Dequeue` |
| -------------------- | ------- | ------------- | ---------------------- | --------- |
| `enqueue` / `add`    | Amortized O(1) | O(1) | O(log n) | O(1) |
| `dequeue` / `remove` | Amortized O(1) | O(1) | O(log n) | O(1) |
| `head` / `peek`      | O(1)    | O(1)          | O(1)                   | O(1)      |
| `contains`           | O(n)    | O(n)          | O(n)                   | O(n)      |

Pick `Queue` for general-purpose FIFO behavior (array-backed with amortized O(1) operations),
`LinkedQueue` for predictable O(1) head/tail operations, `PriorityQueue` when ordering should be
driven by a comparator (now backed by `BinaryHeap`), or `Dequeue` when you need push/pop on both
ends.



## Notes
- `PriorityQueue` operations now delegate to the documented [BinaryHeap](./heaps.md#binaryheap).
- Use [Stacks](./stacks.md) when you only need LIFO semantics or [Lists](./lists.md) for random access.
- All queue implementations honor comparators provided via the constructor or `comparator` property.

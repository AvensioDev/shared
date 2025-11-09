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

Across all queue variants:
- Avoid enqueuing `undefined`; checks guard against accidental inserts.
- Set `comparator` (or pass one in the constructor) if you plan to use `contains`, `sort`, or value-based `remove`.

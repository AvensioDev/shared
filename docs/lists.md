---
description: Deep dive into List and linked list variants, showcasing slicing helpers, comparator-driven sorting, initialization patterns, and complexity tables.
---

# Lists
`List` and its linked variants offer array-like APIs plus iterable helpers.

All list types share the same `IList`/`ILinkedList` contracts and support iterators (`Iterable`) as well as
`reverseIterator`, sorting (`ISortable`) and functional helpers (`IListFunctions`).

## `List`
- Backed by an array.
- Supports functional helpers (`map`, `filter`, `reduce`, `every`, `some`).
- Provides slicing/splicing helpers:
  - `slice(start, end)` wraps around when indices exceed bounds.
  - `slice2(start, end)` uses the sign of `end` to determine direction (left/right).
  - `splice(start, deleteCount)` removes elements relative to start.
- Implements `Iterable` and `reverseIterator()` for forward/backward traversal.

```ts
const list = new List([1, 2, 3, 4])
list.slice(-1, 2)   // wrap-around slice
const mapped = list.map(n => n * 2)
```

## Linked lists
`LinkedList`, `DoublyLinkedList`, and `CyclicLinkedList` share the `ILinkedList` API:
- `addFirst`, `addLast`, `removeFirst`, `removeLast`
- `getNode(index)` for direct node access
- `first`/`last` node references for constant-time head/tail operations

Use linked variants when you need predictable insert/remove costs regardless of position.

## Comparator + sorting
Lists implement `ISortable` and honor `list.comparator`. Pair them with `createComparator` or the built-in number/string comparators to sort in place.

```ts
const list = new List([{ score: 10 }, { score: 5 }])
list.comparator = createComparator('score', 'desc')
list.sort()
```

## Initialization via `Iterable`
Every list constructor accepts an `Iterable`, so you can pass generators, sets, or other collections to bootstrap contents quickly.


## Complexity

| Operation              | `List` (array) | Linked variants |
| ---------------------- | -------------- | --------------- |
| `add`, `addLast`       | Amortized O(1) | O(1)            |
| `addFirst`             | O(n)           | O(1)            |
| `remove` by index      | O(n)           | O(n)            |
| `slice` / `splice`     | O(k)           | O(k)            |
| `map` / `filter`       | O(n)           | O(n)            |
| `indexOf` / `contains` | O(n)           | O(n)            |

`k` denotes the number of elements copied/removed.

Use `List` (array-backed) for random access and functional helpers, or select `LinkedList`,
`DoublyLinkedList`, or `CyclicDoublyLinkedList` when you need O(1) insertion/removal at the ends.

## Notes
- Linked variants expose `addFirst`/`removeFirst`/`getNode` via `ILinkedList`.
- Use [Queues](./queues.md) or [Stacks](./stacks.md) when you only need strict FIFO/LIFO semantics.
- Pair lists with the [Comparator helpers](./comparators.md) to use value-based equality.

# Stacks

Stacks implement LIFO semantics for quick push/pop operations.

## `Stack`
- Backed by an array.
- Supports `push`, `pop`, `peek`, `clear`, `contains`, iteration, and `reverseIterator`.
- Constructor accepts an `Iterable` to seed contents.

```ts
const stack = new Stack<number>([1, 2])
stack.push(3)
console.log(stack.pop()) // 3
```

## `LinkedStack`
- Uses linked nodes to achieve O(1) push/pop without array reallocations.
- Provides the same public API as `Stack` plus access to `first` for diagnostics.

### Choosing a stack
- Use `Stack` for most workloads; it’s cache-friendly and fast.
- Pick `LinkedStack` if you need predictable memory usage for extremely large or streaming workloads where array copying becomes expensive.

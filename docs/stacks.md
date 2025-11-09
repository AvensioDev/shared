# Stacks

Stacks provide LIFO semantics via either an array-backed implementation (`Stack`) or a node-based
one (`LinkedStack`). Both honor `IStack` and expose iterators plus `reverseIterator`.

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

```ts
import { LinkedStack } from '@avensio/shared'

const linked = new LinkedStack<string>()
linked.push('root')
linked.push('child')
linked.top() // 'child'
```

## Complexity

| Operation      | `Stack` | `LinkedStack` |
| -------------- | ------- | ------------- |
| `push` / `add` | Amortized O(1) | O(1) |
| `pop`          | O(1)    | O(1) |
| `top` / `peek` | O(1)    | O(1) |
| `contains`     | O(n)    | O(n) |

## Notes
- Use `LinkedStack` when you need predictable O(1) push/pop without array copying (e.g., streaming data).
- `Stack` is cache-friendly and integrates nicely with [Lists](./lists.md) when you require conversion between structures.
- For `Dequeue` (also implementing `IStack`) see the [`Queue`](./queues.md) documentation.

---
description: Covers the BinarySearchTree API, traversals, complexity profile, and how comparators shape ordered data storage.
---

# Trees

## BinarySearchTree
`BinarySearchTree` keeps values ordered with a user-supplied comparator. It exposes traversal
helpers (`in`, `pre`, `post` order), search/delete operations, and `metrics()` for height +
node count reporting. The tree is unbalanced, so worst-case operations degrade to O(n).

```ts
import { BinarySearchTree, createComparator } from '@avensio/shared'

const tree = new BinarySearchTree(createComparator('id'))
tree.insert({ id: 3 })
tree.insert({ id: 1 })
tree.insert({ id: 5 })

tree.delete({ id: 3 }) // comparator controls equality
tree.traverse('pre')   // traversal order
tree.metrics()         // { height, nodeCount }
```

- `insert(value)` – adds a node; duplicates are inserted on the right subtree.
- `find(value)` – returns the stored value or `null`.
- `delete(value)` – removes the node if present and returns a boolean.
- `traverse(order?)` – returns an array of values in `'in'`, `'pre'`, or `'post'` order (defaults to in-order).
- `min()` / `max()` – fetch extremes in `O(log n)` average time.
- `metrics()` – returns `{ height, nodeCount }` so you can track balance and growth.
- `[Symbol.iterator]` – yields values in-order, making the tree compatible with `for...of` and spread syntax.

## Complexity

| Operation       | Average | Worst-case |
| --------------- | ------- | ---------- |
| `insert`        | O(log n) | O(n)     |
| `find` / `delete` | O(log n) | O(n)   |
| `traverse`      | O(n)    | O(n)      |
| `min` / `max`   | O(log n) | O(n)     |

## Notes
- Use [BinaryHeap](./heaps.md) when you only need fast extracts without ordered traversal.
- Combine trees with [Comparator helpers](./comparators.md) to customize ordering logic.
- For balanced search trees, consider composing this tree with your own rebalancing layer.

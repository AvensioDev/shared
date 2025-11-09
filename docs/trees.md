# Trees

`BinarySearchTree<T>` stores items using the supplied `Comparator<T>` and exposes classic BST operations.

## Usage
```ts
const tree = new BinarySearchTree(createComparator('id'))
tree.insert({ id: 3 })
tree.insert({ id: 1 })
tree.insert({ id: 5 })

console.log(tree.traverse())    // in-order
console.log(tree.traverse('pre'))
console.log(tree.min(), tree.max())
```

## API
- `insert(value)` – adds a node; duplicates are inserted on the right subtree.
- `find(value)` – returns the stored value or `null`.
- `delete(value)` – removes the node if present and returns a boolean.
- `traverse(order?)` – returns an array of values in `'in'`, `'pre'`, or `'post'` order (defaults to in-order).
- `min()` / `max()` – fetch extremes in `O(log n)` average time.
- `metrics()` – returns `{ height, nodeCount }` so you can track balance and growth.
- `[Symbol.iterator]` – yields values in-order, making the tree compatible with `for...of` and spread syntax.

BSTs are ideal when you need stable ordering plus efficient range scans; use them when a heap’s lack of ordered traversal would become a bottleneck.

# @avensio/shared

TypeScript data-structure toolkit with lists, queues, stacks, heaps, sorting helpers, math utilities, and reusable comparator factories. Works in ESM, CommonJS, and browser environments (IIFE bundle) with zero runtime dependencies.

## Highlights
- Array-backed and linked lists (including cyclic/doubly variants) with map/filter/reduce helpers
- Queue family (FIFO, linked, priority, dequeue) plus stack implementations
- Binary and Fibonacci heaps with helper functions like `printHeap`
- Sorting utilities (quick sort, heap sort) and math primitives such as `Point`
- Flexible comparator factory (`createComparator`) and ready-made number/string comparators

> Looking for the graph implementation? It now lives in [`@avensio/graph`](../graph/README.md) with dedicated docs. This package focuses on the shared data-structure primitives that power other Avensio libraries.

## Installation
```bash
pnpm add @avensio/shared
# npm install @avensio/shared
# yarn add @avensio/shared
```

### Usage (ESM/CommonJS)
```ts
import { List, Queue, createComparator, numberComparatorASC } from '@avensio/shared'

const numbers = new List([5, 2, 9])
numbers.comparator = numberComparatorASC
numbers.sort()

const queue = new Queue<string>()
queue.add('task-1')
queue.add('task-2')
console.log(queue.remove()) // task-1

const byLength = createComparator<{ title: string }>(item => item.title.length, 'desc')
```

### Browser via IIFE bundle
```html
<script src="https://unpkg.com/@avensio/shared"></script>
<script>
  const stack = new Stack()
  stack.push('first')
  stack.push('second')
  console.log(stack.pop()) // second
</script>
```
The package ships `dist/shared.es.js` (ESM), `dist/shared.cjs.js` (CJS), and `dist/shared.iife.js` (browser) bundles plus `dist/shared.es.d.ts` for type information.

## Comparator helpers
```ts
import { createComparator, numberComparatorDESC, stringComparatorASC } from '@avensio/shared'

const byScore = createComparator<{ score: number }>('score')               // asc by default
const byTitleDesc = createComparator(item => item.title, 'desc')
```
- `createComparator(keyOrExtractor, direction?)` accepts either a property key or extractor function and returns a comparator compatible with every structure in this package.
- `numberComparatorASC/DESC` and `stringComparatorASC/DESC` are built-in specializations.

## Modules at a glance
| Module | What it contains |
| --- | --- |
| Lists | `List`, `LinkedList`, `DoublyLinkedList`, `CyclicLinkedList` with functional helpers. |
| Queues | `Queue`, `LinkedQueue`, `PriorityQueue`, `Dequeue` for FIFO/LIFO hybrids. |
| Stacks | Array-based `Stack` + linked variant for constant-time operations. |
| Heaps | Binary and Fibonacci heaps with `printHeap` for debugging tree structure. |
| Sorting | QuickSort + HeapSort implementations operating on `ISortable` collections. |
| Math | `Point` utility with `x/y/z` coordinates. |
| Utilities | `Ordering`, `ICollection`, `createComparator`, and helper types such as `Node<T>`. |

Each module has detailed usage notes inside the [`docs/`](docs/index.md) folder (served via VitePress).
For a high-level comparison across structures, see [docs/data-structures.md](docs/data-structures.md).

## Documentation
Every exported member is documented with accurate complexity data, examples, and cross-links:

- [Lists](docs/lists.md)
- [Queues](docs/queues.md)
- [Stacks](docs/stacks.md)
- [Heaps](docs/heaps.md)
- [Trees](docs/trees.md)
- [Sorting](docs/sorting.md)
- [Comparator helpers](docs/comparators.md)
- [TypeDoc API reference](docs/api/README.md)

## Benchmarks & tests
- Run the Vitest suite with coverage: `pnpm test`
- Execute micro-benchmarks (lists/queues/stacks): `pnpm bench` — results per round are tracked in `test/benchmarks/README.md`
- Development mode with watch/coverage logging: `pnpm dev`

## Development & release workflow
| Command         | Description |
|-----------------| --- |
| `pnpm lint`     | ESLint with auto-fix over `src/` |
| `pnpm build`    | Builds ESM + IIFE bundles and regenerates types |
| `pnpm docs:dev` | Launches VitePress (`docs/`) locally |
| `pnpm clean`    | Removes `node_modules/` and `dist/` |
| `pnpm release`  | Runs tests + build + changelog (`changelogen`) before publishing |

Docs are deployed via the [mono-repo](https://github.com/Avensio/shared) workflow (`.github/workflows/docs.yml`), while package publishing is handled by the `pnpm release` script plus the corresponding CI job.

See [`docs/development.md`](docs/development.md) and [CONTRIBUTING.md](CONTRIBUTING.md) for contributor details.

## Links
- [`docs/`](docs/index.md)
- [Changelog](./docs/CHANGELOG.md)
- [License](./LICENSE)
- [`@avensio/graph`](../graph/README.md) for advanced graph features

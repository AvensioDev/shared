# Overview

`@avensio/shared` bundles foundational TypeScript data structures (lists, queues, stacks, heaps), sorting utilities, math primitives, and comparator helpers that underpin other Avensio packages. Everything is dependency-free, works in Node.js, Deno, Bun, and browsers, and ships type definitions for first-class DX.

## Install
```bash
pnpm add @avensio/shared
# npm install @avensio/shared
```

### Import
```ts
import { List, Queue, Stack, createComparator } from '@avensio/shared'
```

### Browser
```html
<script src="https://unpkg.com/@avensio/shared"></script>
<script>
  const queue = new Queue()
  queue.add('task')
  console.log(queue.remove())
</script>
```

## Modules
- **Lists**: `List`, `LinkedList`, `DoublyLinkedList`, `CyclicLinkedList`
- **Queues**: `Queue`, `LinkedQueue`, `PriorityQueue`, `Dequeue`
- **Stacks**: Array-backed + linked stacks
- **Heaps**: Binary heap + Fibonacci heap with `printHeap`
- **Sorting**: QuickSort and HeapSort on `ISortable` collections
- **Math/Utilities**: `Point`, `Ordering`, `createComparator`, helper interfaces

Use the sidebar to explore each family. Comparator usage is covered in [Comparator Helpers](./comparators.md). For the generated API docs, open [docs/api/README.html](./api/README.html).

## Graphs
Graph algorithms now live in [`@avensio/graph`](https://avensio.github.io/docs/graph). That package exposes `Graph`, `Vertex`, and `Edge` classes plus serialization hooks and algorithms. Use this shared library for the supporting data structures those graphs rely on.

## Benchmarks & Tests
- `pnpm test` → Vitest unit suite with coverage
- `pnpm bench` → Micro-benchmarks recorded in `test/benchmarks/README.md`

## Release & Docs
- `pnpm build` to produce ESM/CJS/IIFE bundles
- `pnpm docs` to run VitePress locally
- `pnpm release` to run tests, build artifacts, and generate the changelog (`CHANGELOG.md`)

Happy building!

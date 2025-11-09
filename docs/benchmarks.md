# Benchmarks

Run `pnpm bench` to execute the Vitest benchmark suites under `test/benchmarks/`.

- **Lists**: measures iteration, slicing, and mutation costs for `List`, `LinkedList`, and `DoublyLinkedList`.
- **Queues**: compares `Queue`, `LinkedQueue`, and `PriorityQueue` enqueue/dequeue throughput.
- **Stacks**: contrasts array vs linked stacks.
- **Heap vs Tree**: `heap-vs-tree.benchmark.ts` tracks BinaryHeap and BinarySearchTree insert/extract performance at 1k/10k/100k elements.

Results are tracked chronologically in `test/benchmarks/README.md`. Each entry represents three rounds of ten iterations; whenever major internal changes land, a new round is recorded so you can compare regressions/improvements over time.

Feel free to append new rounds (and new benchmark suites) when you optimize structures or add new datasets.

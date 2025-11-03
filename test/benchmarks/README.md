# Data-Structure Benchmarks
While asking myself which Data-Structure is considered the "best" for common tasks, I decided to find it out.
Here are the results of the analysis, which, in turn, `@avensio/graph` and other packages can benefit from.

## List
The table below shows the results of 10 Benchmark runs for all list functions cumulated.

| Run | Function         | Data-Structure                       |
|-----|------------------|--------------------------------------|
| 1   | list functions   | List                                 |
| 2   | list functions   | List / LinkedList / DoublyLinkedList |
| 3   | list functions   | CyclicDoublyLinkedList               |
| 4   | list functions   | List                                 |
| 5   | list functions   | List / LinkedList                    |
| 6   | list functions   | DoublyLinkedList                     |
| 7   | list functions   | List                                 |
| 8   | list functions   | List                                 |
| 9   | list functions   | LinkedList                           |
| 10  | list functions   | DoublyLinkedList                     |

The test results show, that a native Array-backed `List` is considered the fastest for common tasks. 

## Queue
The table below shows the results of 10 Benchmark runs for the `enqueue` und `dequeue` functions.

| Run | Function          | Data-Structure        |
|-----|-------------------|-----------------------|
| 1   | enqueue / dequeue | LinkedQueue / Dequeue |
| 2   | enqueue / dequeue | LinkedQueue / Dequeue |
| 3   | enqueue / dequeue | LinkedQueue / Dequeue |
| 4   | enqueue / dequeue | LinkedQueue           |
| 5   | enqueue / dequeue | LinkedQueue / Dequeue |
| 6   | enqueue / dequeue | LinkedQueue / Dequeue |
| 7   | enqueue / dequeue | LinkedQueue / Dequeue |
| 8   | enqueue / dequeue | Dequeue               |
| 9   | enqueue / dequeue | LinkedQueue           |
| 10  | enqueue / dequeue | LinkedQueue / Dequeue |

The results show, that a `LinkedQueue` fit best for queue tasks, since the `enqueue` function is much faster than of `Dequeue`.

## Stack
The table below shows the results of 10 Benchmark runs for the `push` und `pop` functions.

| Run | Function   | Data-Structure      |
|-----|------------|---------------------|
| 1   | push / pop | LinkedStack         |
| 2   | push / pop | LinkedStack / Stack |
| 3   | push / pop | LinkedStack / Stack |
| 4   | push / pop | LinkedStack / Stack |
| 5   | push / pop | LinkedStack / Stack |
| 6   | push / pop | LinkedStack         |
| 7   | push / pop | LinkedStack / Stack |
| 8   | push / pop | LinkedStack         |
| 9   | push / pop | LinkedStack         |
| 10  | push / pop | LinkedStack         |

The results clearly shows, that `LinkedList` should be used for Stack tasks, since `push` is much faster for `LinkedStack` then `pop` for `Stack`.

## Conclusions
* Native Array-backed `List` is considered faster than other Lists 
* `LinkedStack` is considered faster than native Array-backed `Stack`
* `LinkedQueue` is considered faster than other Queues (also native Array-backend `Queue`)

See [benchmarking output](benchmarking-output.txt) for details about the output from `vitest bench`. 

## 2025 Benchmark Re-evaluation
To double-check the current implementations, the complete benchmark suite was executed ten consecutive times.  
The raw Vitest output for these runs is stored in [`benchmark-runs-20251103-231147.txt`](benchmark-runs-20251103-231147.txt).

The table below lists, for each run, the data structure that finished first in the key benchmark groups.

| Run | add/enqueue/push | queue (dequeue) | stack (push) | stack (pop) | contains      |
| --- | ---------------- | --------------- | ------------ | ----------- | ------------- |
| 1   | DoublyLinkedList | LinkedQueue     | LinkedStack  | Stack       | List          |
| 2   | Stack            | LinkedQueue     | LinkedStack  | Stack       | List          |
| 3   | List             | LinkedQueue     | LinkedStack  | Stack       | List          |
| 4   | List             | LinkedQueue     | LinkedStack  | LinkedStack | List          |
| 5   | List             | LinkedQueue     | LinkedStack  | Dequeue     | PriorityQueue |
| 6   | List             | LinkedQueue     | LinkedStack  | LinkedStack | List          |
| 7   | List             | LinkedQueue     | LinkedStack  | LinkedStack | List          |
| 8   | List             | LinkedQueue     | LinkedStack  | Dequeue     | List          |
| 9   | LinkedList       | LinkedQueue     | LinkedStack  | LinkedStack | List          |
| 10  | LinkedList       | LinkedQueue     | LinkedStack  | LinkedStack | List          |

**Observations**
- Native-array-backed `List` (and in a few cases `LinkedList`) dominated the `add/enqueue/push` test group across all runs.
- `LinkedQueue` was consistently the fastest dequeuer.
- `LinkedStack` remained the quickest for both pushing and popping, with only occasional ties from `Stack` or `Dequeue`.
- `List` largely retained the lead for `contains`, with a single outlier run where the new heap-backed `PriorityQueue` pulled ahead.

### November 2025 extended rerun
To evaluate the expanded benchmark suite, all benchmark groups were executed ten times with the **updated batching configuration**. The raw output is stored in [`benchmark-runs-20251104-070000.txt`](benchmark-runs-20251104-070000.txt).

Core operations (higher-level data-structure tasks):

| Run | add/enqueue/push | contains | sort  | iterate | reverse iterate | clear | isEmpty | remove               |
| --- | ---------------- | -------- | ----- | ------- | ---------------- | ----- | ------- | -------------------- |
| 1   | List             | List     | List  | List    | List             | List  | List    | DoublyLinkedList     |
| 2   | List             | List     | Stack | List    | List             | List  | List    | DoublyLinkedList     |
| 3   | List             | List     | Stack | List    | List             | List  | List    | DoublyLinkedList     |
| 4   | LinkedList       | List     | List  | List    | List             | List  | List    | DoublyLinkedList     |
| 5   | List             | List     | Stack | List    | List             | List  | List    | CyclicDoublyLinkedList |
| 6   | List             | List     | Stack | List    | List             | List  | List    | CyclicDoublyLinkedList |
| 7   | List             | List     | List  | List    | Queue            | List  | List    | DoublyLinkedList     |
| 8   | List             | List     | Stack | List    | List             | List  | List    | CyclicDoublyLinkedList |
| 9   | LinkedList       | List     | List  | List    | Queue            | List  | List    | DoublyLinkedList     |
| 10  | List             | List     | Stack | List    | List             | List  | List    | DoublyLinkedList     |

Combined queue/stack scenarios:

| Run | dequeue/pop/remove | dequeue/pop | dequeue/remove | pop/remove |
| --- | ------------------ | ----------- | --------------- | ---------- |
| 1   | Stack              | Stack       | Queue           | Stack      |
| 2   | Stack              | Stack       | Queue           | Stack      |
| 3   | Stack              | Stack       | Queue           | Stack      |
| 4   | Stack              | Stack       | Queue           | Stack      |
| 5   | Stack              | Stack       | Queue           | Stack      |
| 6   | Stack              | Stack       | Queue           | Stack      |
| 7   | Stack              | Stack       | Queue           | Stack      |
| 8   | Stack              | Stack       | Queue           | Stack      |
| 9   | Stack              | Stack       | Queue           | Stack      |
| 10  | Stack              | Stack       | Queue           | Stack      |

**Highlights**
- Even with heavier batching, the native `List` (and occasionally `LinkedList`) continued to dominate most core operations.
- `Stack` stayed ahead in the queue/stack hybrid benchmarks, while `Queue` remained the fastest pure dequeuer.
- Doubly linked variants (`DoublyLinkedList`, `CyclicDoublyLinkedList`) still provide the most predictable removal behaviour under load.

## Setup
* `node -v` => `24.8.0`
* `vitest -v` => `vitest/4.0.6 linux-x64 node-v24.8.0`

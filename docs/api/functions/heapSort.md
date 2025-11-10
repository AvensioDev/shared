[**Avensio Shared (TypeDoc)**](../README.md)

***

[Avensio Shared (TypeDoc)](../README.md) / heapSort

# Function: heapSort()

> **heapSort**\<`V`\>(`values`, `comparator`): [`FibonacciHeap`](../classes/FibonacciHeap.md)\<`V`\>

Defined in: sort/index.ts:80

## Type Parameters

### V

`V`

Value type.

## Parameters

### values

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`V`\>

Iterable of values to heapify.

### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`V`\>

Comparator controlling heap ordering.

## Returns

[`FibonacciHeap`](../classes/FibonacciHeap.md)\<`V`\>

Heap representation (call `extractMin` until empty to retrieve sorted order).

## Description

Build a Fibonacci heap from values which can then be drained in order.

## Example

```ts
const heap = heapSort(items, numberComparatorASC)
heap.extractMin()
```

## Remarks

Complexity: O(n) to build, O(log n) per extraction.

[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / heapSort

# Function: heapSort()

> **heapSort**\<`V`\>(`values`, `comparator`): [`FibonacciHeap`](../classes/FibonacciHeap.md)\<`V`\>

Defined in: sort/index.ts:80

Build a Fibonacci heap from values which can then be drained in order.

## Type Parameters

### V

`V`

Value type.

## Parameters

### values

`Iterable`\<`V`\>

Iterable of values to heapify.

### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`V`\>

Comparator controlling heap ordering.

## Returns

[`FibonacciHeap`](../classes/FibonacciHeap.md)\<`V`\>

Heap representation (call `extractMin` until empty to retrieve sorted order).

## Example

```ts
const heap = heapSort(items, numberComparatorASC)
heap.extractMin()
```
 Complexity: O(n) to build, O(log n) per extraction.

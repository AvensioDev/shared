[**Avensio Shared (TypeDoc)**](../README.md)

***

[Avensio Shared (TypeDoc)](../README.md) / quicksort

# Function: quicksort()

> **quicksort**\<`V`\>(`collection`, `comparator`, `factory`): [`ICollection`](../interfaces/ICollection.md)\<`V`\>

Defined in: sort/index.ts:35

## Type Parameters

### V

`V`

Value type.

## Parameters

### collection

[`ICollection`](../interfaces/ICollection.md)\<`V`\>

Target collection (mutated while sorting).

### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`V`\>

Comparator used for ordering.

### factory

() => [`ICollection`](../interfaces/ICollection.md)\<`V`\>

Factory used to allocate temporary collections.

## Returns

[`ICollection`](../interfaces/ICollection.md)\<`V`\>

Sorted collection instance from the factory.

## Description

Sort a collection by recursively partitioning around a pivot.

## Example

```ts
const sorted = quicksort(list, createComparator('score'), () => new List())
```

## Remarks

Complexity: Average O(n log n), worst-case O(n²) when partitions are imbalanced.

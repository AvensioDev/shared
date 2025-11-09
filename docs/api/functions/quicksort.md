[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / quicksort

# Function: quicksort()

> **quicksort**\<`V`\>(`collection`, `comparator`, `factory`): [`ICollection`](../interfaces/ICollection.md)\<`V`\>

Defined in: sort/index.ts:19

Quicksort recursively splits a collection into two chunks
by a pivot element and sort both chunks on the way to the final result.

## Type Parameters

### V

`V`

## Parameters

### collection

[`ICollection`](../interfaces/ICollection.md)\<`V`\>

instance of an ICollection type for sorting

### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`V`\>

### factory

() => [`ICollection`](../interfaces/ICollection.md)\<`V`\>

an ICollection type for splitting

## Returns

[`ICollection`](../interfaces/ICollection.md)\<`V`\>

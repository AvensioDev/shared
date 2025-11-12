---
description: Contract for structures that can be sorted in-place.
---

[**Typed API (TypeDoc)**](../README.md)

***

[Typed API (TypeDoc)](../README.md) / ISortable

# Interface: ISortable\<V\>

Defined in: sort/index.ts:12

## Extended by

- [`ICollection`](ICollection.md)

## Type Parameters

### V

`V`

Value type.

## Methods

### sort()

> **sort**(`cmp?`): `void`

Defined in: sort/index.ts:18

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`V`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

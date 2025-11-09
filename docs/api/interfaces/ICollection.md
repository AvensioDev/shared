---
description: Base contract shared by all collections.
---

[**Avensio Shared**](../README.md)

***

[Avensio Shared](../README.md) / ICollection

# Interface: ICollection\<E\>

Defined in: index.ts:138

## Since

2.0.0

## Extends

- [`ISortable`](ISortable.md)\<`E`\>.[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`\>.[`IReverseIterable`](IReverseIterable.md)\<`E`\>

## Extended by

- [`IStack`](IStack.md)
- [`IQueue`](IQueue.md)
- [`IList`](IList.md)
- [`IFibonacciHeap`](IFibonacciHeap.md)

## Type Parameters

### E

`E`

Value type.

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:142

Comparator used for equality/sort checks.

***

### size

> **size**: `number`

Defined in: index.ts:146

Current element count.

## Methods

### add()

> **add**(`element`): `void`

Defined in: index.ts:153

Append an element.

#### Parameters

##### element

`E`

#### Returns

`void`

#### Remarks

Complexity: Amortized O(1) unless stated otherwise.

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: index.ts:160

Append every element from another collection.

#### Parameters

##### collection

`ICollection`\<`E`\>

#### Returns

`void`

#### Remarks

Complexity: O(n + m) where m is `collection.size`.

***

### clear()

> **clear**(): `void`

Defined in: index.ts:178

Remove all entries.

#### Returns

`void`

#### Remarks

Complexity: O(n)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: index.ts:192

Test membership using the comparator when available.

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(n) worst case

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:185

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

***

### remove()

> **remove**(`e`, `isIndex?`): `number` \| `E`

Defined in: index.ts:171

Remove by value or index.

#### Parameters

##### e

Element or index.

`number` | `E`

##### isIndex?

`boolean`

When `true`, treat `e` as index.

#### Returns

`number` \| `E`

Removed element or index of removal.

#### Throws

If neither argument nor existing comparator are set.

#### Remarks

Complexity: O(n) worst case.

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

Defined in: index.ts:129

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Inherited from

[`IReverseIterable`](IReverseIterable.md).[`reverseIterator`](IReverseIterable.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: sort/index.ts:18

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Inherited from

[`ISortable`](ISortable.md).[`sort`](ISortable.md#sort)

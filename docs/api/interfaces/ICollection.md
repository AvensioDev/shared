[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / ICollection

# Interface: ICollection\<E\>

Defined in: index.ts:138

Base contract shared by all collections.

## Since

2.0.0

## Extends

- [`ISortable`](ISortable.md)\<`E`\>.`Iterable`\<`E`\>.[`IReverseIterable`](IReverseIterable.md)\<`E`\>

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

Defined in: index.ts:152

Append an element.

 Complexity: Amortized O(1) unless stated otherwise.

#### Parameters

##### element

`E`

#### Returns

`void`

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: index.ts:158

Append every element from another collection.

 Complexity: O(n + m) where m is `collection.size`.

#### Parameters

##### collection

`ICollection`\<`E`\>

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: index.ts:173

Remove all entries.

 Complexity: O(n)

#### Returns

`void`

***

### contains()

> **contains**(`element`): `boolean`

Defined in: index.ts:185

Test membership using the comparator when available.

 Complexity: O(n)

#### Parameters

##### element

`E`

#### Returns

`boolean`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:179

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

***

### remove()

> **remove**(`e`, `isIndex?`): `number` \| `E`

Defined in: index.ts:167

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
 Complexity: O(n) worst case.

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: index.ts:129

Iterates elements from the most recently added to the earliest.

#### Returns

`Generator`\<`E`\>

#### Inherited from

[`IReverseIterable`](IReverseIterable.md).[`reverseIterator`](IReverseIterable.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: sort/index.ts:19

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Inherited from

[`ISortable`](ISortable.md).[`sort`](ISortable.md#sort)

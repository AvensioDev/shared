---
description: Base contract shared by all collections.
---

[**Avensio Shared (TypeDoc)**](../README.md)

***

[Avensio Shared (TypeDoc)](../README.md) / IList

# Interface: IList\<E\>

Defined in: list.ts:91

## Since

2.0.0

## Extends

- [`ICollection`](ICollection.md)\<`E`\>.[`IListFunctions`](IListFunctions.md)\<`E`\>

## Extended by

- [`ILinkedList`](ILinkedList.md)

## Type Parameters

### E

`E`

Value type.

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:142

Comparator used for equality/sort checks.

#### Inherited from

[`ICollection`](ICollection.md).[`comparator`](ICollection.md#comparator)

***

### size

> **size**: `number`

Defined in: index.ts:146

Current element count.

#### Inherited from

[`ICollection`](ICollection.md).[`size`](ICollection.md#size)

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

#### Inherited from

[`ICollection`](ICollection.md).[`add`](ICollection.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: list.ts:98

Append every value from an iterable.

#### Parameters

##### collection

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`\>

Source iterable.

#### Returns

`void`

#### Remarks

Complexity: O(n)

#### Overrides

[`ICollection`](ICollection.md).[`addAll`](ICollection.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: index.ts:178

Remove all entries.

#### Returns

`void`

#### Remarks

Complexity: O(n)

#### Inherited from

[`ICollection`](ICollection.md).[`clear`](ICollection.md#clear)

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

#### Inherited from

[`ICollection`](ICollection.md).[`contains`](ICollection.md#contains)

***

### equals()

> **equals**(`otherList`): `boolean`

Defined in: list.ts:124

Compare equality value-by-value using the comparator.

#### Parameters

##### otherList

`IList`\<`E`\>

List to compare.

#### Returns

`boolean`

`true` when lengths match and all elements compare equal.

***

### every()

> **every**(`predicate`): `boolean`

Defined in: list.ts:51

Test whether every element matches the predicate.

#### Parameters

##### predicate

(`element`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when all elements satisfy the predicate.

#### Remarks

Complexity: O(n)

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`every`](IListFunctions.md#every)

***

### filter()

> **filter**(`predicate`): `IList`\<`E`\>

Defined in: list.ts:42

Create a list containing values that satisfy the predicate.

#### Parameters

##### predicate

(`element`) => `boolean`

Filter callback.

#### Returns

`IList`\<`E`\>

Filtered list.

#### Remarks

Complexity: O(n)

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`filter`](IListFunctions.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:107

Read the element at a given index.

#### Parameters

##### index

`number`

Zero-based index.

#### Returns

`E`

Element at the index.

#### Remarks

Complexity: O(1) for [List](../classes/List.md), O(n) for linked variants.

***

### indexOf()

> **indexOf**(`element`, `startIndex`): `number`

Defined in: list.ts:134

Locate the first matching element starting at `startIndex`.

#### Parameters

##### element

`E`

Needle value.

##### startIndex

`number`

Optional search start.

#### Returns

`number`

Index or `-1`.

#### Remarks

Complexity: O(n)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:185

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Inherited from

[`ICollection`](ICollection.md).[`isEmpty`](ICollection.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): `IList`\<`V`\>

Defined in: list.ts:22

Transform each element.

#### Type Parameters

##### V

`V`

Result type.

#### Parameters

##### fn

(`element`) => `V`

Mapper invoked per element.

#### Returns

`IList`\<`V`\>

New list containing mapped values.

#### Remarks

Complexity: O(n)

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`map`](IListFunctions.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:33

Reduce the list to a single value.

#### Type Parameters

##### V

`V`

Accumulator type.

#### Parameters

##### fn

(`accumulator`, `element`) => `V`

Reducer callback.

##### initialValue?

`V`

Optional starting value.

#### Returns

`V`

Accumulated result.

#### Remarks

Complexity: O(n)

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`reduce`](IListFunctions.md#reduce)

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

#### Inherited from

[`ICollection`](ICollection.md).[`remove`](ICollection.md#remove)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

Defined in: list.ts:139

Iterate backwards.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Overrides

[`ICollection`](ICollection.md).[`reverseIterator`](ICollection.md#reverseiterator)

***

### set()

> **set**(`index`, `element`): `boolean`

Defined in: list.ts:116

Replace the element at `index`.

#### Parameters

##### index

`number`

Position to update.

##### element

New value.

`E` | `null`

#### Returns

`boolean`

`true` when successful.

***

### slice()

> **slice**(`startIndex`, `endIndex`): `IList`\<`E`\>

Defined in: list.ts:70

Take a slice using modulo arithmetic for wrap-around indices.

#### Parameters

##### startIndex

`number`

Beginning index (accepts negatives).

##### endIndex

`number`

Ending index.

#### Returns

`IList`\<`E`\>

New list with copied range.

#### Remarks

Complexity: O(k) where k is slice length.

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`slice`](IListFunctions.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): `IList`\<`E`\>

Defined in: list.ts:78

Variant of [slice](IListFunctions.md#slice) where the sign of `endIndex` decides direction.

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`IList`\<`E`\>

New list containing copied range.

#### Remarks

Complexity: O(k)

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`slice2`](IListFunctions.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:60

Test whether any element matches the predicate.

#### Parameters

##### predicate

(`element`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when at least one element matches.

#### Remarks

Complexity: O(n)

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`some`](IListFunctions.md#some)

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

[`ICollection`](ICollection.md).[`sort`](ICollection.md#sort)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): `IList`\<`E`\>

Defined in: list.ts:88

Remove and return a consecutive range.

#### Parameters

##### startIndex

`number`

Start position.

##### deleteCount

`number`

Number of items to remove (negative => left).

#### Returns

`IList`\<`E`\>

List containing removed elements.

#### Remarks

Complexity: O(n)

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`splice`](IListFunctions.md#splice)

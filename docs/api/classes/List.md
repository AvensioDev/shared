---
description: |-
  Array-backed 
   optimized for random access and iteration.
---

[**Avensio Shared**](../README.md)

***

[Avensio Shared](../README.md) / List

# Class: List\<E\>

Defined in: list.ts:212

## Example

```ts
const list = new List([1, 2, 3])
list.add(4)
list.slice(1, 3) // -> [2, 3]
```

## Since

2.0.0

## Type Parameters

### E

`E`

Value type.

## Implements

- [`IList`](../interfaces/IList.md)\<`E`\>

## Constructors

### Constructor

> **new List**\<`E`\>(`elements?`): `List`\<`E`\>

Defined in: list.ts:223

#### Parameters

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`, `any`, `any`\>

#### Returns

`List`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: list.ts:221

Comparator used for equality/sort checks.

#### Implementation of

[`IList`](../interfaces/IList.md).[`comparator`](../interfaces/IList.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: list.ts:217

Current element count.

#### Implementation of

[`IList`](../interfaces/IList.md).[`size`](../interfaces/IList.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Defined in: list.ts:511

Iterate through all elements in the List.

#### Returns

[`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Iterator for the List.

#### Implementation of

`IList.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: list.ts:234

Append an element.

#### Parameters

##### e

`E`

#### Returns

`void`

#### Remarks

Complexity: Amortized O(1) unless stated otherwise.

#### Implementation of

[`IList`](../interfaces/IList.md).[`add`](../interfaces/IList.md#add)

***

### addAll()

> **addAll**(`c`): `void`

Defined in: list.ts:244

Append every element from another collection.

#### Parameters

##### c

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`\>

#### Returns

`void`

#### Remarks

Complexity: O(n + m) where m is `collection.size`.

#### Implementation of

[`IList`](../interfaces/IList.md).[`addAll`](../interfaces/IList.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: list.ts:437

Remove all entries.

#### Returns

`void`

#### Remarks

Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`clear`](../interfaces/IList.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: list.ts:463

Test membership using the comparator when available.

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(n) worst case

#### Implementation of

[`IList`](../interfaces/IList.md).[`contains`](../interfaces/IList.md#contains)

***

### equals()

> **equals**(`l`): `boolean`

Defined in: list.ts:470

Compare equality value-by-value using the comparator.

#### Parameters

##### l

[`IList`](../interfaces/IList.md)\<`E`\>

List to compare.

#### Returns

`boolean`

`true` when lengths match and all elements compare equal.

#### Implementation of

[`IList`](../interfaces/IList.md).[`equals`](../interfaces/IList.md#equals)

***

### every()

> **every**(`predicate`): `boolean`

Defined in: list.ts:401

Test whether every element matches the predicate.

#### Parameters

##### predicate

(`e`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when all elements satisfy the predicate.

#### Remarks

Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`every`](../interfaces/IList.md#every)

***

### filter()

> **filter**(`predicate`): `List`\<`E`\>

Defined in: list.ts:388

Create a list containing values that satisfy the predicate.

#### Parameters

##### predicate

(`e`) => `boolean`

Filter callback.

#### Returns

`List`\<`E`\>

Filtered list.

#### Remarks

Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`filter`](../interfaces/IList.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:253

Read the element at a given index.

#### Parameters

##### index

`number`

Zero-based index.

#### Returns

`E`

Element at the index.

#### Remarks

Complexity: O(1) for List, O(n) for linked variants.

#### Implementation of

[`IList`](../interfaces/IList.md).[`get`](../interfaces/IList.md#get)

***

### indexOf()

> **indexOf**(`element`, `startIndex`): `number`

Defined in: list.ts:482

Locate the first matching element starting at `startIndex`.

#### Parameters

##### element

`E`

Needle value.

##### startIndex

`number` = `0`

Optional search start.

#### Returns

`number`

Index or `-1`.

#### Remarks

Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`indexOf`](../interfaces/IList.md#indexof)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: list.ts:430

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IList`](../interfaces/IList.md).[`isEmpty`](../interfaces/IList.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): `List`\<`V`\>

Defined in: list.ts:370

Transform each element.

#### Type Parameters

##### V

`V`

Result type.

#### Parameters

##### fn

(`e`) => `V`

Mapper invoked per element.

#### Returns

`List`\<`V`\>

New list containing mapped values.

#### Remarks

Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`map`](../interfaces/IList.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:381

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

#### Implementation of

[`IList`](../interfaces/IList.md).[`reduce`](../interfaces/IList.md#reduce)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: list.ts:453

Remove by value or index.

#### Parameters

##### target

Element or index.

`number` | `E`

##### isIndex

`boolean` = `true`

When `true`, treat `e` as index.

#### Returns

`number` \| `E`

Removed element or index of removal.

#### Remarks

Complexity: O(n) worst case.

#### Implementation of

[`IList`](../interfaces/IList.md).[`remove`](../interfaces/IList.md#remove)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`, `void`, `unknown`\>

Defined in: list.ts:501

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`, `void`, `unknown`\>

#### Implementation of

[`IList`](../interfaces/IList.md).[`reverseIterator`](../interfaces/IList.md#reverseiterator)

***

### set()

> **set**(`index`, `e`): `boolean`

Defined in: list.ts:260

Replace the element at `index`.

#### Parameters

##### index

`number`

Position to update.

##### e

`E`

New value.

#### Returns

`boolean`

`true` when successful.

#### Implementation of

[`IList`](../interfaces/IList.md).[`set`](../interfaces/IList.md#set)

***

### slice()

> **slice**(`startIndex`, `endIndex`): `List`\<`E`\>

Defined in: list.ts:274

Create a slice, treating indices modulo the current size.

#### Parameters

##### startIndex

`number`

Start index (accepts negatives to wrap from the end).

##### endIndex

`number`

End index (exclusive).

#### Returns

`List`\<`E`\>

New list containing the copied range.

#### Remarks

Complexity: O(k) where k is the number of elements copied.

#### Implementation of

[`IList`](../interfaces/IList.md).[`slice`](../interfaces/IList.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): `List`\<`E`\>

Defined in: list.ts:299

Slice the list while interpreting `endIndex` as a direction toggle.

#### Parameters

##### startIndex

`number`

Starting index.

##### endIndex

`number`

Determines direction (negative => left).

#### Returns

`List`\<`E`\>

New list containing the copied path.

#### Remarks

Complexity: O(k)

#### Implementation of

[`IList`](../interfaces/IList.md).[`slice2`](../interfaces/IList.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:416

Test whether any element matches the predicate.

#### Parameters

##### predicate

(`e`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when at least one element matches.

#### Remarks

Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`some`](../interfaces/IList.md#some)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: list.ts:494

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Implementation of

[`IList`](../interfaces/IList.md).[`sort`](../interfaces/IList.md#sort)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): `List`\<`E`\>

Defined in: list.ts:362

Remove a range and return it as a new list.

#### Parameters

##### startIndex

`number`

Start index (negative values wrap from the end).

##### deleteCount

`number`

Number of elements to remove (negative => left).

#### Returns

`List`\<`E`\>

Removed elements as a new list.

#### Remarks

Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`splice`](../interfaces/IList.md#splice)

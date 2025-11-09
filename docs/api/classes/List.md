[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / List

# Class: List\<E\>

Defined in: list.ts:193

Array-backed [IList](../interfaces/IList.md) optimized for random access and iteration.

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

Defined in: list.ts:198

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`List`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: list.ts:196

Comparator used for equality/sort checks.

#### Implementation of

[`IList`](../interfaces/IList.md).[`comparator`](../interfaces/IList.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: list.ts:195

Current element count.

#### Implementation of

[`IList`](../interfaces/IList.md).[`size`](../interfaces/IList.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: list.ts:452

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IList.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: list.ts:206

Append an element.

 Complexity: Amortized O(1) unless stated otherwise.

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`IList`](../interfaces/IList.md).[`add`](../interfaces/IList.md#add)

***

### addAll()

> **addAll**(`c`): `void`

Defined in: list.ts:212

Append every value from an iterable.

#### Parameters

##### c

`Iterable`\<`E`\>

#### Returns

`void`

#### Implementation of

[`IList`](../interfaces/IList.md).[`addAll`](../interfaces/IList.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: list.ts:391

Remove all entries.

 Complexity: O(n)

#### Returns

`void`

#### Implementation of

[`IList`](../interfaces/IList.md).[`clear`](../interfaces/IList.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: list.ts:414

Test membership using the comparator when available.

 Complexity: O(n)

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Implementation of

[`IList`](../interfaces/IList.md).[`contains`](../interfaces/IList.md#contains)

***

### equals()

> **equals**(`l`): `boolean`

Defined in: list.ts:421

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

Defined in: list.ts:362

Test whether every element matches the predicate.

#### Parameters

##### predicate

(`e`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when all elements satisfy the predicate.
 Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`every`](../interfaces/IList.md#every)

***

### filter()

> **filter**(`predicate`): `List`\<`E`\>

Defined in: list.ts:349

Create a list containing values that satisfy the predicate.

#### Parameters

##### predicate

(`e`) => `boolean`

Filter callback.

#### Returns

`List`\<`E`\>

Filtered list.
 Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`filter`](../interfaces/IList.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:217

Read the element at a given index.

#### Parameters

##### index

`number`

Zero-based index.

#### Returns

`E`

Element at the index.
 Complexity: O(1) for List, O(n) for linked variants.

#### Implementation of

[`IList`](../interfaces/IList.md).[`get`](../interfaces/IList.md#get)

***

### indexOf()

> **indexOf**(`element`, `startIndex`): `number`

Defined in: list.ts:433

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
 Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`indexOf`](../interfaces/IList.md#indexof)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: list.ts:388

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IList`](../interfaces/IList.md).[`isEmpty`](../interfaces/IList.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): `List`\<`V`\>

Defined in: list.ts:331

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
 Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`map`](../interfaces/IList.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:342

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
 Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`reduce`](../interfaces/IList.md#reduce)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: list.ts:404

Remove by value or index.

#### Parameters

##### target

`number` | `E`

##### isIndex

`boolean` = `true`

When `true`, treat `e` as index.

#### Returns

`number` \| `E`

Removed element or index of removal.
 Complexity: O(n) worst case.

#### Implementation of

[`IList`](../interfaces/IList.md).[`remove`](../interfaces/IList.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`, `void`, `unknown`\>

Defined in: list.ts:446

Iterate backwards.

#### Returns

`Generator`\<`E`, `void`, `unknown`\>

#### Implementation of

[`IList`](../interfaces/IList.md).[`reverseIterator`](../interfaces/IList.md#reverseiterator)

***

### set()

> **set**(`index`, `e`): `boolean`

Defined in: list.ts:221

Replace the element at `index`.

#### Parameters

##### index

`number`

Position to update.

##### e

`E`

#### Returns

`boolean`

`true` when successful.

#### Implementation of

[`IList`](../interfaces/IList.md).[`set`](../interfaces/IList.md#set)

***

### slice()

> **slice**(`startIndex`, `endIndex`): `List`\<`E`\>

Defined in: list.ts:235

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
 Complexity: O(k) where k is the number of elements copied.

#### Implementation of

[`IList`](../interfaces/IList.md).[`slice`](../interfaces/IList.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): `List`\<`E`\>

Defined in: list.ts:260

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
 Complexity: O(k)

#### Implementation of

[`IList`](../interfaces/IList.md).[`slice2`](../interfaces/IList.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:377

Test whether any element matches the predicate.

#### Parameters

##### predicate

(`e`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when at least one element matches.
 Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`some`](../interfaces/IList.md#some)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: list.ts:442

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

Defined in: list.ts:323

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
 Complexity: O(n)

#### Implementation of

[`IList`](../interfaces/IList.md).[`splice`](../interfaces/IList.md#splice)

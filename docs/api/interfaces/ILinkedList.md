[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / ILinkedList

# Interface: ILinkedList\<E\>

Defined in: list.ts:130

Base contract shared by all collections.

## Since

2.0.0

## Extends

- [`IList`](IList.md)\<`E`\>

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

[`IList`](IList.md).[`comparator`](IList.md#comparator)

***

### first

> **first**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:134

Head node reference.

***

### last

> **last**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:138

Tail node reference.

***

### size

> **size**: `number`

Defined in: index.ts:146

Current element count.

#### Inherited from

[`IList`](IList.md).[`size`](IList.md#size)

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

#### Inherited from

[`IList`](IList.md).[`add`](IList.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: list.ts:91

Append every value from an iterable.

#### Parameters

##### collection

`Iterable`\<`E`\>

Source iterable.
 Complexity: O(n)

#### Returns

`void`

#### Inherited from

[`IList`](IList.md).[`addAll`](IList.md#addall)

***

### addFirst()

> **addFirst**(`element`): `void`

Defined in: list.ts:150

Insert at the beginning.

 Complexity: O(1)

#### Parameters

##### element

`E`

#### Returns

`void`

***

### addLast()

> **addLast**(`element`): `void`

Defined in: list.ts:156

Insert at the end.

 Complexity: O(1)

#### Parameters

##### element

`E`

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

#### Inherited from

[`IList`](IList.md).[`clear`](IList.md#clear)

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

#### Inherited from

[`IList`](IList.md).[`contains`](IList.md#contains)

***

### equals()

> **equals**(`otherList`): `boolean`

Defined in: list.ts:114

Compare equality value-by-value using the comparator.

#### Parameters

##### otherList

[`IList`](IList.md)\<`E`\>

List to compare.

#### Returns

`boolean`

`true` when lengths match and all elements compare equal.

#### Inherited from

[`IList`](IList.md).[`equals`](IList.md#equals)

***

### every()

> **every**(`predicate`): `boolean`

Defined in: list.ts:48

Test whether every element matches the predicate.

#### Parameters

##### predicate

(`element`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when all elements satisfy the predicate.
 Complexity: O(n)

#### Inherited from

[`IList`](IList.md).[`every`](IList.md#every)

***

### filter()

> **filter**(`predicate`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:40

Create a list containing values that satisfy the predicate.

#### Parameters

##### predicate

(`element`) => `boolean`

Filter callback.

#### Returns

[`IList`](IList.md)\<`E`\>

Filtered list.
 Complexity: O(n)

#### Inherited from

[`IList`](IList.md).[`filter`](IList.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:99

Read the element at a given index.

#### Parameters

##### index

`number`

Zero-based index.

#### Returns

`E`

Element at the index.
 Complexity: O(1) for [List](../classes/List.md), O(n) for linked variants.

#### Inherited from

[`IList`](IList.md).[`get`](IList.md#get)

***

### getFirst()

> **getFirst**(): `E`

Defined in: list.ts:162

Read the first element.

#### Returns

`E`

#### Throws

When empty.

***

### getLast()

> **getLast**(): `E`

Defined in: list.ts:166

Read the last element.

#### Returns

`E`

***

### getNode()

> **getNode**(`index`): [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:144

Retrieve the internal node at `index`.

 Complexity: O(n)

#### Parameters

##### index

`number`

#### Returns

[`Node`](../type-aliases/Node.md)\<`E`\>

***

### indexOf()

> **indexOf**(`element`, `startIndex`): `number`

Defined in: list.ts:123

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
 Complexity: O(n)

#### Inherited from

[`IList`](IList.md).[`indexOf`](IList.md#indexof)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:179

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Inherited from

[`IList`](IList.md).[`isEmpty`](IList.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): [`IList`](IList.md)\<`V`\>

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

[`IList`](IList.md)\<`V`\>

New list containing mapped values.
 Complexity: O(n)

#### Inherited from

[`IList`](IList.md).[`map`](IList.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:32

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

#### Inherited from

[`IList`](IList.md).[`reduce`](IList.md#reduce)

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

#### Inherited from

[`IList`](IList.md).[`remove`](IList.md#remove)

***

### removeFirst()

> **removeFirst**(): `E`

Defined in: list.ts:172

Remove and return the head value.

 Complexity: O(1)

#### Returns

`E`

***

### removeLast()

> **removeLast**(): `E`

Defined in: list.ts:178

Remove and return the tail value.

 Complexity: O(1)

#### Returns

`E`

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: list.ts:127

Iterate backwards.

#### Returns

`Generator`\<`E`\>

#### Inherited from

[`IList`](IList.md).[`reverseIterator`](IList.md#reverseiterator)

***

### set()

> **set**(`index`, `element`): `boolean`

Defined in: list.ts:107

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

#### Inherited from

[`IList`](IList.md).[`set`](IList.md#set)

***

### slice()

> **slice**(`startIndex`, `endIndex`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:65

Take a slice using modulo arithmetic for wrap-around indices.

#### Parameters

##### startIndex

`number`

Beginning index (accepts negatives).

##### endIndex

`number`

Ending index.

#### Returns

[`IList`](IList.md)\<`E`\>

New list with copied range.
 Complexity: O(k) where k is slice length.

#### Inherited from

[`IList`](IList.md).[`slice`](IList.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:72

Variant of [slice](IListFunctions.md#slice) where the sign of `endIndex` decides direction.

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

[`IList`](IList.md)\<`E`\>

New list containing copied range.
 Complexity: O(k)

#### Inherited from

[`IList`](IList.md).[`slice2`](IList.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:56

Test whether any element matches the predicate.

#### Parameters

##### predicate

(`element`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when at least one element matches.
 Complexity: O(n)

#### Inherited from

[`IList`](IList.md).[`some`](IList.md#some)

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

[`IList`](IList.md).[`sort`](IList.md#sort)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:81

Remove and return a consecutive range.

#### Parameters

##### startIndex

`number`

Start position.

##### deleteCount

`number`

Number of items to remove (negative => left).

#### Returns

[`IList`](IList.md)\<`E`\>

List containing removed elements.
 Complexity: O(n)

#### Inherited from

[`IList`](IList.md).[`splice`](IList.md#splice)

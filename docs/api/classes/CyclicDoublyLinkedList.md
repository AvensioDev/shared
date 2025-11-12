---
description: Circular doubly linked list used by Fibonacci heap internals.
---

[**Typed API (TypeDoc)**](../README.md)

***

[Typed API (TypeDoc)](../README.md) / CyclicDoublyLinkedList

# Class: CyclicDoublyLinkedList\<E\>

Defined in: list.ts:1505

## Type Parameters

### E

`E`

## Implements

- [`ILinkedList`](../interfaces/ILinkedList.md)\<`E`\>

## Constructors

### Constructor

> **new CyclicDoublyLinkedList**\<`E`\>(`elements?`, `reverse?`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1523

#### Parameters

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`, `any`, `any`\>

##### reverse?

`boolean` = `false`

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: list.ts:1521

Comparator used for equality/sort checks.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`comparator`](../interfaces/ILinkedList.md#comparator)

***

### first

> **first**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:1509

Head node reference.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`first`](../interfaces/ILinkedList.md#first)

***

### last

> **last**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:1513

Tail node reference.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`last`](../interfaces/ILinkedList.md#last)

***

### size

> **size**: `number` = `0`

Defined in: list.ts:1517

Current element count.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`size`](../interfaces/ILinkedList.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Defined in: list.ts:1978

Iterates through the whole CyclicDoublyLinkedList.

#### Returns

[`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Iterator for the CyclicDoublyLinkedList.

#### Remarks

Complexity: O(size)

#### Implementation of

`ILinkedList.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: list.ts:1535

Append an element.

#### Parameters

##### e

`E`

#### Returns

`void`

#### Remarks

Complexity: Amortized O(1) unless stated otherwise.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`add`](../interfaces/ILinkedList.md#add)

***

### addAll()

> **addAll**(`c`): `void`

Defined in: list.ts:1542

Append every element from another collection.

#### Parameters

##### c

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`\>

#### Returns

`void`

#### Remarks

Complexity: O(n + m) where m is `collection.size`.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`addAll`](../interfaces/ILinkedList.md#addall)

***

### addFirst()

> **addFirst**(`e`): `void`

Defined in: list.ts:1551

Insert at the beginning.

#### Parameters

##### e

`E`

#### Returns

`void`

#### Remarks

Complexity: O(1)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`addFirst`](../interfaces/ILinkedList.md#addfirst)

***

### addLast()

> **addLast**(`e`): `void`

Defined in: list.ts:1581

Insert at the end.

#### Parameters

##### e

`E`

#### Returns

`void`

#### Remarks

Complexity: O(1)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`addLast`](../interfaces/ILinkedList.md#addlast)

***

### clear()

> **clear**(): `void`

Defined in: list.ts:1606

Remove all entries.

#### Returns

`void`

#### Remarks

Complexity: O(n)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`clear`](../interfaces/ILinkedList.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: list.ts:1919

Test membership using the comparator when available.

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(n) worst case

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`contains`](../interfaces/ILinkedList.md#contains)

***

### equals()

> **equals**(`l`): `boolean`

Defined in: list.ts:1926

Compare equality value-by-value using the comparator.

#### Parameters

##### l

[`IList`](../interfaces/IList.md)\<`E`\>

List to compare.

#### Returns

`boolean`

`true` when lengths match and all elements compare equal.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`equals`](../interfaces/ILinkedList.md#equals)

***

### every()

> **every**(`predicate`): `boolean`

Defined in: list.ts:1743

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

[`ILinkedList`](../interfaces/ILinkedList.md).[`every`](../interfaces/ILinkedList.md#every)

***

### filter()

> **filter**(`predicate`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1730

Create a list containing values that satisfy the predicate.

#### Parameters

##### predicate

(`e`) => `boolean`

Filter callback.

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

Filtered list.

#### Remarks

Complexity: O(n)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`filter`](../interfaces/ILinkedList.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:1614

Read the element at a given index.

#### Parameters

##### index

`number`

Zero-based index.

#### Returns

`E`

Element at the index.

#### Remarks

Complexity: O(1) for [List](List.md), O(n) for linked variants.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`get`](../interfaces/ILinkedList.md#get)

***

### getFirst()

> **getFirst**(): `E`

Defined in: list.ts:1772

Read the first element.

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getFirst`](../interfaces/ILinkedList.md#getfirst)

***

### getLast()

> **getLast**(): `E`

Defined in: list.ts:1780

Read the last element.

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getLast`](../interfaces/ILinkedList.md#getlast)

***

### getNode()

> **getNode**(`index`): [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:1897

Retrieve the internal node at `index`.

#### Parameters

##### index

`number`

#### Returns

[`Node`](../type-aliases/Node.md)\<`E`\>

#### Remarks

Complexity: O(n)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getNode`](../interfaces/ILinkedList.md#getnode)

***

### indexOf()

> **indexOf**(`element`): `number`

Defined in: list.ts:1938

Locate the first matching element starting at `startIndex`.

#### Parameters

##### element

`E`

Needle value.

#### Returns

`number`

Index or `-1`.

#### Remarks

Complexity: O(n)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`indexOf`](../interfaces/ILinkedList.md#indexof)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: list.ts:1789

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`isEmpty`](../interfaces/ILinkedList.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): `CyclicDoublyLinkedList`\<`V`\>

Defined in: list.ts:1708

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

`CyclicDoublyLinkedList`\<`V`\>

New list containing mapped values.

#### Remarks

Complexity: O(n)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`map`](../interfaces/ILinkedList.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:1719

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

[`ILinkedList`](../interfaces/ILinkedList.md).[`reduce`](../interfaces/ILinkedList.md#reduce)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: list.ts:1816

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

[`ILinkedList`](../interfaces/ILinkedList.md).[`remove`](../interfaces/ILinkedList.md#remove)

***

### removeFirst()

> **removeFirst**(): `E`

Defined in: list.ts:1826

Remove and return the head value.

#### Returns

`E`

#### Remarks

Complexity: O(1)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`removeFirst`](../interfaces/ILinkedList.md#removefirst)

***

### removeLast()

> **removeLast**(): `E`

Defined in: list.ts:1865

Remove and return the tail value.

#### Returns

`E`

#### Remarks

Complexity: O(1)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`removeLast`](../interfaces/ILinkedList.md#removelast)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`, `void`, `unknown`\>

Defined in: list.ts:1967

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`, `void`, `unknown`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`reverseIterator`](../interfaces/ILinkedList.md#reverseiterator)

***

### set()

> **set**(`index`, `e`): `boolean`

Defined in: list.ts:1628

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

[`ILinkedList`](../interfaces/ILinkedList.md).[`set`](../interfaces/ILinkedList.md#set)

***

### slice()

> **slice**(`startIndex`, `endIndex`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1637

Take a slice using modulo arithmetic for wrap-around indices.

#### Parameters

##### startIndex

`number`

Beginning index (accepts negatives).

##### endIndex

`number`

Ending index.

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

New list with copied range.

#### Remarks

Complexity: O(k) where k is slice length.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`slice`](../interfaces/ILinkedList.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1645

Variant of [slice](../interfaces/IListFunctions.md#slice) where the sign of `endIndex` decides direction.

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

New list containing copied range.

#### Remarks

Complexity: O(k)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`slice2`](../interfaces/ILinkedList.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:1758

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

[`ILinkedList`](../interfaces/ILinkedList.md).[`some`](../interfaces/ILinkedList.md#some)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: list.ts:1949

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`sort`](../interfaces/ILinkedList.md#sort)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1700

Remove and return a consecutive range.

#### Parameters

##### startIndex

`number`

Start position.

##### deleteCount

`number`

Number of items to remove (negative => left).

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

List containing removed elements.

#### Remarks

Complexity: O(n)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`splice`](../interfaces/ILinkedList.md#splice)

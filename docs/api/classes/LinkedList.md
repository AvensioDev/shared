[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / LinkedList

# Class: LinkedList\<E\>

Defined in: list.ts:475

Singly linked list with O(1) head/tail insertions.

## Since

2.0.0

## Type Parameters

### E

`E`

Value type.

## Implements

- [`ILinkedList`](../interfaces/ILinkedList.md)\<`E`\>

## Constructors

### Constructor

> **new LinkedList**\<`E`\>(`elements?`, `reverse?`): `LinkedList`\<`E`\>

Defined in: list.ts:483

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

##### reverse?

`boolean` = `false`

#### Returns

`LinkedList`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: list.ts:479

Comparator used for equality/sort checks.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`comparator`](../interfaces/ILinkedList.md#comparator)

***

### first

> **first**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:476

Head node reference.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`first`](../interfaces/ILinkedList.md#first)

***

### last

> **last**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:477

Tail node reference.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`last`](../interfaces/ILinkedList.md#last)

***

### size

> **size**: `number` = `0`

Defined in: list.ts:478

Current element count.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`size`](../interfaces/ILinkedList.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: list.ts:936

O(size)

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`ILinkedList.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: list.ts:500

Append an element.

 Complexity: Amortized O(1) unless stated otherwise.

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`add`](../interfaces/ILinkedList.md#add)

***

### addAll()

> **addAll**(`c`): `void`

Defined in: list.ts:507

Append every element from another collection.

 Complexity: O(n + m) where m is `collection.size`.

#### Parameters

##### c

`Iterable`\<`E`\>

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`addAll`](../interfaces/ILinkedList.md#addall)

***

### addFirst()

> **addFirst**(`e`): `void`

Defined in: list.ts:516

Insert at the beginning.

 Complexity: O(1)

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`addFirst`](../interfaces/ILinkedList.md#addfirst)

***

### addLast()

> **addLast**(`e`): `void`

Defined in: list.ts:532

Insert at the end.

 Complexity: O(1)

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`addLast`](../interfaces/ILinkedList.md#addlast)

***

### clear()

> **clear**(): `void`

Defined in: list.ts:551

Remove all entries.

 Complexity: O(n)

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`clear`](../interfaces/ILinkedList.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: list.ts:878

Checks if an element is contained in the LinkedList.
For this function to work, a comparator must be set!
O(size) amortized

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`contains`](../interfaces/ILinkedList.md#contains)

***

### equals()

> **equals**(`l`): `boolean`

Defined in: list.ts:886

For this method to work, a comparator must be set

#### Parameters

##### l

[`IList`](../interfaces/IList.md)\<`E`\>

#### Returns

`boolean`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`equals`](../interfaces/ILinkedList.md#equals)

***

### every()

> **every**(`predicate`): `boolean`

Defined in: list.ts:699

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

[`ILinkedList`](../interfaces/ILinkedList.md).[`every`](../interfaces/ILinkedList.md#every)

***

### filter()

> **filter**(`predicate`): `LinkedList`\<`E`\>

Defined in: list.ts:686

Create a list containing values that satisfy the predicate.

#### Parameters

##### predicate

(`e`) => `boolean`

Filter callback.

#### Returns

`LinkedList`\<`E`\>

Filtered list.
 Complexity: O(n)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`filter`](../interfaces/ILinkedList.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:561

O(size)<br>
Ω(1)

#### Parameters

##### index

`number`

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`get`](../interfaces/ILinkedList.md#get)

***

### getFirst()

> **getFirst**(): `E`

Defined in: list.ts:728

Read the first element.

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getFirst`](../interfaces/ILinkedList.md#getfirst)

***

### getLast()

> **getLast**(): `E`

Defined in: list.ts:736

Read the last element.

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getLast`](../interfaces/ILinkedList.md#getlast)

***

### getNode()

> **getNode**(`index`): [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:851

O(index + 1)<br>
Ω(1)

#### Parameters

##### index

`number`

#### Returns

[`Node`](../type-aliases/Node.md)\<`E`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getNode`](../interfaces/ILinkedList.md#getnode)

***

### indexOf()

> **indexOf**(`element`): `number`

Defined in: list.ts:900

Finds the first index of the element
O(size) amortized

#### Parameters

##### element

`E`

#### Returns

`number`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`indexOf`](../interfaces/ILinkedList.md#indexof)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: list.ts:745

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`isEmpty`](../interfaces/ILinkedList.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): `LinkedList`\<`V`\>

Defined in: list.ts:664

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

`LinkedList`\<`V`\>

New list containing mapped values.
 Complexity: O(n)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`map`](../interfaces/ILinkedList.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:675

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

[`ILinkedList`](../interfaces/ILinkedList.md).[`reduce`](../interfaces/ILinkedList.md#reduce)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: list.ts:770

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

[`ILinkedList`](../interfaces/ILinkedList.md).[`remove`](../interfaces/ILinkedList.md#remove)

***

### removeFirst()

> **removeFirst**(): `E`

Defined in: list.ts:780

O(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`removeFirst`](../interfaces/ILinkedList.md#removefirst)

***

### removeLast()

> **removeLast**(): `E`

Defined in: list.ts:816

O(size)<br>
Ω(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`removeLast`](../interfaces/ILinkedList.md#removelast)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`, `void`, `unknown`\>

Defined in: list.ts:927

O(∑ i=1 to size (i))
Ω(1)

#### Returns

`Generator`\<`E`, `void`, `unknown`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`reverseIterator`](../interfaces/ILinkedList.md#reverseiterator)

***

### set()

> **set**(`index`, `e`): `boolean`

Defined in: list.ts:574

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

> **slice**(`startIndex`, `endIndex`): `LinkedList`\<`E`\>

Defined in: list.ts:583

Take a slice using modulo arithmetic for wrap-around indices.

#### Parameters

##### startIndex

`number`

Beginning index (accepts negatives).

##### endIndex

`number`

Ending index.

#### Returns

`LinkedList`\<`E`\>

New list with copied range.
 Complexity: O(k) where k is slice length.

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`slice`](../interfaces/ILinkedList.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): `LinkedList`\<`E`\>

Defined in: list.ts:591

Variant of [slice](../interfaces/IListFunctions.md#slice) where the sign of `endIndex` decides direction.

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`LinkedList`\<`E`\>

New list containing copied range.
 Complexity: O(k)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`slice2`](../interfaces/ILinkedList.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:714

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

[`ILinkedList`](../interfaces/ILinkedList.md).[`some`](../interfaces/ILinkedList.md#some)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: list.ts:908

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

> **splice**(`startIndex`, `deleteCount`): `LinkedList`\<`E`\>

Defined in: list.ts:654

Remove and return a consecutive range.

#### Parameters

##### startIndex

`number`

Start position.

##### deleteCount

`number`

Number of items to remove (negative => left).

#### Returns

`LinkedList`\<`E`\>

List containing removed elements.
 Complexity: O(n)

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`splice`](../interfaces/ILinkedList.md#splice)

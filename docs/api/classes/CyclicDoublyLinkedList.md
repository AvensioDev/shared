[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / CyclicDoublyLinkedList

# Class: CyclicDoublyLinkedList\<E\>

Defined in: list.ts:1203

## Type Parameters

### E

`E`

## Implements

- [`ILinkedList`](../interfaces/ILinkedList.md)\<`E`\>

## Constructors

### Constructor

> **new CyclicDoublyLinkedList**\<`E`\>(`elements?`, `reverse?`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1209

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

##### reverse?

`boolean` = `false`

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: list.ts:1207

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`comparator`](../interfaces/ILinkedList.md#comparator)

***

### first

> **first**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:1204

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`first`](../interfaces/ILinkedList.md#first)

***

### last

> **last**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:1205

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`last`](../interfaces/ILinkedList.md#last)

***

### size

> **size**: `number` = `0`

Defined in: list.ts:1206

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`size`](../interfaces/ILinkedList.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: list.ts:1647

O(size)

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`ILinkedList.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: list.ts:1222

O(1)

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

Defined in: list.ts:1226

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

Defined in: list.ts:1236

O(1)

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

Defined in: list.ts:1267

O(1)

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

Defined in: list.ts:1292

O(1)

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`clear`](../interfaces/ILinkedList.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: list.ts:1588

Checks if an element is contained in the Queue.
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

Defined in: list.ts:1596

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

Defined in: list.ts:1412

#### Parameters

##### predicate

(`e`) => `boolean`

#### Returns

`boolean`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`every`](../interfaces/ILinkedList.md#every)

***

### filter()

> **filter**(`predicate`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1402

#### Parameters

##### predicate

(`e`) => `boolean`

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`filter`](../interfaces/ILinkedList.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:1302

O(size / 2)<br>
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

Defined in: list.ts:1438

O(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getFirst`](../interfaces/ILinkedList.md#getfirst)

***

### getLast()

> **getLast**(): `E`

Defined in: list.ts:1446

O(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getLast`](../interfaces/ILinkedList.md#getlast)

***

### getNode()

> **getNode**(`index`): [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:1563

O(size / 2)<br>
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

Defined in: list.ts:1610

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

Defined in: list.ts:1455

O(1)

#### Returns

`boolean`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`isEmpty`](../interfaces/ILinkedList.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): `CyclicDoublyLinkedList`\<`V`\>

Defined in: list.ts:1386

#### Type Parameters

##### V

`V`

#### Parameters

##### fn

(`e`) => `V`

#### Returns

`CyclicDoublyLinkedList`\<`V`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`map`](../interfaces/ILinkedList.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:1394

#### Type Parameters

##### V

`V`

#### Parameters

##### fn

(`accumulator`, `element`) => `V`

##### initialValue?

`V`

#### Returns

`V`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`reduce`](../interfaces/ILinkedList.md#reduce)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: list.ts:1479

#### Parameters

##### target

`number` | `E`

##### isIndex

`boolean` = `true`

#### Returns

`number` \| `E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`remove`](../interfaces/ILinkedList.md#remove)

***

### removeFirst()

> **removeFirst**(): `E`

Defined in: list.ts:1489

O(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`removeFirst`](../interfaces/ILinkedList.md#removefirst)

***

### removeLast()

> **removeLast**(): `E`

Defined in: list.ts:1529

O(size / 2)<br>
Ω(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`removeLast`](../interfaces/ILinkedList.md#removelast)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`, `void`, `unknown`\>

Defined in: list.ts:1638

In even cases: O(∑ i=1 to &lfloor;size&divide;2&rfloor; (i*2))<br>
In odd cases: O((∑ i=1 to &lfloor;size&divide;2&rfloor; (i*2)) + &lceil;size&divide;2&rceil;)<br>
Ω(1)

#### Returns

`Generator`\<`E`, `void`, `unknown`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`reverseIterator`](../interfaces/ILinkedList.md#reverseiterator)

***

### set()

> **set**(`index`, `e`): `boolean`

Defined in: list.ts:1318

O(size / 2)<br>
Ω(1)

#### Parameters

##### index

`number`

##### e

`E`

#### Returns

`boolean`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`set`](../interfaces/ILinkedList.md#set)

***

### slice()

> **slice**(`startIndex`, `endIndex`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1324

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`slice`](../interfaces/ILinkedList.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1329

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`slice2`](../interfaces/ILinkedList.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:1424

#### Parameters

##### predicate

(`e`) => `boolean`

#### Returns

`boolean`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`some`](../interfaces/ILinkedList.md#some)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: list.ts:1618

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`sort`](../interfaces/ILinkedList.md#sort)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): `CyclicDoublyLinkedList`\<`E`\>

Defined in: list.ts:1381

#### Parameters

##### startIndex

`number`

##### deleteCount

`number`

#### Returns

`CyclicDoublyLinkedList`\<`E`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`splice`](../interfaces/ILinkedList.md#splice)

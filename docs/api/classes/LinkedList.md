[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / LinkedList

# Class: LinkedList\<E\>

Defined in: list.ts:302

## Type Parameters

### E

`E`

## Implements

- [`ILinkedList`](../interfaces/ILinkedList.md)\<`E`\>

## Constructors

### Constructor

> **new LinkedList**\<`E`\>(`elements?`, `reverse?`): `LinkedList`\<`E`\>

Defined in: list.ts:310

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

Defined in: list.ts:306

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`comparator`](../interfaces/ILinkedList.md#comparator)

***

### first

> **first**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:303

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`first`](../interfaces/ILinkedList.md#first)

***

### last

> **last**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:304

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`last`](../interfaces/ILinkedList.md#last)

***

### size

> **size**: `number` = `0`

Defined in: list.ts:305

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`size`](../interfaces/ILinkedList.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: list.ts:740

O(size)

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`ILinkedList.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: list.ts:328

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

Defined in: list.ts:332

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

Defined in: list.ts:342

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

Defined in: list.ts:359

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

Defined in: list.ts:378

O(1)

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`clear`](../interfaces/ILinkedList.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: list.ts:682

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

Defined in: list.ts:690

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

Defined in: list.ts:506

#### Parameters

##### predicate

(`e`) => `boolean`

#### Returns

`boolean`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`every`](../interfaces/ILinkedList.md#every)

***

### filter()

> **filter**(`predicate`): `LinkedList`\<`E`\>

Defined in: list.ts:496

#### Parameters

##### predicate

(`e`) => `boolean`

#### Returns

`LinkedList`\<`E`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`filter`](../interfaces/ILinkedList.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:388

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

Defined in: list.ts:532

O(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getFirst`](../interfaces/ILinkedList.md#getfirst)

***

### getLast()

> **getLast**(): `E`

Defined in: list.ts:540

O(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`getLast`](../interfaces/ILinkedList.md#getlast)

***

### getNode()

> **getNode**(`index`): [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:655

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

Defined in: list.ts:704

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

Defined in: list.ts:549

O(1)

#### Returns

`boolean`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`isEmpty`](../interfaces/ILinkedList.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): `LinkedList`\<`V`\>

Defined in: list.ts:480

#### Type Parameters

##### V

`V`

#### Parameters

##### fn

(`e`) => `V`

#### Returns

`LinkedList`\<`V`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`map`](../interfaces/ILinkedList.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:488

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

Defined in: list.ts:574

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

Defined in: list.ts:584

O(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`removeFirst`](../interfaces/ILinkedList.md#removefirst)

***

### removeLast()

> **removeLast**(): `E`

Defined in: list.ts:620

O(size)<br>
Ω(1)

#### Returns

`E`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`removeLast`](../interfaces/ILinkedList.md#removelast)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`, `void`, `unknown`\>

Defined in: list.ts:731

O(∑ i=1 to size (i))
Ω(1)

#### Returns

`Generator`\<`E`, `void`, `unknown`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`reverseIterator`](../interfaces/ILinkedList.md#reverseiterator)

***

### set()

> **set**(`index`, `e`): `boolean`

Defined in: list.ts:402

O(size)<br>
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

> **slice**(`startIndex`, `endIndex`): `LinkedList`\<`E`\>

Defined in: list.ts:408

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`LinkedList`\<`E`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`slice`](../interfaces/ILinkedList.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): `LinkedList`\<`E`\>

Defined in: list.ts:413

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`LinkedList`\<`E`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`slice2`](../interfaces/ILinkedList.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:518

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

Defined in: list.ts:712

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`sort`](../interfaces/ILinkedList.md#sort)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): `LinkedList`\<`E`\>

Defined in: list.ts:473

#### Parameters

##### startIndex

`number`

##### deleteCount

`number`

#### Returns

`LinkedList`\<`E`\>

#### Implementation of

[`ILinkedList`](../interfaces/ILinkedList.md).[`splice`](../interfaces/ILinkedList.md#splice)

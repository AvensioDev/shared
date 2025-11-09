[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / ILinkedList

# Interface: ILinkedList\<E\>

Defined in: list.ts:27

## Extends

- [`IList`](IList.md)\<`E`\>

## Type Parameters

### E

`E`

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:60

#### Inherited from

[`IList`](IList.md).[`comparator`](IList.md#comparator)

***

### first

> **first**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:28

***

### last

> **last**: [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:29

***

### size

> **size**: `number`

Defined in: index.ts:61

#### Inherited from

[`IList`](IList.md).[`size`](IList.md#size)

## Methods

### add()

> **add**(`element`): `void`

Defined in: index.ts:62

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

Defined in: list.ts:20

#### Parameters

##### collection

`Iterable`\<`E`\>

#### Returns

`void`

#### Inherited from

[`IList`](IList.md).[`addAll`](IList.md#addall)

***

### addFirst()

> **addFirst**(`element`): `void`

Defined in: list.ts:31

#### Parameters

##### element

`E`

#### Returns

`void`

***

### addLast()

> **addLast**(`element`): `void`

Defined in: list.ts:32

#### Parameters

##### element

`E`

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: index.ts:65

#### Returns

`void`

#### Inherited from

[`IList`](IList.md).[`clear`](IList.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: index.ts:67

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

Defined in: list.ts:23

#### Parameters

##### otherList

[`IList`](IList.md)\<`E`\>

#### Returns

`boolean`

#### Inherited from

[`IList`](IList.md).[`equals`](IList.md#equals)

***

### every()

> **every**(`predicate`): `boolean`

Defined in: list.ts:12

#### Parameters

##### predicate

(`element`) => `boolean`

#### Returns

`boolean`

#### Inherited from

[`IList`](IList.md).[`every`](IList.md#every)

***

### filter()

> **filter**(`predicate`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:11

#### Parameters

##### predicate

(`element`) => `boolean`

#### Returns

[`IList`](IList.md)\<`E`\>

#### Inherited from

[`IList`](IList.md).[`filter`](IList.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:21

#### Parameters

##### index

`number`

#### Returns

`E`

#### Inherited from

[`IList`](IList.md).[`get`](IList.md#get)

***

### getFirst()

> **getFirst**(): `E`

Defined in: list.ts:33

#### Returns

`E`

***

### getLast()

> **getLast**(): `E`

Defined in: list.ts:34

#### Returns

`E`

***

### getNode()

> **getNode**(`index`): [`Node`](../type-aliases/Node.md)\<`E`\>

Defined in: list.ts:30

#### Parameters

##### index

`number`

#### Returns

[`Node`](../type-aliases/Node.md)\<`E`\>

***

### indexOf()

> **indexOf**(`element`, `startIndex`): `number`

Defined in: list.ts:24

#### Parameters

##### element

`E`

##### startIndex

`number`

#### Returns

`number`

#### Inherited from

[`IList`](IList.md).[`indexOf`](IList.md#indexof)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:66

#### Returns

`boolean`

#### Inherited from

[`IList`](IList.md).[`isEmpty`](IList.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): [`IList`](IList.md)\<`V`\>

Defined in: list.ts:9

#### Type Parameters

##### V

`V`

#### Parameters

##### fn

(`element`) => `V`

#### Returns

[`IList`](IList.md)\<`V`\>

#### Inherited from

[`IList`](IList.md).[`map`](IList.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:10

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

#### Inherited from

[`IList`](IList.md).[`reduce`](IList.md#reduce)

***

### remove()

> **remove**(`e`, `isIndex?`): `number` \| `E`

Defined in: index.ts:64

#### Parameters

##### e

`number` | `E`

##### isIndex?

`boolean`

#### Returns

`number` \| `E`

#### Inherited from

[`IList`](IList.md).[`remove`](IList.md#remove)

***

### removeFirst()

> **removeFirst**(): `E`

Defined in: list.ts:35

#### Returns

`E`

***

### removeLast()

> **removeLast**(): `E`

Defined in: list.ts:36

#### Returns

`E`

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: list.ts:25

#### Returns

`Generator`\<`E`\>

#### Inherited from

[`IList`](IList.md).[`reverseIterator`](IList.md#reverseiterator)

***

### set()

> **set**(`index`, `element`): `boolean`

Defined in: list.ts:22

#### Parameters

##### index

`number`

##### element

`E` | `null`

#### Returns

`boolean`

#### Inherited from

[`IList`](IList.md).[`set`](IList.md#set)

***

### slice()

> **slice**(`startIndex`, `endIndex`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:14

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

[`IList`](IList.md)\<`E`\>

#### Inherited from

[`IList`](IList.md).[`slice`](IList.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:15

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

[`IList`](IList.md)\<`E`\>

#### Inherited from

[`IList`](IList.md).[`slice2`](IList.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:13

#### Parameters

##### predicate

(`element`) => `boolean`

#### Returns

`boolean`

#### Inherited from

[`IList`](IList.md).[`some`](IList.md#some)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: sort/index.ts:9

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Inherited from

[`IList`](IList.md).[`sort`](IList.md#sort)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:16

#### Parameters

##### startIndex

`number`

##### deleteCount

`number`

#### Returns

[`IList`](IList.md)\<`E`\>

#### Inherited from

[`IList`](IList.md).[`splice`](IList.md#splice)

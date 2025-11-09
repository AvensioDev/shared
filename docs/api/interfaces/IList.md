[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / IList

# Interface: IList\<E\>

Defined in: list.ts:19

## Extends

- [`ICollection`](ICollection.md)\<`E`\>.[`IListFunctions`](IListFunctions.md)\<`E`\>

## Extended by

- [`ILinkedList`](ILinkedList.md)

## Type Parameters

### E

`E`

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:60

#### Inherited from

[`ICollection`](ICollection.md).[`comparator`](ICollection.md#comparator)

***

### size

> **size**: `number`

Defined in: index.ts:61

#### Inherited from

[`ICollection`](ICollection.md).[`size`](ICollection.md#size)

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

[`ICollection`](ICollection.md).[`add`](ICollection.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: list.ts:20

#### Parameters

##### collection

`Iterable`\<`E`\>

#### Returns

`void`

#### Overrides

[`ICollection`](ICollection.md).[`addAll`](ICollection.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: index.ts:65

#### Returns

`void`

#### Inherited from

[`ICollection`](ICollection.md).[`clear`](ICollection.md#clear)

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

[`ICollection`](ICollection.md).[`contains`](ICollection.md#contains)

***

### equals()

> **equals**(`otherList`): `boolean`

Defined in: list.ts:23

#### Parameters

##### otherList

`IList`\<`E`\>

#### Returns

`boolean`

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

[`IListFunctions`](IListFunctions.md).[`every`](IListFunctions.md#every)

***

### filter()

> **filter**(`predicate`): `IList`\<`E`\>

Defined in: list.ts:11

#### Parameters

##### predicate

(`element`) => `boolean`

#### Returns

`IList`\<`E`\>

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`filter`](IListFunctions.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:21

#### Parameters

##### index

`number`

#### Returns

`E`

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

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:66

#### Returns

`boolean`

#### Inherited from

[`ICollection`](ICollection.md).[`isEmpty`](ICollection.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): `IList`\<`V`\>

Defined in: list.ts:9

#### Type Parameters

##### V

`V`

#### Parameters

##### fn

(`element`) => `V`

#### Returns

`IList`\<`V`\>

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`map`](IListFunctions.md#map)

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

[`IListFunctions`](IListFunctions.md).[`reduce`](IListFunctions.md#reduce)

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

[`ICollection`](ICollection.md).[`remove`](ICollection.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: list.ts:25

#### Returns

`Generator`\<`E`\>

#### Overrides

[`ICollection`](ICollection.md).[`reverseIterator`](ICollection.md#reverseiterator)

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

***

### slice()

> **slice**(`startIndex`, `endIndex`): `IList`\<`E`\>

Defined in: list.ts:14

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`IList`\<`E`\>

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`slice`](IListFunctions.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): `IList`\<`E`\>

Defined in: list.ts:15

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`IList`\<`E`\>

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`slice2`](IListFunctions.md#slice2)

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

[`IListFunctions`](IListFunctions.md).[`some`](IListFunctions.md#some)

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

[`ICollection`](ICollection.md).[`sort`](ICollection.md#sort)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): `IList`\<`E`\>

Defined in: list.ts:16

#### Parameters

##### startIndex

`number`

##### deleteCount

`number`

#### Returns

`IList`\<`E`\>

#### Inherited from

[`IListFunctions`](IListFunctions.md).[`splice`](IListFunctions.md#splice)

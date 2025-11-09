[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / BinaryHeap

# Class: BinaryHeap\<E\>

Defined in: heap.ts:9

## Type Parameters

### E

`E`

## Implements

- [`ICollection`](../interfaces/ICollection.md)\<`E`\>

## Constructors

### Constructor

> **new BinaryHeap**\<`E`\>(`comparator`, `elements?`): `BinaryHeap`\<`E`\>

Defined in: heap.ts:14

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`BinaryHeap`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: heap.ts:12

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`comparator`](../interfaces/ICollection.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: heap.ts:11

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`size`](../interfaces/ICollection.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: heap.ts:115

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`ICollection.[iterator]`

***

### add()

> **add**(`element`): `void`

Defined in: heap.ts:47

#### Parameters

##### element

`E`

#### Returns

`void`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`add`](../interfaces/ICollection.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: heap.ts:51

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`addAll`](../interfaces/ICollection.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: heap.ts:57

#### Returns

`void`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`clear`](../interfaces/ICollection.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: heap.ts:66

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`contains`](../interfaces/ICollection.md#contains)

***

### extractMin()

> **extractMin**(): `E`

Defined in: heap.ts:30

#### Returns

`E`

***

### insert()

> **insert**(`element`): `void`

Defined in: heap.ts:23

#### Parameters

##### element

`E`

#### Returns

`void`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: heap.ts:62

#### Returns

`boolean`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`isEmpty`](../interfaces/ICollection.md#isempty)

***

### peek()

> **peek**(): `E`

Defined in: heap.ts:42

#### Returns

`E`

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: heap.ts:93

#### Parameters

##### target

`number` | `E`

##### isIndex

`boolean` = `true`

#### Returns

`number` \| `E`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`remove`](../interfaces/ICollection.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: heap.ts:126

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`reverseIterator`](../interfaces/ICollection.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: heap.ts:79

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`sort`](../interfaces/ICollection.md#sort)

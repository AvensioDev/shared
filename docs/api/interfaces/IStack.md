[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / IStack

# Interface: IStack\<E\>

Defined in: stack.ts:8

## Extends

- [`ICollection`](ICollection.md)\<`E`\>

## Extended by

- [`IDequeue`](IDequeue.md)

## Type Parameters

### E

`E`

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: stack.ts:9

#### Overrides

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

Defined in: index.ts:63

#### Parameters

##### collection

[`ICollection`](ICollection.md)\<`E`\>

#### Returns

`void`

#### Inherited from

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

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:66

#### Returns

`boolean`

#### Inherited from

[`ICollection`](ICollection.md).[`isEmpty`](ICollection.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: stack.ts:11

#### Returns

`E`

***

### push()

> **push**(`e`): `void`

Defined in: stack.ts:10

#### Parameters

##### e

`E`

#### Returns

`void`

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

Defined in: index.ts:56

#### Returns

`Generator`\<`E`\>

#### Inherited from

[`ICollection`](ICollection.md).[`reverseIterator`](ICollection.md#reverseiterator)

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

### top()

> **top**(): `E`

Defined in: stack.ts:12

#### Returns

`E`

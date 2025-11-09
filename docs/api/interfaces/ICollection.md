[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / ICollection

# Interface: ICollection\<E\>

Defined in: index.ts:59

## Extends

- [`ISortable`](ISortable.md)\<`E`\>.`Iterable`\<`E`\>.[`IReverseIterable`](IReverseIterable.md)\<`E`\>

## Extended by

- [`IStack`](IStack.md)
- [`IQueue`](IQueue.md)
- [`IList`](IList.md)
- [`IFibonacciHeap`](IFibonacciHeap.md)

## Type Parameters

### E

`E`

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:60

***

### size

> **size**: `number`

Defined in: index.ts:61

## Methods

### add()

> **add**(`element`): `void`

Defined in: index.ts:62

#### Parameters

##### element

`E`

#### Returns

`void`

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: index.ts:63

#### Parameters

##### collection

`ICollection`\<`E`\>

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: index.ts:65

#### Returns

`void`

***

### contains()

> **contains**(`element`): `boolean`

Defined in: index.ts:67

#### Parameters

##### element

`E`

#### Returns

`boolean`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:66

#### Returns

`boolean`

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

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: index.ts:56

#### Returns

`Generator`\<`E`\>

#### Inherited from

[`IReverseIterable`](IReverseIterable.md).[`reverseIterator`](IReverseIterable.md#reverseiterator)

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

[`ISortable`](ISortable.md).[`sort`](ISortable.md#sort)

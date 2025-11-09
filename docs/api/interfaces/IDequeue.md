[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / IDequeue

# Interface: IDequeue\<E\>

Defined in: queue.ts:16

## Extends

- [`IQueue`](IQueue.md)\<`E`\>.[`IStack`](IStack.md)\<`E`\>

## Type Parameters

### E

`E`

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:60

#### Inherited from

[`IQueue`](IQueue.md).[`comparator`](IQueue.md#comparator)

***

### size

> **size**: `number`

Defined in: index.ts:61

#### Inherited from

[`IQueue`](IQueue.md).[`size`](IQueue.md#size)

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

[`IQueue`](IQueue.md).[`add`](IQueue.md#add)

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

[`IQueue`](IQueue.md).[`addAll`](IQueue.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: index.ts:65

#### Returns

`void`

#### Inherited from

[`IQueue`](IQueue.md).[`clear`](IQueue.md#clear)

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

[`IQueue`](IQueue.md).[`contains`](IQueue.md#contains)

***

### dequeue()

> **dequeue**(): `E`

Defined in: queue.ts:12

#### Returns

`E`

#### Inherited from

[`IQueue`](IQueue.md).[`dequeue`](IQueue.md#dequeue)

***

### enqueue()

> **enqueue**(`e`): `void`

Defined in: queue.ts:11

#### Parameters

##### e

`E`

#### Returns

`void`

#### Inherited from

[`IQueue`](IQueue.md).[`enqueue`](IQueue.md#enqueue)

***

### head()

> **head**(): `E`

Defined in: queue.ts:13

#### Returns

`E`

#### Inherited from

[`IQueue`](IQueue.md).[`head`](IQueue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:66

#### Returns

`boolean`

#### Inherited from

[`IQueue`](IQueue.md).[`isEmpty`](IQueue.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: stack.ts:11

#### Returns

`E`

#### Inherited from

[`IStack`](IStack.md).[`pop`](IStack.md#pop)

***

### push()

> **push**(`e`): `void`

Defined in: stack.ts:10

#### Parameters

##### e

`E`

#### Returns

`void`

#### Inherited from

[`IStack`](IStack.md).[`push`](IStack.md#push)

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

[`IQueue`](IQueue.md).[`remove`](IQueue.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: index.ts:56

#### Returns

`Generator`\<`E`\>

#### Inherited from

[`IQueue`](IQueue.md).[`reverseIterator`](IQueue.md#reverseiterator)

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

[`IQueue`](IQueue.md).[`sort`](IQueue.md#sort)

***

### top()

> **top**(): `E`

Defined in: stack.ts:12

#### Returns

`E`

#### Inherited from

[`IStack`](IStack.md).[`top`](IStack.md#top)

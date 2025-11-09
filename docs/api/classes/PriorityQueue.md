[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / PriorityQueue

# Class: PriorityQueue\<E\>

Defined in: queue.ts:370

## Type Parameters

### E

`E`

## Implements

- [`IQueue`](../interfaces/IQueue.md)\<`E`\>

## Constructors

### Constructor

> **new PriorityQueue**\<`E`\>(`comparator`, `elements?`): `PriorityQueue`\<`E`\>

Defined in: queue.ts:373

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`PriorityQueue`\<`E`\>

## Accessors

### comparator

#### Get Signature

> **get** **comparator**(): [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: queue.ts:377

##### Returns

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Set Signature

> **set** **comparator**(`value`): `void`

Defined in: queue.ts:381

##### Parameters

###### value

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

##### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`comparator`](../interfaces/IQueue.md#comparator)

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: queue.ts:385

##### Returns

`number`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`size`](../interfaces/IQueue.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: queue.ts:421

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IQueue.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: queue.ts:393

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`add`](../interfaces/IQueue.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: queue.ts:397

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`addAll`](../interfaces/IQueue.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: queue.ts:413

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`clear`](../interfaces/IQueue.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: queue.ts:417

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`contains`](../interfaces/IQueue.md#contains)

***

### dequeue()

> **dequeue**(): `E`

Defined in: queue.ts:401

#### Returns

`E`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`dequeue`](../interfaces/IQueue.md#dequeue)

***

### enqueue()

> **enqueue**(`e`): `void`

Defined in: queue.ts:389

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`enqueue`](../interfaces/IQueue.md#enqueue)

***

### head()

> **head**(): `E`

Defined in: queue.ts:405

#### Returns

`E`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`head`](../interfaces/IQueue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue.ts:409

#### Returns

`boolean`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`isEmpty`](../interfaces/IQueue.md#isempty)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: queue.ts:433

#### Parameters

##### target

`number` | `E`

##### isIndex

`boolean` = `true`

#### Returns

`number` \| `E`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`remove`](../interfaces/IQueue.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: queue.ts:425

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`reverseIterator`](../interfaces/IQueue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: queue.ts:429

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`sort`](../interfaces/IQueue.md#sort)

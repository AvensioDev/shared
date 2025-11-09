[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / Dequeue

# Class: Dequeue\<E\>

Defined in: queue.ts:438

## Type Parameters

### E

`E`

## Implements

- [`IDequeue`](../interfaces/IDequeue.md)\<`E`\>

## Constructors

### Constructor

> **new Dequeue**\<`E`\>(`elements?`): `Dequeue`\<`E`\>

Defined in: queue.ts:444

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`Dequeue`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: queue.ts:442

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`comparator`](../interfaces/IDequeue.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: queue.ts:439

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`size`](../interfaces/IDequeue.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: queue.ts:604

O(size)

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IDequeue.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: queue.ts:477

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`add`](../interfaces/IDequeue.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: queue.ts:481

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`addAll`](../interfaces/IDequeue.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: queue.ts:577

O(1)

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`clear`](../interfaces/IDequeue.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: queue.ts:588

Checks if an element is contained in the Dequeue.
For this function to work, a comparator must be set!
O(size) amortized

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`contains`](../interfaces/IDequeue.md#contains)

***

### dequeue()

> **dequeue**(): `E`

Defined in: queue.ts:490

O(1)

#### Returns

`E`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`dequeue`](../interfaces/IDequeue.md#dequeue)

***

### enqueue()

> **enqueue**(`e`): `void`

Defined in: queue.ts:456

O(1)

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`enqueue`](../interfaces/IDequeue.md#enqueue)

***

### head()

> **head**(): `E`

Defined in: queue.ts:562

O(1)

#### Returns

`E`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`head`](../interfaces/IDequeue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue.ts:570

O(1)

#### Returns

`boolean`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`isEmpty`](../interfaces/IDequeue.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: queue.ts:531

O(1)

#### Returns

`E`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`pop`](../interfaces/IDequeue.md#pop)

***

### push()

> **push**(`e`): `void`

Defined in: queue.ts:504

O(1)

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`push`](../interfaces/IDequeue.md#push)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: queue.ts:666

#### Parameters

##### target

`number` | `E`

##### isIndex

`boolean` = `true`

#### Returns

`number` \| `E`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`remove`](../interfaces/IDequeue.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`, `void`, `unknown`\>

Defined in: queue.ts:621

O(size)

#### Returns

`Generator`\<`E`, `void`, `unknown`\>

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`reverseIterator`](../interfaces/IDequeue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: queue.ts:635

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`sort`](../interfaces/IDequeue.md#sort)

***

### top()

> **top**(): `E`

Defined in: queue.ts:553

O(1)

#### Returns

`E`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`top`](../interfaces/IDequeue.md#top)

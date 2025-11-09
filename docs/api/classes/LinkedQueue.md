[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / LinkedQueue

# Class: LinkedQueue\<E\>

Defined in: queue.ts:182

## Type Parameters

### E

`E`

## Implements

- [`IQueue`](../interfaces/IQueue.md)\<`E`\>

## Constructors

### Constructor

> **new LinkedQueue**\<`E`\>(`elements?`, `comparator?`): `LinkedQueue`\<`E`\>

Defined in: queue.ts:188

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

##### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`LinkedQueue`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: queue.ts:186

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`comparator`](../interfaces/IQueue.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: queue.ts:185

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`size`](../interfaces/IQueue.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: queue.ts:287

O(size)

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IQueue.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: queue.ts:215

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

Defined in: queue.ts:219

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

Defined in: queue.ts:260

O(1)

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`clear`](../interfaces/IQueue.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: queue.ts:271

Checks if an element is contained in the LinkedQueue.
For this function to work, a comparator must be set!
O(size) amortized

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

Defined in: queue.ts:228

O(1)

#### Returns

`E`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`dequeue`](../interfaces/IQueue.md#dequeue)

***

### enqueue()

> **enqueue**(`e`): `void`

Defined in: queue.ts:203

O(1)

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

Defined in: queue.ts:252

O(1)

#### Returns

`E`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`head`](../interfaces/IQueue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue.ts:245

O(1)

#### Returns

`boolean`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`isEmpty`](../interfaces/IQueue.md#isempty)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: queue.ts:345

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

Defined in: queue.ts:301

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`reverseIterator`](../interfaces/IQueue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: queue.ts:312

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`sort`](../interfaces/IQueue.md#sort)

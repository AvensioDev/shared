[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / PriorityQueue

# Class: PriorityQueue\<E\>

Defined in: queue.ts:425

Comparator-driven queue backed by [BinaryHeap](BinaryHeap.md).

## Type Parameters

### E

`E`

Value type.

## Implements

- [`IQueue`](../interfaces/IQueue.md)\<`E`\>

## Constructors

### Constructor

> **new PriorityQueue**\<`E`\>(`comparator`, `elements?`): `PriorityQueue`\<`E`\>

Defined in: queue.ts:428

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

Defined in: queue.ts:432

Comparator used for equality/sort checks.

##### Returns

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Set Signature

> **set** **comparator**(`value`): `void`

Defined in: queue.ts:436

Comparator used for equality/sort checks.

##### Parameters

###### value

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

##### Returns

`void`

Comparator used for equality/sort checks.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`comparator`](../interfaces/IQueue.md#comparator)

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: queue.ts:440

Current element count.

##### Returns

`number`

Current element count.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`size`](../interfaces/IQueue.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: queue.ts:491

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IQueue.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: queue.ts:451

Append an element.

 Complexity: Amortized O(1) unless stated otherwise.

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

Defined in: queue.ts:455

Append every element from another collection.

 Complexity: O(n + m) where m is `collection.size`.

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

Defined in: queue.ts:480

Remove all entries.

 Complexity: O(n)

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`clear`](../interfaces/IQueue.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: queue.ts:487

Test membership using the comparator when available.

 Complexity: O(n)

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

Defined in: queue.ts:465

Remove and return the head element.

#### Returns

`E`

Dequeued value.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`dequeue`](../interfaces/IQueue.md#dequeue)

***

### enqueue()

> **enqueue**(`e`): `void`

Defined in: queue.ts:447

Append an element to the tail.

#### Parameters

##### e

`E`

Value to enqueue.
 Complexity: O(1) amortized

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`enqueue`](../interfaces/IQueue.md#enqueue)

***

### head()

> **head**(): `E`

Defined in: queue.ts:472

Peek the head without removal.

#### Returns

`E`

Head value.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`head`](../interfaces/IQueue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue.ts:476

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`isEmpty`](../interfaces/IQueue.md#isempty)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: queue.ts:509

Remove by value or index.

#### Parameters

##### target

Element or index.

`number` | `E`

##### isIndex

`boolean` = `true`

When `true`, treat `e` as index.

#### Returns

`number` \| `E`

Removed element or index of removal.
 Complexity: O(n) worst case.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`remove`](../interfaces/IQueue.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: queue.ts:495

Iterates elements from the most recently added to the earliest.

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`reverseIterator`](../interfaces/IQueue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: queue.ts:502

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`sort`](../interfaces/IQueue.md#sort)

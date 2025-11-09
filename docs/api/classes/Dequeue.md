[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / Dequeue

# Class: Dequeue\<E\>

Defined in: queue.ts:519

Double-ended queue exposing push/pop operations on both ends.

## Type Parameters

### E

`E`

Value type.

## Implements

- [`IDequeue`](../interfaces/IDequeue.md)\<`E`\>

## Constructors

### Constructor

> **new Dequeue**\<`E`\>(`elements?`): `Dequeue`\<`E`\>

Defined in: queue.ts:525

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`Dequeue`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: queue.ts:523

Comparator used for equality/sort checks.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`comparator`](../interfaces/IDequeue.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: queue.ts:520

Current element count.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`size`](../interfaces/IDequeue.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: queue.ts:680

Iterable

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IDequeue.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: queue.ts:554

Append an element.

 Complexity: Amortized O(1) unless stated otherwise.

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

Defined in: queue.ts:558

Append every element from another collection.

 Complexity: O(n + m) where m is `collection.size`.

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

Defined in: queue.ts:656

Remove all entries.

 Complexity: O(n)

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`clear`](../interfaces/IDequeue.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: queue.ts:664

Test membership using the comparator when available.

 Complexity: O(n)

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

Defined in: queue.ts:564

Remove and return the head element.

#### Returns

`E`

Dequeued value.

#### Throws

When empty.
 Complexity: O(1) amortized

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`dequeue`](../interfaces/IDequeue.md#dequeue)

***

### enqueue()

> **enqueue**(`e`): `void`

Defined in: queue.ts:533

Append an element to the tail.

#### Parameters

##### e

`E`

Value to enqueue.
 Complexity: O(1) amortized

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`enqueue`](../interfaces/IDequeue.md#enqueue)

***

### head()

> **head**(): `E`

Defined in: queue.ts:641

Peek the head without removal.

#### Returns

`E`

Head value.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`head`](../interfaces/IDequeue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue.ts:649

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`isEmpty`](../interfaces/IDequeue.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: queue.ts:610

Pop a value from the front.

#### Returns

`E`

Removed value.
 Complexity: O(1)

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`pop`](../interfaces/IDequeue.md#pop)

***

### push()

> **push**(`e`): `void`

Defined in: queue.ts:580

Push a value onto the front (stack-style).

#### Parameters

##### e

`E`

Value to push.
 Complexity: O(1)

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`push`](../interfaces/IDequeue.md#push)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: queue.ts:742

Remove by value or index.

#### Parameters

##### target

`number` | `E`

##### isIndex

`boolean` = `true`

When `true`, treat `e` as index.

#### Returns

`number` \| `E`

Removed element or index of removal.
 Complexity: O(n) worst case.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`remove`](../interfaces/IDequeue.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`, `void`, `unknown`\>

Defined in: queue.ts:697

Iterates elements from the most recently added to the earliest.

#### Returns

`Generator`\<`E`, `void`, `unknown`\>

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`reverseIterator`](../interfaces/IDequeue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: queue.ts:711

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`sort`](../interfaces/IDequeue.md#sort)

***

### top()

> **top**(): `E`

Defined in: queue.ts:632

O(1)

#### Returns

`E`

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`top`](../interfaces/IDequeue.md#top)

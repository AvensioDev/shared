---
description: Linked-list queue optimized for consistent O(1) enqueues/dequeues regardless of size.
---

[**Avensio Shared**](../README.md)

***

[Avensio Shared](../README.md) / LinkedQueue

# Class: LinkedQueue\<E\>

Defined in: queue.ts:271

## Type Parameters

### E

`E`

## Implements

- [`IQueue`](../interfaces/IQueue.md)\<`E`\>

## Constructors

### Constructor

> **new LinkedQueue**\<`E`\>(`elements?`, `comparator?`): `LinkedQueue`\<`E`\>

Defined in: queue.ts:283

#### Parameters

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`, `any`, `any`\>

##### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`LinkedQueue`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: queue.ts:281

Comparator used for equality/sort checks.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`comparator`](../interfaces/IQueue.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: queue.ts:277

Current element count.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`size`](../interfaces/IQueue.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Defined in: queue.ts:389

Iterates through the LinkedQueue.

#### Returns

[`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Iterator for the LinkedQueue

#### Remarks

Complexity: O(n)

#### Implementation of

`IQueue.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: queue.ts:312

Append an element.

#### Parameters

##### e

`E`

#### Returns

`void`

#### Remarks

Complexity: Amortized O(1) unless stated otherwise.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`add`](../interfaces/IQueue.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: queue.ts:319

Append every element from another collection.

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Remarks

Complexity: O(n + m) where m is `collection.size`.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`addAll`](../interfaces/IQueue.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: queue.ts:360

Remove all entries.

#### Returns

`void`

#### Remarks

Complexity: O(n)

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`clear`](../interfaces/IQueue.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: queue.ts:371

Checks if an element is contained in the LinkedQueue.
For this function to work, a comparator must be set!

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(size) amortized

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`contains`](../interfaces/IQueue.md#contains)

***

### dequeue()

> **dequeue**(): `E`

Defined in: queue.ts:328

Remove and return the head element.

#### Returns

`E`

Dequeued value.

#### Remarks

Complexity: O(1) amortized

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`dequeue`](../interfaces/IQueue.md#dequeue)

***

### enqueue()

> **enqueue**(`e`): `void`

Defined in: queue.ts:297

Append an element to the tail.

#### Parameters

##### e

`E`

Value to enqueue.

#### Returns

`void`

#### Remarks

Complexity: O(1) amortized

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`enqueue`](../interfaces/IQueue.md#enqueue)

***

### head()

> **head**(): `E`

Defined in: queue.ts:352

Peek the head without removal.

#### Returns

`E`

Head value.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`head`](../interfaces/IQueue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue.ts:345

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`isEmpty`](../interfaces/IQueue.md#isempty)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: queue.ts:456

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

#### Remarks

Complexity: O(n) worst case.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`remove`](../interfaces/IQueue.md#remove)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

Defined in: queue.ts:406

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`reverseIterator`](../interfaces/IQueue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: queue.ts:420

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`sort`](../interfaces/IQueue.md#sort)

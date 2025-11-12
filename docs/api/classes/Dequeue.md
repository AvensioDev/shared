---
description: Double-ended queue exposing push/pop operations on both ends.
---

[**Typed API (TypeDoc)**](../README.md)

***

[Typed API (TypeDoc)](../README.md) / Dequeue

# Class: Dequeue\<E\>

Defined in: queue.ts:607

## Type Parameters

### E

`E`

Value type.

## Implements

- [`IDequeue`](../interfaces/IDequeue.md)\<`E`\>

## Constructors

### Constructor

> **new Dequeue**\<`E`\>(`elements?`): `Dequeue`\<`E`\>

Defined in: queue.ts:619

#### Parameters

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`, `any`, `any`\>

#### Returns

`Dequeue`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: queue.ts:617

Comparator used for equality/sort checks.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`comparator`](../interfaces/IDequeue.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: queue.ts:611

Current element count.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`size`](../interfaces/IDequeue.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Defined in: queue.ts:780

[Iterable](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)

#### Returns

[`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

#### Implementation of

`IDequeue.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: queue.ts:654

Append an element.

#### Parameters

##### e

`E`

#### Returns

`void`

#### Remarks

Complexity: Amortized O(1) unless stated otherwise.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`add`](../interfaces/IDequeue.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: queue.ts:661

Append every element from another collection.

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Remarks

Complexity: O(n + m) where m is `collection.size`.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`addAll`](../interfaces/IDequeue.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: queue.ts:756

Remove all entries.

#### Returns

`void`

#### Remarks

Complexity: O(n)

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`clear`](../interfaces/IDequeue.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: queue.ts:764

Test membership using the comparator when available.

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(n) worst case

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`contains`](../interfaces/IDequeue.md#contains)

***

### dequeue()

> **dequeue**(): `E`

Defined in: queue.ts:670

Remove and return the head element.

#### Returns

`E`

Dequeued value.

#### Remarks

Complexity: O(1) amortized

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`dequeue`](../interfaces/IDequeue.md#dequeue)

***

### enqueue()

> **enqueue**(`e`): `void`

Defined in: queue.ts:630

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

[`IDequeue`](../interfaces/IDequeue.md).[`enqueue`](../interfaces/IDequeue.md#enqueue)

***

### head()

> **head**(): `E`

Defined in: queue.ts:741

Peek the head without removal.

#### Returns

`E`

Head value.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`head`](../interfaces/IDequeue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue.ts:749

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`isEmpty`](../interfaces/IDequeue.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: queue.ts:710

Pop and return the top value.

#### Returns

`E`

Removed value.

#### Remarks

Complexity: O(1)

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`pop`](../interfaces/IDequeue.md#pop)

***

### push()

> **push**(`e`): `void`

Defined in: queue.ts:683

Push a value on top.

#### Parameters

##### e

`E`

Value to push.

#### Returns

`void`

#### Remarks

Complexity: O(1)

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`push`](../interfaces/IDequeue.md#push)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: queue.ts:848

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

[`IDequeue`](../interfaces/IDequeue.md).[`remove`](../interfaces/IDequeue.md#remove)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`, `void`, `unknown`\>

Defined in: queue.ts:797

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`, `void`, `unknown`\>

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`reverseIterator`](../interfaces/IDequeue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: queue.ts:814

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

Defined in: queue.ts:732

Peek the top value without removing it.

#### Returns

`E`

Top value.

#### Implementation of

[`IDequeue`](../interfaces/IDequeue.md).[`top`](../interfaces/IDequeue.md#top)

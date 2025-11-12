---
description: |-
  Comparator-driven queue backed by 
  .
---

[**Typed API (TypeDoc)**](../README.md)

***

[Typed API (TypeDoc)](../README.md) / PriorityQueue

# Class: PriorityQueue\<E\>

Defined in: queue.ts:486

## Type Parameters

### E

`E`

Value type.

## Implements

- [`IQueue`](../interfaces/IQueue.md)\<`E`\>

## Constructors

### Constructor

> **new PriorityQueue**\<`E`\>(`comparator`, `elements?`): `PriorityQueue`\<`E`\>

Defined in: queue.ts:489

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`, `any`, `any`\>

#### Returns

`PriorityQueue`\<`E`\>

## Accessors

### comparator

#### Get Signature

> **get** **comparator**(): [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: queue.ts:496

Retrieve the current comparator.

##### Returns

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Set Signature

> **set** **comparator**(`cmp`): `void`

Defined in: queue.ts:505

Sets a new Comparator.

##### Remarks

creates a copy of the current heap and overwrites it.

##### Parameters

###### cmp

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

new Comparator.

##### Returns

`void`

Comparator used for equality/sort checks.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`comparator`](../interfaces/IQueue.md#comparator)

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: queue.ts:512

Current element count.

##### Returns

`number`

Current element count.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`size`](../interfaces/IQueue.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Defined in: queue.ts:576

Iterates through the PriorityQueue.

#### Returns

[`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Iterator for the queue

#### Implementation of

`IQueue.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: queue.ts:526

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

Defined in: queue.ts:533

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

Defined in: queue.ts:561

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

Defined in: queue.ts:568

Test membership using the comparator when available.

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(n) worst case

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`contains`](../interfaces/IQueue.md#contains)

***

### dequeue()

> **dequeue**(): `E`

Defined in: queue.ts:540

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

Defined in: queue.ts:519

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

Defined in: queue.ts:547

Peek the head without removal.

#### Returns

`E`

Head value.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`head`](../interfaces/IQueue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue.ts:554

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`isEmpty`](../interfaces/IQueue.md#isempty)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: queue.ts:597

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

Defined in: queue.ts:583

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`reverseIterator`](../interfaces/IQueue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: queue.ts:590

Rebuild the heap using a different comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator override.

#### Returns

`void`

#### Remarks

Complexity: O(n log n)

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`sort`](../interfaces/IQueue.md#sort)

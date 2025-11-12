---
description: Array-backed queue with amortized O(1) operations using a moving head index.
---

[**Typed API (TypeDoc)**](../README.md)

***

[Typed API (TypeDoc)](../README.md) / Queue

# Class: Queue\<E\>

Defined in: queue.ts:59

## Example

```ts
const queue = new Queue<string>()
queue.enqueue('task')
queue.dequeue()
```

## Type Parameters

### E

`E`

Value type.

## Implements

- [`IQueue`](../interfaces/IQueue.md)\<`E`\>

## Constructors

### Constructor

> **new Queue**\<`E`\>(`elements?`, `comparator?`): `Queue`\<`E`\>

Defined in: queue.ts:75

#### Parameters

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`, `any`, `any`\>

##### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`Queue`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: queue.ts:73

Comparator used for equality/sort checks.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`comparator`](../interfaces/IQueue.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: queue.ts:69

Current element count.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`size`](../interfaces/IQueue.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Defined in: queue.ts:196

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

Defined in: queue.ts:140

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

Defined in: queue.ts:147

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

Defined in: queue.ts:103

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

Defined in: queue.ts:176

Checks if an element is contained in the Queue.
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

Defined in: queue.ts:112

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

Defined in: queue.ts:131

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

Defined in: queue.ts:163

Peek the head without removal.

#### Returns

`E`

Head value.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`head`](../interfaces/IQueue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: queue.ts:156

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`isEmpty`](../interfaces/IQueue.md#isempty)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: queue.ts:242

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

Defined in: queue.ts:218

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`reverseIterator`](../interfaces/IQueue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: queue.ts:227

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`sort`](../interfaces/IQueue.md#sort)

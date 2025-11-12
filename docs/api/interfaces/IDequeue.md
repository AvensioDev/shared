---
description: Hybrid queue/stack contract exposing push/pop on both ends.
---

[**Typed API (TypeDoc)**](../README.md)

***

[Typed API (TypeDoc)](../README.md) / IDequeue

# Interface: IDequeue\<E\>

Defined in: queue.ts:45

## Extends

- [`IQueue`](IQueue.md)\<`E`\>.[`IStack`](IStack.md)\<`E`\>

## Type Parameters

### E

`E`

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:142

Comparator used for equality/sort checks.

#### Inherited from

[`IQueue`](IQueue.md).[`comparator`](IQueue.md#comparator)

***

### size

> **size**: `number`

Defined in: index.ts:146

Current element count.

#### Inherited from

[`IQueue`](IQueue.md).[`size`](IQueue.md#size)

## Methods

### add()

> **add**(`element`): `void`

Defined in: index.ts:153

Append an element.

#### Parameters

##### element

`E`

#### Returns

`void`

#### Remarks

Complexity: Amortized O(1) unless stated otherwise.

#### Inherited from

[`IQueue`](IQueue.md).[`add`](IQueue.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: index.ts:160

Append every element from another collection.

#### Parameters

##### collection

[`ICollection`](ICollection.md)\<`E`\>

#### Returns

`void`

#### Remarks

Complexity: O(n + m) where m is `collection.size`.

#### Inherited from

[`IQueue`](IQueue.md).[`addAll`](IQueue.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: index.ts:178

Remove all entries.

#### Returns

`void`

#### Remarks

Complexity: O(n)

#### Inherited from

[`IQueue`](IQueue.md).[`clear`](IQueue.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: index.ts:192

Test membership using the comparator when available.

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(n) worst case

#### Inherited from

[`IQueue`](IQueue.md).[`contains`](IQueue.md#contains)

***

### dequeue()

> **dequeue**(): `E`

Defined in: queue.ts:31

Remove and return the head element.

#### Returns

`E`

Dequeued value.

#### Throws

When empty.

#### Remarks

Complexity: O(1) amortized

#### Inherited from

[`IQueue`](IQueue.md).[`dequeue`](IQueue.md#dequeue)

***

### enqueue()

> **enqueue**(`e`): `void`

Defined in: queue.ts:22

Append an element to the tail.

#### Parameters

##### e

`E`

Value to enqueue.

#### Returns

`void`

#### Remarks

Complexity: O(1) amortized

#### Inherited from

[`IQueue`](IQueue.md).[`enqueue`](IQueue.md#enqueue)

***

### head()

> **head**(): `E`

Defined in: queue.ts:39

Peek the head without removal.

#### Returns

`E`

Head value.

#### Throws

When empty.

#### Inherited from

[`IQueue`](IQueue.md).[`head`](IQueue.md#head)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:185

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Inherited from

[`IQueue`](IQueue.md).[`isEmpty`](IQueue.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: stack.ts:29

Pop and return the top value.

#### Returns

`E`

Removed value.

#### Throws

When empty.

#### Remarks

Complexity: O(1)

#### Inherited from

[`IStack`](IStack.md).[`pop`](IStack.md#pop)

***

### push()

> **push**(`e`): `void`

Defined in: stack.ts:20

Push a value on top.

#### Parameters

##### e

`E`

Value to push.

#### Returns

`void`

#### Remarks

Complexity: O(1)

#### Inherited from

[`IStack`](IStack.md).[`push`](IStack.md#push)

***

### remove()

> **remove**(`e`, `isIndex?`): `number` \| `E`

Defined in: index.ts:171

Remove by value or index.

#### Parameters

##### e

Element or index.

`number` | `E`

##### isIndex?

`boolean`

When `true`, treat `e` as index.

#### Returns

`number` \| `E`

Removed element or index of removal.

#### Throws

If neither argument nor existing comparator are set.

#### Remarks

Complexity: O(n) worst case.

#### Inherited from

[`IQueue`](IQueue.md).[`remove`](IQueue.md#remove)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

Defined in: index.ts:129

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Inherited from

[`IQueue`](IQueue.md).[`reverseIterator`](IQueue.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: sort/index.ts:18

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Inherited from

[`IQueue`](IQueue.md).[`sort`](IQueue.md#sort)

***

### top()

> **top**(): `E`

Defined in: stack.ts:37

Peek the top value without removing it.

#### Returns

`E`

Top value.

#### Throws

When empty.

#### Inherited from

[`IStack`](IStack.md).[`top`](IStack.md#top)

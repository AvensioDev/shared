---
description: FIFO queue contract shared by all queue implementations.
---

[**Avensio Shared (TypeDoc)**](../README.md)

***

[Avensio Shared (TypeDoc)](../README.md) / IQueue

# Interface: IQueue\<E\>

Defined in: queue.ts:15

## Extends

- [`ICollection`](ICollection.md)\<`E`\>

## Extended by

- [`IDequeue`](IDequeue.md)

## Type Parameters

### E

`E`

Value type.

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:142

Comparator used for equality/sort checks.

#### Inherited from

[`ICollection`](ICollection.md).[`comparator`](ICollection.md#comparator)

***

### size

> **size**: `number`

Defined in: index.ts:146

Current element count.

#### Inherited from

[`ICollection`](ICollection.md).[`size`](ICollection.md#size)

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

[`ICollection`](ICollection.md).[`add`](ICollection.md#add)

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

[`ICollection`](ICollection.md).[`addAll`](ICollection.md#addall)

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

[`ICollection`](ICollection.md).[`clear`](ICollection.md#clear)

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

[`ICollection`](ICollection.md).[`contains`](ICollection.md#contains)

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

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:185

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Inherited from

[`ICollection`](ICollection.md).[`isEmpty`](ICollection.md#isempty)

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

[`ICollection`](ICollection.md).[`remove`](ICollection.md#remove)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

Defined in: index.ts:129

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Inherited from

[`ICollection`](ICollection.md).[`reverseIterator`](ICollection.md#reverseiterator)

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

[`ICollection`](ICollection.md).[`sort`](ICollection.md#sort)

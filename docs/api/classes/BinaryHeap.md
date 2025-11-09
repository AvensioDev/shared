---
description: Maintains a binary heap that honors the supplied comparator (min- or max-heap).
---

[**Avensio Shared**](../README.md)

***

[Avensio Shared](../README.md) / BinaryHeap

# Class: BinaryHeap\<E\>

Defined in: heap.ts:22

## Example

```ts
const heap = new BinaryHeap(numberComparatorASC)
heap.insert(3)
heap.insert(1)
heap.extractMin() // -> 1
```

## Since

2.0.0

## Type Parameters

### E

`E`

Value type.

## Implements

- [`ICollection`](../interfaces/ICollection.md)\<`E`\>

## Constructors

### Constructor

> **new BinaryHeap**\<`E`\>(`comparator`, `elements?`): `BinaryHeap`\<`E`\>

Defined in: heap.ts:37

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Ordering strategy (ascending produces a min-heap).

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`, `any`, `any`\>

Optional seed data; inserted in comparator order.

#### Returns

`BinaryHeap`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: heap.ts:31

Comparator used for equality/sort checks.

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`comparator`](../interfaces/ICollection.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: heap.ts:27

Current element count.

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`size`](../interfaces/ICollection.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Defined in: heap.ts:188

Iterate elements in ascending comparator order.

#### Returns

[`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Iterator snapshot; future mutations do not affect ongoing iteration.

#### Implementation of

`ICollection.[iterator]`

***

### add()

> **add**(`element`): `void`

Defined in: heap.ts:93

Alias for [insert](#insert).

#### Parameters

##### element

`E`

#### Returns

`void`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`add`](../interfaces/ICollection.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: heap.ts:100

Append every element from another collection.

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Remarks

Complexity: O(n + m) where m is `collection.size`.

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`addAll`](../interfaces/ICollection.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: heap.ts:109

Remove all entries.

#### Returns

`void`

#### Remarks

Complexity: O(n)

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`clear`](../interfaces/ICollection.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: heap.ts:124

Test membership using the comparator when available.

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(n) worst case

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`contains`](../interfaces/ICollection.md#contains)

***

### extractMin()

> **extractMin**(): `E`

Defined in: heap.ts:66

Remove and return the top element according to the comparator.

#### Returns

`E`

Extracted value.

#### Throws

When the heap is empty.

#### Remarks

Complexity: O(log n)

***

### insert()

> **insert**(`element`): `void`

Defined in: heap.ts:52

Insert an element into the heap.

#### Parameters

##### element

`E`

Value to insert (ignored when `undefined`).

#### Returns

`void`

#### Remarks

Complexity: O(log n)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: heap.ts:117

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`isEmpty`](../interfaces/ICollection.md#isempty)

***

### peek()

> **peek**(): `E`

Defined in: heap.ts:85

Read the current top element without removing it.

#### Returns

`E`

Heap front value.

#### Throws

When empty.

#### Remarks

Complexity: O(1)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: heap.ts:161

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

[`ICollection`](../interfaces/ICollection.md).[`remove`](../interfaces/ICollection.md#remove)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

Defined in: heap.ts:202

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`reverseIterator`](../interfaces/ICollection.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: heap.ts:144

Rebuild the heap using a different comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator override.

#### Returns

`void`

#### Throws

If neither argument nor existing comparator are set.

#### Remarks

Complexity: O(n log n)

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`sort`](../interfaces/ICollection.md#sort)

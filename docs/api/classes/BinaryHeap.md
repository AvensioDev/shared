[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / BinaryHeap

# Class: BinaryHeap\<E\>

Defined in: heap.ts:22

Maintains a binary heap that honors the supplied comparator (min- or max-heap).

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

Defined in: heap.ts:31

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Ordering strategy (ascending produces a min-heap).

##### elements?

`Iterable`\<`E`, `any`, `any`\>

Optional seed data; inserted in comparator order.

#### Returns

`BinaryHeap`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: heap.ts:25

Comparator used for equality/sort checks.

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`comparator`](../interfaces/ICollection.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: heap.ts:24

Current element count.

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`size`](../interfaces/ICollection.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: heap.ts:197

Iterate elements in ascending comparator order.

#### Returns

`Iterator`\<`E`\>

Iterator snapshot; future mutations do not affect ongoing iteration.

#### Implementation of

`ICollection.[iterator]`

***

### add()

> **add**(`element`): `void`

Defined in: heap.ts:87

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

Defined in: heap.ts:97

Insert every element from another collection.

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

Source collection.
 Complexity: O(n log n) where n is `collection.size`.

#### Returns

`void`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`addAll`](../interfaces/ICollection.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: heap.ts:108

Remove every element.

 Complexity: O(1)

#### Returns

`void`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`clear`](../interfaces/ICollection.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: heap.ts:127

Test whether an element exists using the comparator when available.

#### Parameters

##### element

`E`

Value to search for.

#### Returns

`boolean`

`true` when present.
 Complexity: O(n)

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`contains`](../interfaces/ICollection.md#contains)

***

### extractMin()

> **extractMin**(): `E`

Defined in: heap.ts:60

Remove and return the top element according to the comparator.

#### Returns

`E`

Extracted value.

#### Throws

When the heap is empty.
 Complexity: O(log n)

***

### insert()

> **insert**(`element`): `void`

Defined in: heap.ts:46

Insert an element into the heap.

#### Parameters

##### element

`E`

Value to insert (ignored when `undefined`).
 Complexity: O(log n)

#### Returns

`void`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: heap.ts:116

Check whether the heap contains no elements.

#### Returns

`boolean`

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`isEmpty`](../interfaces/ICollection.md#isempty)

***

### peek()

> **peek**(): `E`

Defined in: heap.ts:79

Read the current top element without removing it.

#### Returns

`E`

Heap front value.

#### Throws

When empty.
 Complexity: O(1)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: heap.ts:170

Remove by index or value.

#### Parameters

##### target

Index or value depending on `isIndex`.

`number` | `E`

##### isIndex

`boolean` = `true`

Interpret `target` as index when `true`.

#### Returns

`number` \| `E`

Removed element (index mode) or the removed index (value mode).

#### Throws

When the heap is empty or the index is invalid.
 Complexity: O(n log n) due to rebuild.

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`remove`](../interfaces/ICollection.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: heap.ts:211

Iterate elements in descending comparator order.

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`reverseIterator`](../interfaces/ICollection.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: heap.ts:147

Rebuild the heap using a different comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator override.

#### Returns

`void`

#### Throws

If neither argument nor existing comparator are set.
 Complexity: O(n log n)

#### Implementation of

[`ICollection`](../interfaces/ICollection.md).[`sort`](../interfaces/ICollection.md#sort)

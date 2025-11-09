[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / IFibonacciHeap

# Interface: IFibonacciHeap\<E\>

Defined in: heap.ts:293

Contract implemented by [FibonacciHeap](../classes/FibonacciHeap.md). The comparator must treat `null` on the
left-hand side as greater-than to enable the deletion shortcut.

## Extends

- [`ICollection`](ICollection.md)\<`E`\>

## Type Parameters

### E

`E`

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:142

Comparator used for equality/sort checks.

#### Inherited from

[`ICollection`](ICollection.md).[`comparator`](ICollection.md#comparator)

***

### minNode

> **minNode**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:295

***

### rootList

> **rootList**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:294

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

Defined in: index.ts:152

Append an element.

 Complexity: Amortized O(1) unless stated otherwise.

#### Parameters

##### element

`E`

#### Returns

`void`

#### Inherited from

[`ICollection`](ICollection.md).[`add`](ICollection.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: index.ts:158

Append every element from another collection.

 Complexity: O(n + m) where m is `collection.size`.

#### Parameters

##### collection

[`ICollection`](ICollection.md)\<`E`\>

#### Returns

`void`

#### Inherited from

[`ICollection`](ICollection.md).[`addAll`](ICollection.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: index.ts:173

Remove all entries.

 Complexity: O(n)

#### Returns

`void`

#### Inherited from

[`ICollection`](ICollection.md).[`clear`](ICollection.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: heap.ts:297

Test membership using the comparator when available.

 Complexity: O(n)

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Overrides

[`ICollection`](ICollection.md).[`contains`](ICollection.md#contains)

***

### decreaseKey()

> **decreaseKey**(`node`, `newValue`): `void`

Defined in: heap.ts:299

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

##### newValue

`E`

#### Returns

`void`

***

### delete()

> **delete**(`node`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:298

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

***

### extractChildren()

> **extractChildren**(`node`): [`CyclicDoublyLinkedList`](../classes/CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:307

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Returns

[`CyclicDoublyLinkedList`](../classes/CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

***

### extractMin()

> **extractMin**(): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:301

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

***

### extractNeighbours()

> **extractNeighbours**(`node`, `includeSelf?`): [`CyclicDoublyLinkedList`](../classes/CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:303

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

##### includeSelf?

`boolean`

#### Returns

[`CyclicDoublyLinkedList`](../classes/CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

***

### insert()

> **insert**(`element`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:296

#### Parameters

##### element

`E`

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:179

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Inherited from

[`ICollection`](ICollection.md).[`isEmpty`](ICollection.md#isempty)

***

### minimum()

> **minimum**(): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:300

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

***

### remove()

> **remove**(`e`, `isIndex?`): `number` \| `E`

Defined in: index.ts:167

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
 Complexity: O(n) worst case.

#### Inherited from

[`ICollection`](ICollection.md).[`remove`](ICollection.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: index.ts:129

Iterates elements from the most recently added to the earliest.

#### Returns

`Generator`\<`E`\>

#### Inherited from

[`ICollection`](ICollection.md).[`reverseIterator`](ICollection.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: sort/index.ts:19

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Inherited from

[`ICollection`](ICollection.md).[`sort`](ICollection.md#sort)

***

### union()

> **union**(`heap`): `void`

Defined in: heap.ts:302

#### Parameters

##### heap

`IFibonacciHeap`\<`E`\>

#### Returns

`void`

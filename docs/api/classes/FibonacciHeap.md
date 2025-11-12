---
description: |-
  Amortized-efficient heap with 
   insert/decrease-key and 
   extract-min.
---

[**Typed API (TypeDoc)**](../README.md)

***

[Typed API (TypeDoc)](../README.md) / FibonacciHeap

# Class: FibonacciHeap\<E\>

Defined in: heap.ts:315

## Since

2.0.0

## Type Parameters

### E

`E`

Value type.

## Implements

- [`IFibonacciHeap`](../interfaces/IFibonacciHeap.md)\<`E`\>

## Constructors

### Constructor

> **new FibonacciHeap**\<`E`\>(`comparator`, `elements?`): `FibonacciHeap`\<`E`\>

Defined in: heap.ts:338

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Ordering strategy.

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`, `any`, `any`\>

Optional seed data.

#### Returns

`FibonacciHeap`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: heap.ts:331

Comparator used for equality/sort checks.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`comparator`](../interfaces/IFibonacciHeap.md#comparator)

***

### minNode

> **minNode**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:323

Current minimum node

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`minNode`](../interfaces/IFibonacciHeap.md#minnode)

***

### rootList

> **rootList**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:319

List of root nodes of the FibonacciHeap

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`rootList`](../interfaces/IFibonacciHeap.md#rootlist)

***

### size

> **size**: `number` = `0`

Defined in: heap.ts:327

Current element count.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`size`](../interfaces/IFibonacciHeap.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Defined in: heap.ts:753

Iterator for iterating through the values of the FibonacciHeapNodes.

#### Returns

[`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

#### Implementation of

`IFibonacciHeap.[iterator]`

***

### add()

> **add**(`e`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:393

Append an element.

#### Parameters

##### e

`E`

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Remarks

Complexity: Amortized O(1) unless stated otherwise.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`add`](../interfaces/IFibonacciHeap.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: heap.ts:400

Append every element from another collection.

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Remarks

Complexity: O(n + m) where m is `collection.size`.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`addAll`](../interfaces/IFibonacciHeap.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: heap.ts:529

Clears the FibonacciHeap, bei undefining the min node and rootList.

#### Returns

`void`

#### Remarks

Complexity: O(1)

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`clear`](../interfaces/IFibonacciHeap.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: heap.ts:380

Test membership using the comparator when available.

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(n) worst case

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`contains`](../interfaces/IFibonacciHeap.md#contains)

***

### decreaseKey()

> **decreaseKey**(`node`, `newValue`): `void`

Defined in: heap.ts:427

Decrease a node's key and bubble it up if necessary.

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Target node handle.

##### newValue

`E`

New value (must compare <= old value). Pass `null`/`undefined` to
mark the node as the next minimum.

#### Returns

`void`

#### Throws

When `newValue` is greater than the current value.

#### Remarks

Complexity: O(1) amortized

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`decreaseKey`](../interfaces/IFibonacciHeap.md#decreasekey)

***

### delete()

> **delete**(`e`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:413

Delete a node using its handle.

#### Parameters

##### e

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Node handle obtained from [insert](#insert).

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Removed node.

#### Remarks

Complexity: O(log n) amortized

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`delete`](../interfaces/IFibonacciHeap.md#delete)

***

### extractChildren()

> **extractChildren**(`node`): [`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:564

Return the child list of a node.

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Parent node.

#### Returns

[`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Cyclic list of children.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`extractChildren`](../interfaces/IFibonacciHeap.md#extractchildren)

***

### extractMin()

> **extractMin**(): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:462

Returns and removes the minimum node from the FibonacciHeap.

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Removed minimum node.

#### Remarks

Complexity: O(log n) amortized

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`extractMin`](../interfaces/IFibonacciHeap.md#extractmin)

***

### extractNeighbours()

> **extractNeighbours**(`node`, `includeSelf`): [`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:541

Collect sibling nodes adjacent to the provided node.

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Starting node.

##### includeSelf

`boolean` = `false`

Whether to include `node` in the output.

#### Returns

[`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Cyclic list of neighbour nodes.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`extractNeighbours`](../interfaces/IFibonacciHeap.md#extractneighbours)

***

### insert()

> **insert**(`element`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:354

Insert a value and return its node handle.

#### Parameters

##### element

`E`

Value to insert.

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Newly created node.

#### Remarks

Complexity: O(1)

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`insert`](../interfaces/IFibonacciHeap.md#insert)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: heap.ts:521

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`isEmpty`](../interfaces/IFibonacciHeap.md#isempty)

***

### minimum()

> **minimum**(): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:452

Returns the current minimum node in the FibonacciHeap.

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Current minimum node.

#### Remarks

Complexity: O(1)

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`minimum`](../interfaces/IFibonacciHeap.md#minimum)

***

### nodeIterator()

> **nodeIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>, `void`, `unknown`\>

Defined in: heap.ts:744

Iterator for iterating all FibonacciHeapNodes.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>, `void`, `unknown`\>

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: heap.ts:795

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

#### Throws

If neither argument nor existing comparator are set.

#### Remarks

Complexity: O(n) worst case.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`remove`](../interfaces/IFibonacciHeap.md#remove)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

Defined in: heap.ts:772

Reverse iterate through the values of the FibonacciHeap.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`reverseIterator`](../interfaces/IFibonacciHeap.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: heap.ts:784

This sort function changes the comparator (!), if one is given as parameter.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`sort`](../interfaces/IFibonacciHeap.md#sort)

***

### union()

> **union**(`heap`): `void`

Defined in: heap.ts:497

Merge another heap into this one.

#### Parameters

##### heap

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md)\<`E`\>

to merge in the current one

#### Returns

`void`

#### Remarks

Complexity: O(1)

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`union`](../interfaces/IFibonacciHeap.md#union)

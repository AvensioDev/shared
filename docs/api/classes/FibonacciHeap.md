[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / FibonacciHeap

# Class: FibonacciHeap\<E\>

Defined in: heap.ts:316

Amortized-efficient heap with `O(1)` insert/decrease-key and `O(log n)` extract-min.

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

Defined in: heap.ts:327

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Ordering strategy.

##### elements?

`Iterable`\<`E`, `any`, `any`\>

Optional seed data.

#### Returns

`FibonacciHeap`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: heap.ts:320

Comparator used for equality/sort checks.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`comparator`](../interfaces/IFibonacciHeap.md#comparator)

***

### minNode

> **minNode**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:318

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`minNode`](../interfaces/IFibonacciHeap.md#minnode)

***

### rootList

> **rootList**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:317

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`rootList`](../interfaces/IFibonacciHeap.md#rootlist)

***

### size

> **size**: `number` = `0`

Defined in: heap.ts:319

Current element count.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`size`](../interfaces/IFibonacciHeap.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: heap.ts:753

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IFibonacciHeap.[iterator]`

***

### add()

> **add**(`e`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:384

Append an element.

 Complexity: Amortized O(1) unless stated otherwise.

#### Parameters

##### e

`E`

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`add`](../interfaces/IFibonacciHeap.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: heap.ts:393

Append every element from another collection.

 Complexity: O(n + m) where m is `collection.size`.

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`addAll`](../interfaces/IFibonacciHeap.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: heap.ts:535

Remove all entries.

 Complexity: O(n)

#### Returns

`void`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`clear`](../interfaces/IFibonacciHeap.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: heap.ts:371

Test membership using the comparator when available.

 Complexity: O(n)

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`contains`](../interfaces/IFibonacciHeap.md#contains)

***

### decreaseKey()

> **decreaseKey**(`node`, `newValue`): `void`

Defined in: heap.ts:420

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
 Complexity: O(1) amortized

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`decreaseKey`](../interfaces/IFibonacciHeap.md#decreasekey)

***

### delete()

> **delete**(`e`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:406

Delete a node using its handle.

#### Parameters

##### e

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Node handle obtained from [insert](#insert).

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Removed node.
 Complexity: O(log n) amortized

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`delete`](../interfaces/IFibonacciHeap.md#delete)

***

### extractChildren()

> **extractChildren**(`node`): [`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:570

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

Defined in: heap.ts:456

IFibonacciHeap.extractMin

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Removed minimum node.
 Complexity: O(log n) amortized

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`extractMin`](../interfaces/IFibonacciHeap.md#extractmin)

***

### extractNeighbours()

> **extractNeighbours**(`node`, `includeSelf`): [`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:547

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

Defined in: heap.ts:343

Insert a value and return its node handle.

#### Parameters

##### element

`E`

Value to insert.

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Newly created node.
 Complexity: O(1)

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`insert`](../interfaces/IFibonacciHeap.md#insert)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: heap.ts:526

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`isEmpty`](../interfaces/IFibonacciHeap.md#isempty)

***

### minimum()

> **minimum**(): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:445

IFibonacciHeap.minimum

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Current minimum node.
 Complexity: O(1)

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`minimum`](../interfaces/IFibonacciHeap.md#minimum)

***

### nodeIterator()

> **nodeIterator**(): `Generator`\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>, `void`, `unknown`\>

Defined in: heap.ts:747

#### Returns

`Generator`\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>, `void`, `unknown`\>

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: heap.ts:792

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
 Complexity: O(n) worst case.

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`remove`](../interfaces/IFibonacciHeap.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: heap.ts:769

Iterates elements from the most recently added to the earliest.

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`reverseIterator`](../interfaces/IFibonacciHeap.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: heap.ts:781

This sort function changes the comparator, if one is given as parameter!

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

Defined in: heap.ts:502

Merge another heap into this one.

#### Parameters

##### heap

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md)\<`E`\>

Heap to absorb.
 Complexity: O(1)

#### Returns

`void`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`union`](../interfaces/IFibonacciHeap.md#union)

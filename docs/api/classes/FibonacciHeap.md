[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / FibonacciHeap

# Class: FibonacciHeap\<E\>

Defined in: heap.ts:217

FibonacciHeap Implementation
The Comparator has one requirement: When the "left" value is "null" the ordering must be Ordering.GT
This is needed for delete to function correctly

## Type Parameters

### E

`E`

## Implements

- [`IFibonacciHeap`](../interfaces/IFibonacciHeap.md)\<`E`\>

## Constructors

### Constructor

> **new FibonacciHeap**\<`E`\>(`comparator`, `elements?`): `FibonacciHeap`\<`E`\>

Defined in: heap.ts:224

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`FibonacciHeap`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: heap.ts:221

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`comparator`](../interfaces/IFibonacciHeap.md#comparator)

***

### minNode

> **minNode**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:219

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`minNode`](../interfaces/IFibonacciHeap.md#minnode)

***

### rootList

> **rootList**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:218

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`rootList`](../interfaces/IFibonacciHeap.md#rootlist)

***

### size

> **size**: `number` = `0`

Defined in: heap.ts:220

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`size`](../interfaces/IFibonacciHeap.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: heap.ts:583

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IFibonacciHeap.[iterator]`

***

### add()

> **add**(`e`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:270

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

Defined in: heap.ts:274

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

Defined in: heap.ts:382

#### Returns

`void`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`clear`](../interfaces/IFibonacciHeap.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: heap.ts:260

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

Defined in: heap.ts:298

Decreases a nodes key. When the newValue is null or undefined, node will get the new minNode

O(1) (amortized)

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

##### newValue

`E`

#### Returns

`void`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`decreaseKey`](../interfaces/IFibonacciHeap.md#decreasekey)

***

### delete()

> **delete**(`e`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:285

O(log(size)) (amortized)

#### Parameters

##### e

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`delete`](../interfaces/IFibonacciHeap.md#delete)

***

### extractChildren()

> **extractChildren**(`node`): [`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:400

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Returns

[`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`extractChildren`](../interfaces/IFibonacciHeap.md#extractchildren)

***

### extractMin()

> **extractMin**(): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:322

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`extractMin`](../interfaces/IFibonacciHeap.md#extractmin)

***

### extractNeighbours()

> **extractNeighbours**(`node`, `includeSelf`): [`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:386

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

##### includeSelf

`boolean` = `false`

#### Returns

[`CyclicDoublyLinkedList`](CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`extractNeighbours`](../interfaces/IFibonacciHeap.md#extractneighbours)

***

### insert()

> **insert**(`element`): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:237

O(1)

#### Parameters

##### element

`E`

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`insert`](../interfaces/IFibonacciHeap.md#insert)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: heap.ts:378

#### Returns

`boolean`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`isEmpty`](../interfaces/IFibonacciHeap.md#isempty)

***

### minimum()

> **minimum**(): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:317

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`minimum`](../interfaces/IFibonacciHeap.md#minimum)

***

### nodeIterator()

> **nodeIterator**(): `Generator`\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>, `void`, `unknown`\>

Defined in: heap.ts:577

#### Returns

`Generator`\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>, `void`, `unknown`\>

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: heap.ts:622

#### Parameters

##### target

`number` | `E`

##### isIndex

`boolean` = `true`

#### Returns

`number` \| `E`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`remove`](../interfaces/IFibonacciHeap.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: heap.ts:599

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`reverseIterator`](../interfaces/IFibonacciHeap.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: heap.ts:611

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

Defined in: heap.ts:357

O(1)

#### Parameters

##### heap

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md)\<`E`\>

to merge in the current one

#### Returns

`void`

#### Implementation of

[`IFibonacciHeap`](../interfaces/IFibonacciHeap.md).[`union`](../interfaces/IFibonacciHeap.md#union)

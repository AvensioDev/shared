[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / IFibonacciHeap

# Interface: IFibonacciHeap\<E\>

Defined in: heap.ts:203

FibonacciHeap Implementation
The Comparator has one requirement: When the "left" value is "null" the ordering must be Ordering.GT
This is needed for delete to function correctly

## Extends

- [`ICollection`](ICollection.md)\<`E`\>

## Type Parameters

### E

`E`

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: index.ts:60

#### Inherited from

[`ICollection`](ICollection.md).[`comparator`](ICollection.md#comparator)

***

### minNode

> **minNode**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:205

***

### rootList

> **rootList**: [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:204

***

### size

> **size**: `number`

Defined in: index.ts:61

#### Inherited from

[`ICollection`](ICollection.md).[`size`](ICollection.md#size)

## Methods

### add()

> **add**(`element`): `void`

Defined in: index.ts:62

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

Defined in: index.ts:63

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

Defined in: index.ts:65

#### Returns

`void`

#### Inherited from

[`ICollection`](ICollection.md).[`clear`](ICollection.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: heap.ts:207

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

Defined in: heap.ts:209

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

Defined in: heap.ts:208

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

***

### extractChildren()

> **extractChildren**(`node`): [`CyclicDoublyLinkedList`](../classes/CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:214

#### Parameters

##### node

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

#### Returns

[`CyclicDoublyLinkedList`](../classes/CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

***

### extractMin()

> **extractMin**(): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:211

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

***

### extractNeighbours()

> **extractNeighbours**(`node`, `includeSelf?`): [`CyclicDoublyLinkedList`](../classes/CyclicDoublyLinkedList.md)\<[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>\>

Defined in: heap.ts:213

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

Defined in: heap.ts:206

#### Parameters

##### element

`E`

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: index.ts:66

#### Returns

`boolean`

#### Inherited from

[`ICollection`](ICollection.md).[`isEmpty`](ICollection.md#isempty)

***

### minimum()

> **minimum**(): [`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

Defined in: heap.ts:210

#### Returns

[`FibonacciHeapNode`](../type-aliases/FibonacciHeapNode.md)\<`E`\>

***

### remove()

> **remove**(`e`, `isIndex?`): `number` \| `E`

Defined in: index.ts:64

#### Parameters

##### e

`number` | `E`

##### isIndex?

`boolean`

#### Returns

`number` \| `E`

#### Inherited from

[`ICollection`](ICollection.md).[`remove`](ICollection.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: index.ts:56

#### Returns

`Generator`\<`E`\>

#### Inherited from

[`ICollection`](ICollection.md).[`reverseIterator`](ICollection.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: sort/index.ts:9

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Inherited from

[`ICollection`](ICollection.md).[`sort`](ICollection.md#sort)

***

### union()

> **union**(`heap`): `void`

Defined in: heap.ts:212

#### Parameters

##### heap

`IFibonacciHeap`\<`E`\>

#### Returns

`void`

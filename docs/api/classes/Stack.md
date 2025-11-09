[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / Stack

# Class: Stack\<E\>

Defined in: stack.ts:15

## Type Parameters

### E

`E`

## Implements

- [`IStack`](../interfaces/IStack.md)\<`E`\>

## Constructors

### Constructor

> **new Stack**\<`E`\>(`elements?`): `Stack`\<`E`\>

Defined in: stack.ts:19

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`Stack`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: stack.ts:18

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`comparator`](../interfaces/IStack.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: stack.ts:17

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`size`](../interfaces/IStack.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: stack.ts:75

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IStack.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: stack.ts:90

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`add`](../interfaces/IStack.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: stack.ts:94

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`addAll`](../interfaces/IStack.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: stack.ts:27

#### Returns

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`clear`](../interfaces/IStack.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: stack.ts:62

Checks if an element is contained in the Stack.
For this function to work, a comparator must be set!
O(size) amortized

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`contains`](../interfaces/IStack.md#contains)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: stack.ts:32

#### Returns

`boolean`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`isEmpty`](../interfaces/IStack.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: stack.ts:42

#### Returns

`E`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`pop`](../interfaces/IStack.md#pop)

***

### push()

> **push**(`e`): `void`

Defined in: stack.ts:49

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`push`](../interfaces/IStack.md#push)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: stack.ts:100

#### Parameters

##### target

`number` | `E`

##### isIndex

`boolean` = `true`

#### Returns

`number` \| `E`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`remove`](../interfaces/IStack.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: stack.ts:120

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`reverseIterator`](../interfaces/IStack.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: stack.ts:131

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`sort`](../interfaces/IStack.md#sort)

***

### top()

> **top**(): `E`

Defined in: stack.ts:36

#### Returns

`E`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`top`](../interfaces/IStack.md#top)

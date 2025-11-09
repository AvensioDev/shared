[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / LinkedStack

# Class: LinkedStack\<E\>

Defined in: stack.ts:136

## Type Parameters

### E

`E`

## Implements

- [`IStack`](../interfaces/IStack.md)\<`E`\>

## Constructors

### Constructor

> **new LinkedStack**\<`E`\>(`elements?`): `LinkedStack`\<`E`\>

Defined in: stack.ts:140

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`LinkedStack`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: stack.ts:139

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`comparator`](../interfaces/IStack.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: stack.ts:138

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`size`](../interfaces/IStack.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: stack.ts:218

O(size)

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IStack.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: stack.ts:232

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

Defined in: stack.ts:236

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

Defined in: stack.ts:193

O(1)

#### Returns

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`clear`](../interfaces/IStack.md#clear)

***

### contains()

> **contains**(`e`): `boolean`

Defined in: stack.ts:202

To use this method, a comparator must be set

#### Parameters

##### e

`E`

#### Returns

`boolean`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`contains`](../interfaces/IStack.md#contains)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: stack.ts:178

O(1)

#### Returns

`boolean`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`isEmpty`](../interfaces/IStack.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: stack.ts:165

O(1)

#### Returns

`E`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`pop`](../interfaces/IStack.md#pop)

***

### push()

> **push**(`e`): `void`

Defined in: stack.ts:152

O(1)

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

Defined in: stack.ts:259

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

Defined in: stack.ts:283

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`reverseIterator`](../interfaces/IStack.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: stack.ts:294

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

Defined in: stack.ts:185

O(1)

#### Returns

`E`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`top`](../interfaces/IStack.md#top)

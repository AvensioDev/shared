[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / LinkedStack

# Class: LinkedStack\<E\>

Defined in: stack.ts:186

Node-based stack with O(1) push/pop regardless of size.

## Type Parameters

### E

`E`

## Implements

- [`IStack`](../interfaces/IStack.md)\<`E`\>

## Constructors

### Constructor

> **new LinkedStack**\<`E`\>(`elements?`): `LinkedStack`\<`E`\>

Defined in: stack.ts:190

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`LinkedStack`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: stack.ts:189

Comparator used for contains/sort checks.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`comparator`](../interfaces/IStack.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: stack.ts:188

Current element count.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`size`](../interfaces/IStack.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: stack.ts:266

Iterable

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IStack.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: stack.ts:280

Append an element.

 Complexity: Amortized O(1) unless stated otherwise.

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

Defined in: stack.ts:284

Append every element from another collection.

 Complexity: O(n + m) where m is `collection.size`.

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

Defined in: stack.ts:242

Remove all entries.

 Complexity: O(n)

#### Returns

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`clear`](../interfaces/IStack.md#clear)

***

### contains()

> **contains**(`e`): `boolean`

Defined in: stack.ts:250

Test membership using the comparator when available.

 Complexity: O(n)

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

Defined in: stack.ts:227

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`isEmpty`](../interfaces/IStack.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: stack.ts:214

Pop and return the top value.

#### Returns

`E`

Removed value.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`pop`](../interfaces/IStack.md#pop)

***

### push()

> **push**(`e`): `void`

Defined in: stack.ts:201

Push a value on top.

#### Parameters

##### e

`E`

Value to push.
 Complexity: O(1)

#### Returns

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`push`](../interfaces/IStack.md#push)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: stack.ts:307

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

[`IStack`](../interfaces/IStack.md).[`remove`](../interfaces/IStack.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`\>

Defined in: stack.ts:331

Iterates elements from the most recently added to the earliest.

#### Returns

`Generator`\<`E`\>

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`reverseIterator`](../interfaces/IStack.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: stack.ts:342

Sort the structure using the provided comparator.

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Optional comparator; falls back to the internal one.

#### Returns

`void`

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`sort`](../interfaces/IStack.md#sort)

***

### top()

> **top**(): `E`

Defined in: stack.ts:234

Peek the top value without removing it.

#### Returns

`E`

Top value.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`top`](../interfaces/IStack.md#top)

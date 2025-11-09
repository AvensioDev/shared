---
description: Node-based stack with O(1) push/pop regardless of size.
---

[**Avensio Shared**](../README.md)

***

[Avensio Shared](../README.md) / LinkedStack

# Class: LinkedStack\<E\>

Defined in: stack.ts:206

## Type Parameters

### E

`E`

## Implements

- [`IStack`](../interfaces/IStack.md)\<`E`\>

## Constructors

### Constructor

> **new LinkedStack**\<`E`\>(`elements?`): `LinkedStack`\<`E`\>

Defined in: stack.ts:217

#### Parameters

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`E`, `any`, `any`\>

#### Returns

`LinkedStack`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: stack.ts:215

Comparator used for equality/sort checks.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`comparator`](../interfaces/IStack.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: stack.ts:211

Current element count.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`size`](../interfaces/IStack.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

Defined in: stack.ts:293

[Iterable](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)

#### Returns

[`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`E`\>

#### Implementation of

`IStack.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: stack.ts:310

Append an element.

#### Parameters

##### e

`E`

#### Returns

`void`

#### Remarks

Complexity: Amortized O(1) unless stated otherwise.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`add`](../interfaces/IStack.md#add)

***

### addAll()

> **addAll**(`collection`): `void`

Defined in: stack.ts:317

Append every element from another collection.

#### Parameters

##### collection

[`ICollection`](../interfaces/ICollection.md)\<`E`\>

#### Returns

`void`

#### Remarks

Complexity: O(n + m) where m is `collection.size`.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`addAll`](../interfaces/IStack.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: stack.ts:269

Remove all entries.

#### Returns

`void`

#### Remarks

Complexity: O(n)

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`clear`](../interfaces/IStack.md#clear)

***

### contains()

> **contains**(`e`): `boolean`

Defined in: stack.ts:277

Test membership using the comparator when available.

#### Parameters

##### e

`E`

#### Returns

`boolean`

#### Remarks

Complexity: O(n) worst case

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`contains`](../interfaces/IStack.md#contains)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: stack.ts:254

Check for emptiness.

#### Returns

`boolean`

`true` when `size === 0`.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`isEmpty`](../interfaces/IStack.md#isempty)

***

### pop()

> **pop**(): `E`

Defined in: stack.ts:241

Pop and return the top value.

#### Returns

`E`

Removed value.

#### Remarks

Complexity: O(1)

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`pop`](../interfaces/IStack.md#pop)

***

### push()

> **push**(`e`): `void`

Defined in: stack.ts:228

Push a value on top.

#### Parameters

##### e

`E`

Value to push.

#### Returns

`void`

#### Remarks

Complexity: O(1)

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`push`](../interfaces/IStack.md#push)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: stack.ts:343

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

[`IStack`](../interfaces/IStack.md).[`remove`](../interfaces/IStack.md#remove)

***

### reverseIterator()

> **reverseIterator**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

Defined in: stack.ts:370

Iterates elements from the most recently added to the earliest.

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`E`\>

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`reverseIterator`](../interfaces/IStack.md#reverseiterator)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: stack.ts:384

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

Defined in: stack.ts:261

Peek the top value without removing it.

#### Returns

`E`

Top value.

#### Implementation of

[`IStack`](../interfaces/IStack.md).[`top`](../interfaces/IStack.md#top)

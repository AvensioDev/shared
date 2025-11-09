[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / IStack

# Interface: IStack\<E\>

Defined in: stack.ts:13

LIFO stack contract shared by array and linked implementations.

## Extends

- [`ICollection`](ICollection.md)\<`E`\>

## Extended by

- [`IDequeue`](IDequeue.md)

## Type Parameters

### E

`E`

Value type.

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: stack.ts:17

Comparator used for contains/sort checks.

#### Overrides

[`ICollection`](ICollection.md).[`comparator`](ICollection.md#comparator)

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

Defined in: index.ts:185

Test membership using the comparator when available.

 Complexity: O(n)

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Inherited from

[`ICollection`](ICollection.md).[`contains`](ICollection.md#contains)

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

### pop()

> **pop**(): `E`

Defined in: stack.ts:32

Pop and return the top value.

#### Returns

`E`

Removed value.

#### Throws

When empty.
 Complexity: O(1)

***

### push()

> **push**(`e`): `void`

Defined in: stack.ts:24

Push a value on top.

#### Parameters

##### e

`E`

Value to push.
 Complexity: O(1)

#### Returns

`void`

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

### top()

> **top**(): `E`

Defined in: stack.ts:39

Peek the top value without removing it.

#### Returns

`E`

Top value.

#### Throws

When empty.

---
description: Unbalanced binary search tree that keeps data ordered via a comparator.
---

[**Avensio Shared**](../README.md)

***

[Avensio Shared](../README.md) / BinarySearchTree

# Class: BinarySearchTree\<T\>

Defined in: tree.ts:27

## Example

```ts
const tree = new BinarySearchTree(createComparator('id'))
tree.insert({ id: 2 })
tree.insert({ id: 1 })
tree.traverse() // -> ascending order
```

## Since

2.0.0

## Type Parameters

### T

`T`

Value type.

## Implements

- [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`T`\>

## Constructors

### Constructor

> **new BinarySearchTree**\<`T`\>(`comparator`, `elements?`): `BinarySearchTree`\<`T`\>

Defined in: tree.ts:35

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

Ordering strategy.

##### elements?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`T`, `any`, `any`\>

Optional seed data.

#### Returns

`BinarySearchTree`\<`T`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

Defined in: tree.ts:35

Ordering strategy.

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: tree.ts:46

Current number of stored nodes.

##### Returns

`number`

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`T`\>

Defined in: tree.ts:175

Iterate values in in-order sequence.

#### Returns

[`Iterator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)\<`T`\>

#### Implementation of

`Iterable.[iterator]`

***

### delete()

> **delete**(`value`): `boolean`

Defined in: tree.ts:109

Delete a matching value.

#### Parameters

##### value

`T`

Value to remove.

#### Returns

`boolean`

`true` when a node was removed.

#### Remarks

Complexity: Average O(log n), worst-case O(n).

***

### find()

> **find**(`value`): `T` \| `null`

Defined in: tree.ts:92

Find a matching value.

#### Parameters

##### value

`T`

Value to search.

#### Returns

`T` \| `null`

Stored value or `null`.

#### Remarks

Complexity: Average O(log n), worst-case O(n).

***

### insert()

> **insert**(`value`): `void`

Defined in: tree.ts:56

Insert a value using the comparator for placement.

#### Parameters

##### value

`T`

Value to add.

#### Returns

`void`

#### Remarks

Complexity: Average O(log n), worst-case O(n).

***

### max()

> **max**(): `T` \| `null`

Defined in: tree.ts:151

Return the largest value.

#### Returns

`T` \| `null`

Maximum value or `null`.

***

### metrics()

> **metrics**(): `object`

Defined in: tree.ts:165

Report height and node count.

#### Returns

`object`

Metrics snapshot.

##### height

> **height**: `number`

##### nodeCount

> **nodeCount**: `number`

***

### min()

> **min**(): `T` \| `null`

Defined in: tree.ts:137

Return the smallest value.

#### Returns

`T` \| `null`

Minimum value or `null`.

#### Remarks

Complexity: Average O(log n), worst-case O(n).

***

### traverse()

> **traverse**(`order`): `T`[]

Defined in: tree.ts:125

Traverse the tree in the requested order.

#### Parameters

##### order

[`TraverseOrder`](../type-aliases/TraverseOrder.md) = `'in'`

`'in' | 'pre' | 'post'` (defaults to in-order).

#### Returns

`T`[]

Array containing nodes in traversal order.

#### Remarks

Complexity: O(n)

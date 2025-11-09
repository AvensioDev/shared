[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / BinarySearchTree

# Class: BinarySearchTree\<T\>

Defined in: tree.ts:11

## Type Parameters

### T

`T`

## Implements

- `Iterable`\<`T`\>

## Constructors

### Constructor

> **new BinarySearchTree**\<`T`\>(`comparator`, `elements?`): `BinarySearchTree`\<`T`\>

Defined in: tree.ts:15

#### Parameters

##### comparator

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### elements?

`Iterable`\<`T`, `any`, `any`\>

#### Returns

`BinarySearchTree`\<`T`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

Defined in: tree.ts:15

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: tree.ts:23

##### Returns

`number`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`T`\>

Defined in: tree.ts:106

#### Returns

`Iterator`\<`T`\>

#### Implementation of

`Iterable.[iterator]`

***

### delete()

> **delete**(`value`): `boolean`

Defined in: tree.ts:66

#### Parameters

##### value

`T`

#### Returns

`boolean`

***

### find()

> **find**(`value`): `T` \| `null`

Defined in: tree.ts:56

#### Parameters

##### value

`T`

#### Returns

`T` \| `null`

***

### insert()

> **insert**(`value`): `void`

Defined in: tree.ts:27

#### Parameters

##### value

`T`

#### Returns

`void`

***

### max()

> **max**(): `T` \| `null`

Defined in: tree.ts:90

#### Returns

`T` \| `null`

***

### metrics()

> **metrics**(): `object`

Defined in: tree.ts:99

#### Returns

`object`

##### height

> **height**: `number`

##### nodeCount

> **nodeCount**: `number`

***

### min()

> **min**(): `T` \| `null`

Defined in: tree.ts:81

#### Returns

`T` \| `null`

***

### traverse()

> **traverse**(`order`): `T`[]

Defined in: tree.ts:75

#### Parameters

##### order

[`TraverseOrder`](../type-aliases/TraverseOrder.md) = `'in'`

#### Returns

`T`[]

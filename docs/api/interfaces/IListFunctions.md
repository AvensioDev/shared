[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / IListFunctions

# Interface: IListFunctions\<E\>

Defined in: list.ts:8

## Extended by

- [`IList`](IList.md)

## Type Parameters

### E

`E`

## Methods

### every()

> **every**(`predicate`): `boolean`

Defined in: list.ts:12

#### Parameters

##### predicate

(`element`) => `boolean`

#### Returns

`boolean`

***

### filter()

> **filter**(`predicate`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:11

#### Parameters

##### predicate

(`element`) => `boolean`

#### Returns

[`IList`](IList.md)\<`E`\>

***

### map()

> **map**\<`V`\>(`fn`): [`IList`](IList.md)\<`V`\>

Defined in: list.ts:9

#### Type Parameters

##### V

`V`

#### Parameters

##### fn

(`element`) => `V`

#### Returns

[`IList`](IList.md)\<`V`\>

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:10

#### Type Parameters

##### V

`V`

#### Parameters

##### fn

(`accumulator`, `element`) => `V`

##### initialValue?

`V`

#### Returns

`V`

***

### slice()

> **slice**(`startIndex`, `endIndex`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:14

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

[`IList`](IList.md)\<`E`\>

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:15

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

[`IList`](IList.md)\<`E`\>

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:13

#### Parameters

##### predicate

(`element`) => `boolean`

#### Returns

`boolean`

***

### splice()

> **splice**(`startIndex`, `deleteCount`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:16

#### Parameters

##### startIndex

`number`

##### deleteCount

`number`

#### Returns

[`IList`](IList.md)\<`E`\>

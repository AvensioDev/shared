---
description: Functional helpers shared by array- and node-based lists.
---

[**Typed API (TypeDoc)**](../README.md)

***

[Typed API (TypeDoc)](../README.md) / IListFunctions

# Interface: IListFunctions\<E\>

Defined in: list.ts:13

## Extended by

- [`IList`](IList.md)

## Type Parameters

### E

`E`

Value type.

## Methods

### every()

> **every**(`predicate`): `boolean`

Defined in: list.ts:51

Test whether every element matches the predicate.

#### Parameters

##### predicate

(`element`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when all elements satisfy the predicate.

#### Remarks

Complexity: O(n)

***

### filter()

> **filter**(`predicate`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:42

Create a list containing values that satisfy the predicate.

#### Parameters

##### predicate

(`element`) => `boolean`

Filter callback.

#### Returns

[`IList`](IList.md)\<`E`\>

Filtered list.

#### Remarks

Complexity: O(n)

***

### map()

> **map**\<`V`\>(`fn`): [`IList`](IList.md)\<`V`\>

Defined in: list.ts:22

Transform each element.

#### Type Parameters

##### V

`V`

Result type.

#### Parameters

##### fn

(`element`) => `V`

Mapper invoked per element.

#### Returns

[`IList`](IList.md)\<`V`\>

New list containing mapped values.

#### Remarks

Complexity: O(n)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:33

Reduce the list to a single value.

#### Type Parameters

##### V

`V`

Accumulator type.

#### Parameters

##### fn

(`accumulator`, `element`) => `V`

Reducer callback.

##### initialValue?

`V`

Optional starting value.

#### Returns

`V`

Accumulated result.

#### Remarks

Complexity: O(n)

***

### slice()

> **slice**(`startIndex`, `endIndex`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:70

Take a slice using modulo arithmetic for wrap-around indices.

#### Parameters

##### startIndex

`number`

Beginning index (accepts negatives).

##### endIndex

`number`

Ending index.

#### Returns

[`IList`](IList.md)\<`E`\>

New list with copied range.

#### Remarks

Complexity: O(k) where k is slice length.

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:78

Variant of [slice](#slice) where the sign of `endIndex` decides direction.

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

[`IList`](IList.md)\<`E`\>

New list containing copied range.

#### Remarks

Complexity: O(k)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:60

Test whether any element matches the predicate.

#### Parameters

##### predicate

(`element`) => `boolean`

Match callback.

#### Returns

`boolean`

`true` when at least one element matches.

#### Remarks

Complexity: O(n)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): [`IList`](IList.md)\<`E`\>

Defined in: list.ts:88

Remove and return a consecutive range.

#### Parameters

##### startIndex

`number`

Start position.

##### deleteCount

`number`

Number of items to remove (negative => left).

#### Returns

[`IList`](IList.md)\<`E`\>

List containing removed elements.

#### Remarks

Complexity: O(n)

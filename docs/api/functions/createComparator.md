[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / createComparator

# Function: createComparator()

## Call Signature

> **createComparator**\<`T`\>(`key`, `direction?`): [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

Defined in: index.ts:17

### Type Parameters

#### T

`T`

### Parameters

#### key

keyof `T`

#### direction?

`"asc"` | `"desc"`

### Returns

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

## Call Signature

> **createComparator**\<`T`\>(`extractor`, `direction?`): [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

Defined in: index.ts:22

### Type Parameters

#### T

`T`

### Parameters

#### extractor

(`value`) => `string` \| `number`

#### direction?

`"asc"` | `"desc"`

### Returns

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

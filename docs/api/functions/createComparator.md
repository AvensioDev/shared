---
description: Creates a comparator from a property key or extractor function.
---

[**Avensio Shared**](../README.md)

***

[Avensio Shared](../README.md) / createComparator

# Function: createComparator()

## Template

Value type.

## Param

Property key or extractor returning a sortable value.

## Param

Sort direction (defaults to ascending).

## Example

```ts
const byIdDesc = createComparator<{ id: number }>('id', 'desc')
```

## Remarks

Complexity: O(1) per comparison.

## Since

2.0.0

## Call Signature

> **createComparator**\<`T`\>(`key`, `direction?`): [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

Defined in: index.ts:37

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

Defined in: index.ts:42

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

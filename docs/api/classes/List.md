[**@avensio/shared**](../README.md)

***

[@avensio/shared](../README.md) / List

# Class: List\<E\>

Defined in: list.ts:39

## Type Parameters

### E

`E`

## Implements

- [`IList`](../interfaces/IList.md)\<`E`\>

## Constructors

### Constructor

> **new List**\<`E`\>(`elements?`): `List`\<`E`\>

Defined in: list.ts:44

#### Parameters

##### elements?

`Iterable`\<`E`, `any`, `any`\>

#### Returns

`List`\<`E`\>

## Properties

### comparator

> **comparator**: [`Comparator`](../type-aliases/Comparator.md)\<`E`\>

Defined in: list.ts:42

#### Implementation of

[`IList`](../interfaces/IList.md).[`comparator`](../interfaces/IList.md#comparator)

***

### size

> **size**: `number` = `0`

Defined in: list.ts:41

#### Implementation of

[`IList`](../interfaces/IList.md).[`size`](../interfaces/IList.md#size)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: list.ts:285

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`IList.[iterator]`

***

### add()

> **add**(`e`): `void`

Defined in: list.ts:52

#### Parameters

##### e

`E`

#### Returns

`void`

#### Implementation of

[`IList`](../interfaces/IList.md).[`add`](../interfaces/IList.md#add)

***

### addAll()

> **addAll**(`c`): `void`

Defined in: list.ts:58

#### Parameters

##### c

`Iterable`\<`E`\>

#### Returns

`void`

#### Implementation of

[`IList`](../interfaces/IList.md).[`addAll`](../interfaces/IList.md#addall)

***

### clear()

> **clear**(): `void`

Defined in: list.ts:217

#### Returns

`void`

#### Implementation of

[`IList`](../interfaces/IList.md).[`clear`](../interfaces/IList.md#clear)

***

### contains()

> **contains**(`element`): `boolean`

Defined in: list.ts:243

Checks if an element is contained in the List.
For this function to work, a comparator must be set!
O(size) amortized

#### Parameters

##### element

`E`

#### Returns

`boolean`

#### Implementation of

[`IList`](../interfaces/IList.md).[`contains`](../interfaces/IList.md#contains)

***

### equals()

> **equals**(`l`): `boolean`

Defined in: list.ts:251

For this method to work, a comparator must be set

#### Parameters

##### l

[`IList`](../interfaces/IList.md)\<`E`\>

#### Returns

`boolean`

#### Implementation of

[`IList`](../interfaces/IList.md).[`equals`](../interfaces/IList.md#equals)

***

### every()

> **every**(`predicate`): `boolean`

Defined in: list.ts:191

#### Parameters

##### predicate

(`e`) => `boolean`

#### Returns

`boolean`

#### Implementation of

[`IList`](../interfaces/IList.md).[`every`](../interfaces/IList.md#every)

***

### filter()

> **filter**(`predicate`): `List`\<`E`\>

Defined in: list.ts:181

#### Parameters

##### predicate

(`e`) => `boolean`

#### Returns

`List`\<`E`\>

#### Implementation of

[`IList`](../interfaces/IList.md).[`filter`](../interfaces/IList.md#filter)

***

### get()

> **get**(`index`): `E`

Defined in: list.ts:63

#### Parameters

##### index

`number`

#### Returns

`E`

#### Implementation of

[`IList`](../interfaces/IList.md).[`get`](../interfaces/IList.md#get)

***

### indexOf()

> **indexOf**(`element`, `startIndex`): `number`

Defined in: list.ts:266

Finds the first index of the element
O(size) amortized

#### Parameters

##### element

`E`

##### startIndex

`number` = `0`

#### Returns

`number`

#### Implementation of

[`IList`](../interfaces/IList.md).[`indexOf`](../interfaces/IList.md#indexof)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: list.ts:214

#### Returns

`boolean`

#### Implementation of

[`IList`](../interfaces/IList.md).[`isEmpty`](../interfaces/IList.md#isempty)

***

### map()

> **map**\<`V`\>(`fn`): `List`\<`V`\>

Defined in: list.ts:169

#### Type Parameters

##### V

`V`

#### Parameters

##### fn

(`e`) => `V`

#### Returns

`List`\<`V`\>

#### Implementation of

[`IList`](../interfaces/IList.md).[`map`](../interfaces/IList.md#map)

***

### reduce()

> **reduce**\<`V`\>(`fn`, `initialValue?`): `V`

Defined in: list.ts:177

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

#### Implementation of

[`IList`](../interfaces/IList.md).[`reduce`](../interfaces/IList.md#reduce)

***

### remove()

> **remove**(`target`, `isIndex`): `number` \| `E`

Defined in: list.ts:230

#### Parameters

##### target

`number` | `E`

##### isIndex

`boolean` = `true`

#### Returns

`number` \| `E`

#### Implementation of

[`IList`](../interfaces/IList.md).[`remove`](../interfaces/IList.md#remove)

***

### reverseIterator()

> **reverseIterator**(): `Generator`\<`E`, `void`, `unknown`\>

Defined in: list.ts:279

#### Returns

`Generator`\<`E`, `void`, `unknown`\>

#### Implementation of

[`IList`](../interfaces/IList.md).[`reverseIterator`](../interfaces/IList.md#reverseiterator)

***

### set()

> **set**(`index`, `e`): `boolean`

Defined in: list.ts:67

#### Parameters

##### index

`number`

##### e

`E`

#### Returns

`boolean`

#### Implementation of

[`IList`](../interfaces/IList.md).[`set`](../interfaces/IList.md#set)

***

### slice()

> **slice**(`startIndex`, `endIndex`): `List`\<`E`\>

Defined in: list.ts:78

A positive end index will result in slicing to the right, a negative end index in slicing to the left

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`List`\<`E`\>

#### Implementation of

[`IList`](../interfaces/IList.md).[`slice`](../interfaces/IList.md#slice)

***

### slice2()

> **slice2**(`startIndex`, `endIndex`): `List`\<`E`\>

Defined in: list.ts:102

<p>With this variant of slice, the end index can be used as a direction value.</p>
<p>When the end index is negative, then it will be sliced to the left.</p>

#### Parameters

##### startIndex

`number`

##### endIndex

`number`

#### Returns

`List`\<`E`\>

#### Implementation of

[`IList`](../interfaces/IList.md).[`slice2`](../interfaces/IList.md#slice2)

***

### some()

> **some**(`predicate`): `boolean`

Defined in: list.ts:203

#### Parameters

##### predicate

(`e`) => `boolean`

#### Returns

`boolean`

#### Implementation of

[`IList`](../interfaces/IList.md).[`some`](../interfaces/IList.md#some)

***

### sort()

> **sort**(`cmp?`): `void`

Defined in: list.ts:275

#### Parameters

##### cmp?

[`Comparator`](../type-aliases/Comparator.md)\<`E`\>

#### Returns

`void`

#### Implementation of

[`IList`](../interfaces/IList.md).[`sort`](../interfaces/IList.md#sort)

***

### splice()

> **splice**(`startIndex`, `deleteCount`): `List`\<`E`\>

Defined in: list.ts:164

<p>A negative delete count will result in slicing to the left</p>
<p>A negative start count will be mapped to <code>this.size - startIndex</code></p>
<p>f.e. (size = 6) -1 -> 5, -2 -> 4, ...</p>

#### Parameters

##### startIndex

`number`

##### deleteCount

`number`

#### Returns

`List`\<`E`\>

#### Implementation of

[`IList`](../interfaces/IList.md).[`splice`](../interfaces/IList.md#splice)

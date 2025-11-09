# Comparator Helpers

All collections in `@avensio/shared` rely on comparators that return an `Ordering` (`LT = -1`, `EQ = 0`, `GT = 1`). The `createComparator` utility makes it easy to build them.

## `createComparator`
```ts
import { createComparator, Ordering } from '@avensio/shared'

const byScore = createComparator<{ score: number }>('score')
const byTitleDesc = createComparator(item => item.title, 'desc')
```
- **Overloads**: pass either a property key or an extractor function.
- **Direction**: `'asc'` (default) or `'desc'`.
- **Fallback extractor**: if you omit both parameters, the value itself is compared.

### Custom comparators
```ts
const caseInsensitive = createComparator<string>(
  value => value.toLowerCase()
)
const mixed = createComparator(
  (item: { a: number; b: number }) => item.a + item.b, 'desc'
)
```

## Ready-made comparators
```ts
import {
  numberComparatorASC,
  numberComparatorDESC,
  stringComparatorASC,
  stringComparatorDESC,
} from '@avensio/shared'
```
Use these when you just need basic numeric/string ordering. All of them are built on top of `createComparator`.

## Applying comparators
```ts
const list = new List([{ title: 'foo' }, { title: 'bar' }])
list.comparator = createComparator('title')
list.sort()

const heap = new BinaryHeap(createComparator('priority', 'desc'))
```
A consistent comparator ensures `List.sort`, heaps, priority queues, and other collections behave deterministically.

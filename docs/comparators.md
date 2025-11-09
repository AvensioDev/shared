# Comparator Helpers

All collections rely on comparators that return an `Ordering`. Use `createComparator` for property
based comparisons or the built-in number/string comparators for quick wins.

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
import {
  BinaryHeap,
  List,
  createComparator,
  numberComparatorASC,
} from '@avensio/shared'

const list = new List([{ title: 'foo' }, { title: 'bar' }])
list.comparator = createComparator('title')
list.sort()

const heap = new BinaryHeap(numberComparatorASC)
heap.insert(3)
heap.insert(1)
heap.extractMin()
```

## Complexity
| Helper                 | Notes |
| ---------------------- | ----- |
| `createComparator`     | Builds an `O(1)` comparator from a key or extractor. |
| `numberComparator*`    | Prebuilt ascending/descending numeric comparators. |
| `stringComparator*`    | Prebuilt ascending/descending string comparators. |

## Notes
- Extractors may return numbers or strings; convert complex types accordingly.
- Reuse comparator instances to keep equality checks consistent across structures.
- See [Heaps](./heaps.md) and [Trees](./trees.md) for real-world comparator usage.

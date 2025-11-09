import { ISortable } from './sort'

export enum Ordering {
  LT = -1,
  EQ = 0,
  GT = 1
}

export type Comparator<E> = (e1: E, e2: E) => Ordering

export type Node<E> = undefined | {
  value: E
  prev?: Node<E>
  next?: Node<E>
}

export function createComparator<T>(
  key: keyof T,
  direction?: 'asc' | 'desc'
): Comparator<T>

export function createComparator<T>(
  extractor: (value: T) => number | string,
  direction?: 'asc' | 'desc'
): Comparator<T>

export function createComparator<T>(
  extractorOrKey?: ((value: T) => number | string) | keyof T,
  direction: 'asc' | 'desc' = 'asc'
): Comparator<T> {
  const extractor =
    typeof extractorOrKey === 'function'
      ? extractorOrKey
      : extractorOrKey
        ? (v: T) => v[extractorOrKey] as unknown as number | string
        : (v: T) => v as unknown as number | string

  return (a, b) => {
    const va = extractor(a)
    const vb = extractor(b)

    if (va === vb) return Ordering.EQ
    const result = va < vb ? Ordering.LT : Ordering.GT
    return direction === 'asc' ? result : (result * -1) as Ordering
  }
}

const identityExtractor = (e: any) => e
export const numberComparatorASC = createComparator<number>(identityExtractor)
export const numberComparatorDESC = createComparator<number>(identityExtractor, 'desc')
export const stringComparatorASC = createComparator<string>(identityExtractor)
export const stringComparatorDESC = createComparator<string>(identityExtractor, 'desc')
export const stringComparator = stringComparatorASC

export interface IReverseIterable<E> {
  reverseIterator(): Generator<E>
}

export interface ICollection<E> extends ISortable<E>, Iterable<E>, IReverseIterable<E> {
  comparator: Comparator<E>
  size: number
  add(element: E): void
  addAll(collection: ICollection<E>): void
  remove(e: E | number, isIndex?: boolean): E | number
  clear(): void
  isEmpty(): boolean
  contains(element: E): boolean
}

export * from './stack'
export * from './queue'
export * from './list'
export * from './heap'
export * from './sort'
export * from './math'
export * from './tree'

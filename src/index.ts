import { ISortable } from './sort'

/**
 * @description Defines the relative ordering results used throughout the collections.
 *
 * @since 2.0.0
 */
export enum Ordering {
  LT = -1,
  EQ = 0,
  GT = 1
}

/**
 * @description Compares two values and returns an {@link Ordering}.
 *
 * @template E Value type.
 * @param e1 - First element.
 * @param e2 - Second element.
 * @returns Ordering describing the relative order.
 * @since 2.0.0
 */
export type Comparator<E> = (e1: E, e2: E) => Ordering

/**
 * @description Doubly linked node shared by list/queue implementations.
 *
 * @template E Stored value type.
 * @since 2.0.0
 */
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

/**
 * @description Creates a comparator from a property key or extractor function.
 *
 * @template T Value type.
 * @param extractorOrKey - Property key or extractor returning a sortable value.
 * @param direction - Sort direction (defaults to ascending).
 * @returns Comparator honoring the supplied extractor and direction.
 * @example
 * ```ts
 * const byIdDesc = createComparator<{ id: number }>('id', 'desc')
 * ```
 * @remarks Complexity: O(1) per comparison.
 * @since 2.0.0
 */
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

/**
 * @description Comparator sorting numbers ascending (min-first).
 *
 * @since 2.0.0
 */
export const numberComparatorASC = createComparator<number>(identityExtractor)

/**
 * @description Comparator sorting numbers descending (max-first).
 *
 * @since 2.0.0
 */
export const numberComparatorDESC = createComparator<number>(identityExtractor, 'desc')

/**
 * @description Comparator sorting strings ascending (lexicographical).
 *
 * @since 2.0.0
 */
export const stringComparatorASC = createComparator<string>(identityExtractor)

/**
 * @description Comparator sorting strings descending.
 *
 * @since 2.0.0
 */
export const stringComparatorDESC = createComparator<string>(identityExtractor, 'desc')

/**
 * @description Backward-compatible string comparator alias (ascending).
 *
 * @since 2.0.0
 */
export const stringComparator = stringComparatorASC

/**
 * @description Allows iterating from tail to head.
 *
 * @template E Value type.
 * @since 2.0.0
 */
export interface IReverseIterable<E> {
  /**
   * Iterates elements from the most recently added to the earliest.
   */
  reverseIterator(): Generator<E>
}

/**
 * @description Base contract shared by all collections.
 *
 * @template E Value type.
 * @since 2.0.0
 */
export interface ICollection<E> extends ISortable<E>, Iterable<E>, IReverseIterable<E> {
  /**
   * Comparator used for equality/sort checks.
   */
  comparator: Comparator<E>
  /**
   * Current element count.
   */
  size: number

  /**
   * Append an element.
   *
   * @remarks Complexity: Amortized O(1) unless stated otherwise.
   */
  add(element: E): void

  /**
   * Append every element from another collection.
   *
   * @remarks Complexity: O(n + m) where m is `collection.size`.
   */
  addAll(collection: ICollection<E>): void

  /**
   * Remove by value or index.
   *
   * @param e - Element or index.
   * @param isIndex - When `true`, treat `e` as index.
   * @throws {Error} If neither argument nor existing comparator are set.
   * @returns Removed element or index of removal.
   * @remarks Complexity: O(n) worst case.
   */
  remove(e: E | number, isIndex?: boolean): E | number

  /**
   * Remove all entries.
   *
   * @remarks Complexity: O(n)
   */
  clear(): void

  /**
   * Check for emptiness.
   *
   * @returns `true` when `size === 0`.
   */
  isEmpty(): boolean

  /**
   * Test membership using the comparator when available.
   *
   * @remarks Complexity: O(n) worst case
   */
  contains(element: E): boolean
}

export * from './stack'
export * from './queue'
export * from './list'
export * from './heap'
export * from './sort'
export * from './math'
export * from './tree'

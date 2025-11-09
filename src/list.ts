import {
  type Comparator,
  type ICollection,
  type Node,
  Ordering,
} from './'

/**
 * @description Functional helpers shared by array- and node-based lists.
 *
 * @template E Value type.
 */
export interface IListFunctions<E> {
  /**
   * Transform each element.
   *
   * @template V Result type.
   * @param fn - Mapper invoked per element.
   * @returns New list containing mapped values.
   * @remarks Complexity: O(n)
   */
  map<V>(fn: (element: E) => V): IList<V>

  /**
   * Reduce the list to a single value.
   *
   * @template V Accumulator type.
   * @param fn - Reducer callback.
   * @param initialValue - Optional starting value.
   * @returns Accumulated result.
   * @remarks Complexity: O(n)
   */
  reduce<V>(fn: (accumulator: V, element: E) => V, initialValue?: V): V

  /**
   * Create a list containing values that satisfy the predicate.
   *
   * @param predicate - Filter callback.
   * @returns Filtered list.
   * @remarks Complexity: O(n)
   */
  filter(predicate: (element: E) => boolean): IList<E>

  /**
   * Test whether every element matches the predicate.
   *
   * @param predicate - Match callback.
   * @returns `true` when all elements satisfy the predicate.
   * @remarks Complexity: O(n)
   */
  every(predicate: (element: E) => boolean): boolean

  /**
   * Test whether any element matches the predicate.
   *
   * @param predicate - Match callback.
   * @returns `true` when at least one element matches.
   * @remarks Complexity: O(n)
   */
  some(predicate: (element: E) => boolean): boolean

  /**
   * Take a slice using modulo arithmetic for wrap-around indices.
   *
   * @param startIndex - Beginning index (accepts negatives).
   * @param endIndex - Ending index.
   * @returns New list with copied range.
   * @remarks Complexity: O(k) where k is slice length.
   */
  slice(startIndex: number, endIndex: number): IList<E>

  /**
   * Variant of {@link slice} where the sign of `endIndex` decides direction.
   *
   * @returns New list containing copied range.
   * @remarks Complexity: O(k)
   */
  slice2(startIndex: number, endIndex: number): IList<E>

  /**
   * Remove and return a consecutive range.
   *
   * @param startIndex - Start position.
   * @param deleteCount - Number of items to remove (negative => left).
   * @returns List containing removed elements.
   * @remarks Complexity: O(n)
   */
  splice(startIndex: number, deleteCount: number): IList<E>
}

export interface IList<E> extends ICollection<E>, IListFunctions<E> {
  /**
   * Append every value from an iterable.
   *
   * @param collection - Source iterable.
   * @remarks Complexity: O(n)
   */
  addAll(collection: Iterable<E>): void

  /**
   * Read the element at a given index.
   *
   * @param index - Zero-based index.
   * @returns Element at the index.
   * @remarks Complexity: O(1) for {@link List}, O(n) for linked variants.
   */
  get(index: number): E

  /**
   * Replace the element at `index`.
   *
   * @param index - Position to update.
   * @param element - New value.
   * @returns `true` when successful.
   */
  set(index: number, element: E | null): boolean

  /**
   * Compare equality value-by-value using the comparator.
   *
   * @param otherList - List to compare.
   * @returns `true` when lengths match and all elements compare equal.
   */
  equals(otherList: IList<E>): boolean

  /**
   * Locate the first matching element starting at `startIndex`.
   *
   * @param element - Needle value.
   * @param startIndex - Optional search start.
   * @returns Index or `-1`.
   * @remarks Complexity: O(n)
   */
  indexOf(element: E, startIndex: number): number

  /**
   * Iterate backwards.
   */
  reverseIterator(): Generator<E>
}

export interface ILinkedList<E> extends IList<E> {
  /**
   * Head node reference.
   */
  first: Node<E>
  /**
   * Tail node reference.
   */
  last: Node<E>

  /**
   * Retrieve the internal node at `index`.
   *
   * @remarks Complexity: O(n)
   */
  getNode(index: number): Node<E>

  /**
   * Insert at the beginning.
   *
   * @remarks Complexity: O(1)
   */
  addFirst(element: E): void

  /**
   * Insert at the end.
   *
   * @remarks Complexity: O(1)
   */
  addLast(element: E): void

  /**
   * Read the first element.
   *
   * @throws {Error} When empty.
   */
  getFirst(): E

  /**
   * Read the last element.
   */
  getLast(): E

  /**
   * Remove and return the head value.
   *
   * @remarks Complexity: O(1)
   */
  removeFirst(): E

  /**
   * Remove and return the tail value.
   *
   * @remarks Complexity: O(1)
   */
  removeLast(): E
}

/**
 * @description Array-backed {@link IList} optimized for random access and iteration.
 *
 * @template E Value type.
 * @example
 * ```ts
 * const list = new List([1, 2, 3])
 * list.add(4)
 * list.slice(1, 3) // -> [2, 3]
 * ```
 * @since 2.0.0
 */
export class List<E> implements IList<E> {
  private arr: E[] = []
  /**
   * {@inheritDoc ICollection.size}
   */
  size = 0
  /**
   * {@inheritDoc ICollection.comparator}
   */
  comparator: Comparator<E> = null!

  constructor(elements?: Iterable<E>) {
    if (elements) {
      for (const el of elements) {
        this.add(el)
      }
    }
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    if (e !== undefined) {
      this.arr.push(e)
      this.size++
    }
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(c: Iterable<E>) {
    for (const e of c) {
      this.add(e)
    }
  }

  /**
   * {@inheritDoc IList.get}
   */
  get(index: number): E {
    return this.arr[index]
  }

  /**
   * {@inheritDoc IList.set}
   */
  set(index: number, e: E): boolean {
    if (index < 0 || index >= this.size || e === undefined) return false
    this.arr[index] = e
    return true
  }

  /**
   * Create a slice, treating indices modulo the current size.
   *
   * @param startIndex - Start index (accepts negatives to wrap from the end).
   * @param endIndex - End index (exclusive).
   * @returns New list containing the copied range.
   * @remarks Complexity: O(k) where k is the number of elements copied.
   */
  slice(startIndex: number, endIndex: number): List<E> {
    const slice = new List<E>()
    const cse = calculateStartAndEnd<E>
    const calc = cse.call(this, startIndex, endIndex)
    let { start } = calc
    const { end } = calc

    const cc = calculateCount<E>
    const count = cc.call(this, start, end, true)
    for (let i = 0; i < count; i++) {
      slice.add(this.get(start % this.size))
      start++
    }

    return slice
  }

  /**
   * Slice the list while interpreting `endIndex` as a direction toggle.
   *
   * @param startIndex - Starting index.
   * @param endIndex - Determines direction (negative => left).
   * @returns New list containing the copied path.
   * @remarks Complexity: O(k)
   */
  slice2(startIndex: number, endIndex: number): List<E> {
    const slice = new List<E>()
    if (startIndex < 0) {
      let start = (this.size + (startIndex % this.size === 0 ? -this.size : startIndex % this.size))
      if (endIndex < 0) {
        // slice to the left
        const end = (this.size + (endIndex % this.size === 0 ? -this.size : endIndex % this.size))
        // @ts-ignore
        const count = calculateCount.call(this, start, end)
        for (let i = 0; i < count; i++) {
          slice.add(this.get(start))
          start--
          if (start < 0) {
            start = this.size - 1
          }
        }
      } else {
        // slice to the right
        const end = endIndex % this.size
        // @ts-ignore
        const count = calculateCount.call(this, start, end, true)
        for (let i = 0; i < count; i++) {
          slice.add(this.get(start % this.size))
          start++
        }
      }
    } else {
      let start = startIndex % this.size
      if (endIndex < 0) {
        // slice to the left
        const end = this.size + (endIndex % this.size)
        // @ts-ignore
        const count = calculateCount.call(this, start, end)
        for (let i = 0; i < count; i++) {
          if (start < 0) {
            slice.add(this.get(this.size + start))
          } else {
            slice.add(this.get(start))
          }
          start--
        }
      } else {
        const end = endIndex % this.size
        // slice to the right
        // @ts-ignore
        const count = calculateCount.call(this, start, end, true)
        for (let i = 0; i < count; i++) {
          slice.add(this.get(start % this.size))
          start++
        }
      }
    }
    return slice
  }

  /**
   * Remove a range and return it as a new list.
   *
   * @param startIndex - Start index (negative values wrap from the end).
   * @param deleteCount - Number of elements to remove (negative => left).
   * @returns Removed elements as a new list.
   * @remarks Complexity: O(n)
   */
  splice(startIndex: number, deleteCount: number): List<E> {
    // @ts-ignore
    return _splice.call(this, startIndex, deleteCount, new List<E>())
  }

  /**
   * {@inheritDoc IListFunctions.map}
   */
  map<V>(fn: (e: E) => V): List<V> {
    const list = new List<V>()
    for (const e of this) {
      list.add(fn(e))
    }
    return list
  }

  /**
   * {@inheritDoc IListFunctions.reduce}
   */
  reduce<V>(fn: (accumulator: V, element: E) => V, initialValue?: V): V {
    return this.arr.reduce(fn, initialValue || {} as V)
  }

  /**
   * {@inheritDoc IListFunctions.filter}
   */
  filter(predicate: (e: E) => boolean): List<E> {
    const list = new List<E>()
    for (const e of this) {
      if (predicate(e)) {
        list.add(e)
      }
    }
    return list
  }

  /**
   * {@inheritDoc IListFunctions.every}
   */
  every(predicate: (e: E) => boolean): boolean {
    let all = true
    for (const e of this.arr) {
      if (!predicate(e)) {
        all = false
        break
      }
    }

    return all
  }

  /**
   * {@inheritDoc IListFunctions.some}
   */
  some(predicate: (e: E) => boolean): boolean {
    let someMatches = false
    for (const e of this.arr) {
      if (predicate(e)) {
        someMatches = true
        break
      }
    }
    return someMatches
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear(): void {
    this.arr.splice(0, this.arr.length)
    this.size = 0
  }

  private removeAtIndex(index: number): E {
    if (index < 0 || index >= this.size) throw new Error('no such element')
    const [removed] = this.arr.splice(index, 1)
    if (removed === undefined) throw new Error('no such element')
    this.size = this.arr.length
    return removed
  }

  /**
   * {@inheritDoc ICollection.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    const index = isIndex ? Number(target) : this.indexOf(target as E)
    const removed = this.removeAtIndex(index)
    return isIndex ? removed : index
  }

  /**
   * {@inheritDoc ICollection.contains}
   */
  contains(element: E): boolean {
    return this.indexOf(element) > -1
  }

  /**
   * {@inheritDoc IList.equals}
   */
  equals(l: IList<E>): boolean {
    for (let i = 0; i < l.size; i++) {
      if (this.comparator(l.get(i), this.get(i)) !== Ordering.EQ) {
        return false
      }
    }
    return true
  }

  /**
   * {@inheritDoc IList.indexOf}
   */
  indexOf(element: E, startIndex: number = 0): number {
    const start = Math.max(0, startIndex)
    for (let i = start; i < this.size; i++) {
      if (this.comparator(element, this.get(i)) === Ordering.EQ) return i
    }

    return -1
  }

  /**
   * {@inheritDoc ISortable.sort}
   */
  sort(cmp?: Comparator<E>): void {
    this.arr = this.arr.sort((cmp || this.comparator))
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      yield this.arr[i]
    }
  }

  /**
   * Iterate through all elements in the List.
   * @returns Iterator for the List.
   */
  [Symbol.iterator](): Iterator<E> {
    let index = 0
    return {
      next: () => {
        let el
        try {
          el = this.get(index)
        } catch { /* empty */
        }
        return {
          done: index++ === this.size,
          value: el
        } as IteratorResult<E>
      }
    }
  }
}

/**
 * @description Singly linked list with O(1) head/tail insertions.
 *
 * @template E Value type.
 * @since 2.0.0
 */
export class LinkedList<E> implements ILinkedList<E> {
  /**
   * {@inheritDoc ILinkedList.first}
   */
  first: Node<E>
  /**
   * {@inheritDoc ILinkedList.last}
   */
  last: Node<E>
  /**
   * {@inheritDoc ICollection.size}
   */
  size: number = 0
  /**
   * {@inheritDoc ICollection.comparator}
   */
  comparator: Comparator<E> = null!
  private cursorNode?: Node<E>
  private cursorIndex = -1

  constructor(elements?: Iterable<E>, reverse = false) {
    if (elements) {
      for (const el of elements) {
        if (reverse) this.addFirst(el)
        else this.add(el)
      }
    }
  }

  private resetCursor() {
    this.cursorNode = undefined
    this.cursorIndex = -1
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    this.addLast(e)
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(c: Iterable<E>) {
    for (const e of c) {
      this.add(e)
    }
  }

  /**
   * {@inheritDoc ILinkedList.addFirst}
   */
  addFirst(e: E): void {
    if (e === undefined) return
    this.resetCursor()
    this.first = {
      value: e,
      next: this.first
    }
    if (this.size === 1) {
      this.last = this.first.next
    }
    this.size++
  }

  /**
   * {@inheritDoc ILinkedList.addLast}
   */
  addLast(e: E): void {
    if (e === undefined) return
    this.resetCursor()
    const node = { value: e }
    if (!this.first) {
      this.first = node
    } else if (this.first && !this.last) {
      this.last = node
      this.first.next = this.last
    } else if (this.last) {
      this.last.next = node
      this.last = this.last.next
    }
    this.size++
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear(): void {
    this.first = this.last = undefined
    this.size = 0
    this.resetCursor()
  }

  /**
   * O(size)<br>
   * Ω(1)
   */
  get(index: number): E {
    try {
      const node = this.getNode(index)
      if (node) {
        return node.value
      }
    } catch { /* empty */
    }
    return undefined!
  }

  /**
   * {@inheritDoc IList.set}
   */
  set(index: number, e: E): boolean {
    if (index < 0 || index >= this.size || e === undefined) return false
    this.getNode(index)!.value = e
    return true
  }

  /**
   * {@inheritDoc IListFunctions.slice}
   */
  slice(startIndex: number, endIndex: number): LinkedList<E> {
    // @ts-ignore
    return _slice.call(this, startIndex, endIndex, new LinkedList<E>())
  }

  /**
   * {@inheritDoc IListFunctions.slice2}
   */
  slice2(startIndex: number, endIndex: number): LinkedList<E> {
    const slice = new LinkedList<E>()
    if (startIndex < 0) {
      let start = (this.size + (startIndex % this.size === 0 ? -this.size : startIndex % this.size))
      if (endIndex < 0) {
        // slice to the left
        const end = (this.size + (endIndex % this.size === 0 ? -this.size : endIndex % this.size))
        // @ts-ignore
        const count = calculateCount.call(this, start, end)
        for (let i = 0; i < count; i++) {
          if (start < 0) {
            slice.add(this.get(this.size + start))
          } else {
            slice.add(this.get(start))
          }
          start--
        }
      } else {
        // slice to the right
        const end = endIndex % this.size
        // @ts-ignore
        const count = calculateCount.call(this, start, end, true)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.next || this.first
          start++
        }
      }
    } else {
      let start = startIndex % this.size
      if (endIndex < 0) {
        // slice to the left
        const end = this.size + (endIndex % this.size)
        // @ts-ignore
        const count = calculateCount.call(this, start, end)
        for (let i = 0; i < count; i++) {
          if (start < 0) {
            slice.add(this.get(this.size + start))
          } else {
            slice.add(this.get(start))
          }
          start--
        }
      } else {
        const end = endIndex % this.size
        // slice to the right
        // @ts-ignore
        const count = calculateCount.call(this, start, end, true)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.next || this.first
          start++
        }
      }
    }
    return slice
  }

  /**
   * {@inheritDoc IListFunctions.splice}
   */
  splice(startIndex: number, deleteCount: number): LinkedList<E> {
    // @ts-ignore
    const slice = _splice.call(this, startIndex, deleteCount, new LinkedList<E>())
    this.resetCursor()
    return slice as LinkedList<E>
  }

  /**
   * {@inheritDoc IListFunctions.map}
   */
  map<V>(fn: (e: E) => V): LinkedList<V> {
    const list = new LinkedList<V>()
    for (const e of this) {
      list.add(fn(e))
    }
    return list
  }

  /**
   * {@inheritDoc IListFunctions.reduce}
   */
  reduce<V>(fn: (accumulator: V, element: E) => V, initialValue?: V): V {
    let result = initialValue || {} as V
    for (const e of this) {
      result = fn(result, e)
    }
    return result
  }

  /**
   * {@inheritDoc IListFunctions.filter}
   */
  filter(predicate: (e: E) => boolean): LinkedList<E> {
    const list = new LinkedList<E>()
    for (const e of this) {
      if (predicate(e)) {
        list.add(e)
      }
    }
    return list
  }

  /**
   * {@inheritDoc IListFunctions.every}
   */
  every(predicate: (e: E) => boolean): boolean {
    let all = true
    for (const el of this) {
      if (!predicate(el)) {
        all = false
        break
      }
    }

    return all
  }

  /**
   * {@inheritDoc IListFunctions.some}
   */
  some(predicate: (e: E) => boolean): boolean {
    let someMatches = false
    for (const e of this) {
      if (predicate(e)) {
        someMatches = true
        break
      }
    }
    return someMatches
  }

  /**
   * {@inheritDoc ILinkedList.getFirst}
   */
  getFirst() {
    if (!this.first) throw new Error('no such element')
    return this.first.value
  }

  /**
   * {@inheritDoc ILinkedList.getLast}
   */
  getLast() {
    if (this.size === 1) return this.first!.value
    if (!this.last) throw new Error('no such element')
    return this.last.value
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  private removeAtIndex(index: number): E {
    this.resetCursor()
    if (index >= this.size || index < 0)
      throw new Error('no such element')

    if (index === 0) return this.removeFirst()
    if (index === this.size - 1) return this.removeLast()

    const prev = this.getNode(index - 1)
    const toRemove = prev?.next
    if (!toRemove) throw new Error('no such element')
    prev!.next = toRemove.next
    if (toRemove === this.last) {
      this.last = prev
    }
    const value = toRemove.value
    toRemove.next = toRemove.value = undefined! // GC
    this.size--
    return value
  }

  /**
   * {@inheritDoc ICollection.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    const index = isIndex ? Number(target) : this.indexOf(target as E)
    const removed = this.removeAtIndex(index)
    return isIndex ? removed : index
  }

  /**
   * {@inheritDoc ILinkedList.removeFirst}
   */
  removeFirst(): E {
    this.resetCursor()
    let value
    switch (this.size) {
      case 0:
        throw new Error('no such element')
      case 1:
        const _first1 = this.first
        this.first = undefined // GC
        value = _first1!.value
        _first1!.next = _first1!.value = undefined! // GC
        break
      case 2:
        const _first2 = this.first
        this.first = this.last
        this.last = undefined // GC
        value = _first2!.value
        _first2!.next = _first2!.value = undefined! // GC
        break
      default:
        const _first3 = this.first
        this.first = {
          value: _first3!.next!.value,
          next: _first3!.next!.next
        }
        value = _first3!.value
        _first3!.next = _first3!.value = undefined! // GC
    }
    this.size--
    return value
  }

  /**
   * {@inheritDoc ILinkedList.removeLast}
   */
  removeLast(): E {
    this.resetCursor()
    let value
    switch (this.size) {
      case 0:
        throw new Error('no such element')
      case 1:
        const _last1 = this.first
        this.first = undefined
        value = _last1!.value
        _last1!.value = _last1!.next = undefined! // GC
        break
      case 2:
        const _last2 = this.last
        this.first!.next = this.last = undefined
        value = _last2!.value
        _last2!.value = _last2!.next = undefined! // GC
        break
      default:
        const _last3 = this.last
        this.last = this.getNode(this.size - 2)
        this.last!.next = undefined
        value = _last3!.value
        _last3!.value = _last3!.next = undefined! // GC
    }

    this.size--
    return value
  }

  /**
   * {@inheritDoc ILinkedList.getNode}
   */
  getNode(index: number): Node<E> {
    if (index < 0 || index >= this.size) throw new Error('no such element')
    let node: Node<E> | undefined
    let start = 0
    if (this.cursorNode && this.cursorIndex !== -1 && index >= this.cursorIndex) {
      node = this.cursorNode
      start = this.cursorIndex
    } else {
      node = this.first
      start = 0
    }

    for (let i = start; i < index; i++) {
      node = node!.next
    }

    this.cursorNode = node
    this.cursorIndex = index
    return node!
  }

  /**
   * {@inheritDoc ICollection.contains}
   */
  contains(element: E): boolean {
    return this.indexOf(element) > -1
  }

  /**
   * {@inheritDoc IList.equals}
   */
  equals(l: IList<E>): boolean {
    for (let i = 0; i < l.size; i++) {
      if (this.comparator(l.get(i), this.get(i)) !== Ordering.EQ) {
        return false
      }
    }
    return true
  }

  /**
   * {@inheritDoc IList.indexOf}
   */
  indexOf(element: E): number {
    for (let i = 0; i < this.size; i++) {
      if (this.comparator(element, this.get(i)) === Ordering.EQ) return i
    }

    return -1
  }

  /**
   * {@inheritDoc ISortable.sort}
   */
  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const values = Array.from(this).sort((a, b) => comparator(a, b))
    let current = this.first
    for (let i = 0; i < values.length; i++) {
      if (!current) break
      current.value = values[i]
      current = current.next
    }
    if (cmp) {
      this.comparator = comparator
    }
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator() {
    for (let i = this.size - 1; i >= 0; i--) {
      yield this.getNode(i)!.value
    }
  }

  /**
   * Iterates through the LinkedList.
   * @returns Iterator for iterating.
   * @remarks Complexity: O(size)
   */
  [Symbol.iterator](): Iterator<E> {
    let first = this.first
    return {
      next: () => {
        return {
          done: first === undefined,
          value: (() => {
            if (first) {
              const val = first.value
              first = first.next
              return val
            }
            return undefined!
          })()
        }
      }
    }
  }
}

/**
 * @description Doubly linked list supporting bidirectional traversal with O(1) inserts at both ends.
 */
export class DoublyLinkedList<E> implements ILinkedList<E> {
  /**
   * {@inheritDoc ILinkedList.first}
   */
  first: Node<E>
  /**
   * {@inheritDoc ILinkedList.last}
   */
  last: Node<E>
  /**
   * {@inheritDoc ICollection.size}
   */
  size = 0
  /**
   * {@inheritDoc ICollection.comparator}
   */
  comparator: Comparator<E> = null!

  constructor(elements?: Iterable<E>, reverse = false) {
    if (elements) {
      for (const el of elements) {
        if (reverse) this.addFirst(el)
        else this.add(el)
      }
    }
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    this.addLast(e)
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(c: Iterable<E>) {
    for (const e of c) {
      this.add(e)
    }
  }

  /**
   * {@inheritDoc ILinkedList.addFirst}
   */
  addFirst(e: E): void {
    if (e === undefined) return

    const oldFirst = this.first
    this.first = {
      value: e,
      next: oldFirst
    }
    if (this.first.next) {
      this.first.next.prev = this.first
    }
    if (this.size === 1) {
      this.last = this.first.next
      this.last!.prev = this.first
    }
    this.size++
  }

  /**
   * {@inheritDoc ILinkedList.addLast}
   */
  addLast(e: E): void {
    if (e === undefined) return

    const node = { value: e }
    if (!this.first) {
      this.first = node
    } else if (this.first && !this.last) {
      this.last = node
      this.first.next = this.last
      this.last.prev = this.first
    } else if (this.last) {
      const oldLast = this.last
      this.last.next = node
      this.last = node
      this.last.prev = oldLast
    }
    this.size++
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear(): void {
    this.first = this.last = undefined
    this.size = 0
  }

  /**
   * {@inheritDoc IList.get}
   */
  get(index: number): E {
    try {
      const node = this.getNode(index)
      if (node) {
        return node.value
      }
    } catch { /* empty */
    }
    return undefined!
  }

  /**
   * {@inheritDoc IList.set}
   */
  set(index: number, e: E): boolean {
    if (index < 0 || index >= this.size || e === undefined) return false
    this.getNode(index)!.value = e
    return true
  }

  /**
   * {@inheritDoc IListFunctions.slice}
   */
  slice(startIndex: number, endIndex: number): DoublyLinkedList<E> {
    // @ts-ignore
    return _slice.call(this, startIndex, endIndex, new DoublyLinkedList<E>())
  }

  /**
   * {@inheritDoc IListFunctions.slice2}
   */
  slice2(startIndex: number, endIndex: number): DoublyLinkedList<E> {
    const slice = new DoublyLinkedList<E>()
    if (startIndex < 0) {
      let start = (this.size + (startIndex % this.size === 0 ? -this.size : startIndex % this.size))
      if (endIndex < 0) {
        // slice to the left
        const end = (this.size + (endIndex % this.size === 0 ? -this.size : endIndex % this.size))
        // @ts-ignore
        const count = calculateCount.call(this, start, end)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.prev || this.last
        }
      } else {
        // slice to the right
        const end = endIndex % this.size
        // @ts-ignore
        const count = calculateCount.call(this, start, end, true)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.next || this.first
          start++
        }
      }
    } else {
      let start = startIndex % this.size
      if (endIndex < 0) {
        // slice to the left
        const end = this.size + (endIndex % this.size)
        // @ts-ignore
        const count = calculateCount.call(this, start, end)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.prev || this.last
          start--
        }
      } else {
        const end = endIndex % this.size
        // slice to the right
        // @ts-ignore
        const count = calculateCount.call(this, start, end, true)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.next || this.first
          start++
        }
      }
    }
    return slice
  }

  /**
   * {@inheritDoc IListFunctions.splice}
   */
  splice(startIndex: number, deleteCount: number): DoublyLinkedList<E> {
    // @ts-ignore
    return _splice.call(this, startIndex, deleteCount, new DoublyLinkedList<E>())
  }

  /**
   * {@inheritDoc IListFunctions.map}
   */
  map<V>(fn: (e: E) => V): DoublyLinkedList<V> {
    const list = new DoublyLinkedList<V>()
    for (const e of this) {
      list.add(fn(e))
    }
    return list
  }

  /**
   * {@inheritDoc IListFunctions.reduce}
   */
  reduce<V>(fn: (accumulator: V, element: E) => V, initialValue?: V): V {
    let result = initialValue || {} as V
    for (const e of this) {
      result = fn(result, e)
    }
    return result
  }

  /**
   * {@inheritDoc IListFunctions.filter}
   */
  filter(predicate: (e: E) => boolean): DoublyLinkedList<E> {
    const list = new DoublyLinkedList<E>()
    for (const e of this) {
      if (predicate(e)) {
        list.add(e)
      }
    }
    return list
  }

  /**
   * {@inheritDoc IListFunctions.every}
   */
  every(predicate: (e: E) => boolean): boolean {
    let all = true
    for (const el of this) {
      if (!predicate(el)) {
        all = false
        break
      }
    }

    return all
  }

  /**
   * {@inheritDoc IListFunctions.some}
   */
  some(predicate: (e: E) => boolean): boolean {
    let someMatches = false
    for (const e of this) {
      if (predicate(e)) {
        someMatches = true
        break
      }
    }
    return someMatches
  }

  /**
   * {@inheritDoc ILinkedList.getFirst}
   */
  getFirst(): E {
    if (!this.first) throw new Error('no such element')
    return this.first.value
  }

  /**
   * {@inheritDoc ILinkedList.getLast}
   */
  getLast(): E {
    if (this.size === 1) return this.first!.value
    if (!this.last) throw new Error('no such element')
    return this.last.value
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * O(size / 2)<br>
   * Ω(1)
   * @param index
   */
  private removeAtIndex(index: number): E {
    if (index >= this.size || index < 0) throw new Error('no such element')
    if (index === 0) return this.removeFirst()
    if (index === this.size - 1) return this.removeLast()

    const toRemove = this.getNode(index)
    toRemove!.prev!.next = toRemove!.next
    toRemove!.next!.prev = toRemove!.prev
    const value = toRemove!.value
    toRemove!.next = toRemove!.prev = toRemove!.value = undefined! // GC
    this.size--
    return value
  }

  /**
   * {@inheritDoc ICollection.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    const index = isIndex ? Number(target) : this.indexOf(target as E)
    const removed = this.removeAtIndex(index)
    return isIndex ? removed : index
  }

  /**
   * {@inheritDoc ILinkedList.removeFirst}
   */
  removeFirst(): E {
    let value
    switch (this.size) {
      case 0:
        throw new Error('no such element')
      case 1:
        const _first1 = this.first
        this.first = undefined
        value = _first1!.value
        _first1!.value = _first1!.next = _first1!.prev = undefined! // GC
        break
      case 2:
        const _first2 = this.first
        this.first = this.last
        this.first!.next = this.first!.prev = undefined
        this.last = undefined
        value = _first2!.value
        _first2!.value = _first2!.next = _first2!.prev = undefined! // GC
        break
      default:
        const _first3 = this.first
        this.first = {
          value: this.first!.next!.value,
          next: this.first!.next!.next
        }
        this.first.next!.prev = this.first
        value = _first3!.value
        _first3!.value = _first3!.next = _first3!.prev = undefined! // GC
    }
    this.size--
    return value
  }

  /**
   * {@inheritDoc ILinkedList.removeLast}
   */
  removeLast(): E {
    let value
    switch (this.size) {
      case 0:
        throw new Error('no such element')
      case 1:
        value = this.first!.value
        this.first = this.first!.value = undefined! // GC
        break
      case 2:
        value = this.last!.value
        this.first!.next = this.last = this.last!.prev = undefined // GC
        break
      default:
        value = this.last!.value
        this.last = this.getNode(this.size - 2)
        this.last!.next = this.last!.next!.prev = undefined // GC
    }

    this.size--
    return value
  }

  /**
   * {@inheritDoc ILinkedList.getNode}
   */
  getNode(index: number): Node<E> {
    if (index >= this.size || index < 0) throw new Error('no such element')
    let node = this.first
    if (index > this.size / 2) {
      // start from last
      node = this.last
      for (let i = this.size - 1; i > index; i--) {
        node = node!.prev
      }
    } else {
      // start from first
      for (let i = 0; i < index; i++) {
        node = node!.next
      }
    }

    return node
  }

  /**
   * {@inheritDoc ICollection.contains}
   */
  contains(element: E): boolean {
    return this.indexOf(element) > -1
  }

  /**
   * {@inheritDoc IList.equals}
   */
  equals(l: IList<E>): boolean {
    for (let i = 0; i < l.size; i++) {
      if (this.comparator(l.get(i), this.get(i)) !== Ordering.EQ) {
        return false
      }
    }
    return true
  }

  /**
   * {@inheritDoc IList.indexOf}
   */
  indexOf(element: E): number {
    for (let i = 0; i < this.size; i++) {
      if (this.comparator(element, this.get(i)) === Ordering.EQ) return i
    }

    return -1
  }

  /**
   * {@inheritDoc ISortable.sort}
   */
  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const values = Array.from(this).sort((a, b) => comparator(a, b))
    let current = this.first
    for (let i = 0; i < values.length; i++) {
      current!.value = values[i]
      current = current!.next
    }
    if (cmp) {
      this.comparator = comparator
    }
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator() {
    for (let i = this.size - 1; i >= 0; i--) {
      yield this.getNode(i)!.value
    }
  }

  /**
   * Iterates through the whole DoublyLinkedList.
   * @remarks Complexity: O(size)
   */
  [Symbol.iterator](): Iterator<E> {
    let first = this.first
    return {
      next: () => {
        return {
          done: first === undefined,
          value: (() => {
            if (first) {
              const val = first.value
              first = first.next
              return val
            }
            return undefined!
          })()
        }
      }
    }
  }
}

/**
 * @description Circular doubly linked list used by Fibonacci heap internals.
 */
export class CyclicDoublyLinkedList<E> implements ILinkedList<E> {
  /**
   * {@inheritDoc ILinkedList.first}
   */
  first: Node<E>
  /**
   * {@inheritDoc ILinkedList.last}
   */
  last: Node<E>
  /**
   * {@inheritDoc ICollection.size}
   */
  size = 0
  /**
   * {@inheritDoc ICollection.comparator}
   */
  comparator: Comparator<E> = null!

  constructor(elements?: Iterable<E>, reverse = false) {
    if (elements) {
      for (const el of elements) {
        if (reverse) this.addFirst(el)
        else this.add(el)
      }
    }
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    this.addLast(e)
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(c: Iterable<E>) {
    for (const e of c) {
      this.add(e)
    }
  }

  /**
   * {@inheritDoc ILinkedList.addFirst}
   */
  addFirst(e: E): void {
    if (e === undefined) return

    const oldFirst = this.first
    this.first = {
      value: e,
      next: oldFirst,
      prev: this.last
    }
    if (oldFirst) {
      oldFirst.prev = this.first
    } else {
      this.first.next = this.first
    }
    if (!this.first.prev) {
      this.first.prev = this.first
    } else {
      this.last!.next = this.first
    }

    if (this.size === 1) {
      this.last = this.first.next
      this.last!.prev = this.first
    }
    this.size++
  }

  /**
   * {@inheritDoc ILinkedList.addLast}
   */
  addLast(e: E): void {
    if (e === undefined) return

    const node = { value: e }
    if (!this.first) {
      this.first = node
      this.first.next = this.first.prev = this.first
    } else if (this.first && !this.last) {
      this.last = node
      this.last.prev = this.last.next = this.first
      this.first.next = this.first.prev = this.last
    } else if (this.last) {
      const oldLast = this.last
      this.last.next = node
      this.last = node
      this.last.prev = oldLast
      this.last.next = this.first
      this.first.prev = this.last
    }
    this.size++
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear(): void {
    this.first = this.last = undefined
    this.size = 0
  }

  /**
   * {@inheritDoc IList.get}
   */
  get(index: number): E {
    try {
      const node = this.getNode(index)
      if (node) {
        return node.value
      }
    } catch { /* empty */
    }
    return undefined!
  }

  /**
   * {@inheritDoc IList.set}
   */
  set(index: number, e: E): boolean {
    if (index < 0 || index >= this.size || e === undefined) return false
    this.getNode(index)!.value = e
    return true
  }

  /**
   * {@inheritDoc IListFunctions.slice}
   */
  slice(startIndex: number, endIndex: number): CyclicDoublyLinkedList<E> {
    // @ts-ignore
    return _slice.call(this, startIndex, endIndex, new CyclicDoublyLinkedList<E>())
  }

  /**
   * {@inheritDoc IListFunctions.slice2}
   */
  slice2(startIndex: number, endIndex: number): CyclicDoublyLinkedList<E> {
    const slice = new CyclicDoublyLinkedList<E>()
    if (startIndex < 0) {
      const start = (this.size + (startIndex % this.size === 0 ? -this.size : startIndex % this.size))
      if (endIndex < 0) {
        // slice to the left
        const end = (this.size + (endIndex % this.size === 0 ? -this.size : endIndex % this.size))
        // @ts-ignore
        const count = calculateCount.call(this, start, end)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.prev
        }
      } else {
        // slice to the right
        const end = endIndex % this.size
        // @ts-ignore
        const count = calculateCount.call(this, start, end, true)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.next
        }
      }
    } else {
      const start = startIndex % this.size
      if (endIndex < 0) {
        // slice to the left
        const end = this.size + (endIndex % this.size)
        // @ts-ignore
        const count = calculateCount.call(this, start, end)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.prev
        }
      } else {
        const end = endIndex % this.size
        // slice to the right
        // @ts-ignore
        const count = calculateCount.call(this, start, end, true)
        let startNode = this.getNode(start)
        for (let i = 0; i < count; i++) {
          slice.add(startNode?.value!)
          startNode = startNode?.next
        }
      }
    }
    return slice
  }

  /**
   * {@inheritDoc IListFunctions.splice}
   */
  splice(startIndex: number, deleteCount: number): CyclicDoublyLinkedList<E> {
    // @ts-ignore
    return _splice.call(this, startIndex, deleteCount, new CyclicDoublyLinkedList<E>())
  }

  /**
   * {@inheritDoc IListFunctions.map}
   */
  map<V>(fn: (e: E) => V): CyclicDoublyLinkedList<V> {
    const list = new CyclicDoublyLinkedList<V>()
    for (const e of this) {
      list.add(fn(e))
    }
    return list
  }

  /**
   * {@inheritDoc IListFunctions.reduce}
   */
  reduce<V>(fn: (accumulator: V, element: E) => V, initialValue?: V): V {
    let result = initialValue || {} as V
    for (const e of this) {
      result = fn(result, e)
    }
    return result
  }

  /**
   * {@inheritDoc IListFunctions.filter}
   */
  filter(predicate: (e: E) => boolean): CyclicDoublyLinkedList<E> {
    const list = new CyclicDoublyLinkedList<E>()
    for (const e of this) {
      if (predicate(e)) {
        list.add(e)
      }
    }
    return list
  }

  /**
   * {@inheritDoc IListFunctions.every}
   */
  every(predicate: (e: E) => boolean): boolean {
    let all = true
    for (const el of this) {
      if (!predicate(el)) {
        all = false
        break
      }
    }

    return all
  }

  /**
   * {@inheritDoc IListFunctions.some}
   */
  some(predicate: (e: E) => boolean): boolean {
    let someMatches = false
    for (const e of this) {
      if (predicate(e)) {
        someMatches = true
        break
      }
    }
    return someMatches
  }

  /**
   * {@inheritDoc ILinkedList.getFirst}
   */
  getFirst(): E {
    if (!this.first) throw new Error('no such element')
    return this.first.value
  }

  /**
   * {@inheritDoc ILinkedList.getLast}
   */
  getLast(): E {
    if (this.size === 1) return this.first!.value
    if (!this.last) throw new Error('no such element')
    return this.last.value
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * O(size / 2)<br>
   * Ω(1)
   * @param index
   */
  private removeAtIndex(index: number): E {
    if (index >= this.size || index < 0) throw new Error('no such element')

    if (index === 0) return this.removeFirst()
    if (index === this.size - 1) return this.removeLast()

    const toRemove = this.getNode(index)
    toRemove!.prev!.next = toRemove!.next
    toRemove!.next!.prev = toRemove!.prev
    const value = toRemove!.value
    toRemove!.next = toRemove!.prev = toRemove!.value = undefined! // GC
    this.size--
    return value
  }

  /**
   * {@inheritDoc ICollection.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    const index = isIndex ? Number(target) : this.indexOf(target as E)
    const removed = this.removeAtIndex(index)
    return isIndex ? removed : index
  }

  /**
   * {@inheritDoc ILinkedList.removeFirst}
   */
  removeFirst(): E {
    let value
    switch (this.size) {
      case 0:
        throw new Error('no such element')
      case 1:
        const _first1 = this.first
        this.first = undefined // GC
        value = _first1!.value
        _first1!.value = _first1!.next = _first1!.prev = undefined! // GC
        break
      case 2:
        const _first2 = this.first
        this.last!.next = this.last!.prev = undefined // GC
        this.first = this.last
        this.last = undefined // GC
        this.first!.next = this.first!.prev = this.first
        value = _first2!.value
        _first2!.value = _first2!.next = _first2!.prev = undefined! // GC
        break
      default:
        const _first3 = this.first
        this.first = {
          value: _first3!.next!.value,
          next: _first3!.next!.next,
          prev: _first3!.next!.prev
        }
        this.first.next!.prev = this.first
        value = _first3!.value
        _first3!.prev = _first3!.next = _first3!.value = undefined! // GC
    }

    this.size--
    return value
  }

  /**
   * {@inheritDoc ILinkedList.removeLast}
   */
  removeLast(): E {
    let value
    switch (this.size) {
      case 0:
        throw new Error('no such element')
      case 1:
        value = this.first!.value
        this.first!.value = this.first!.next = this.first!.prev = undefined! // GC
        this.first = undefined// GC
        break
      case 2:
        value = this.last!.value
        this.last!.prev = this.last!.next = this.last!.value = undefined! // GC
        this.last = undefined // GC
        this.first!.prev = this.first
        this.first!.next = this.first
        break
      default:
        const _last3 = this.last
        value = _last3!.value
        this.last = this.getNode(this.size - 2)
        this.last!.next = this.first
        _last3!.value = _last3!.next = _last3!.prev = undefined! // GC
    }

    this.size--
    return value
  }

  /**
   * {@inheritDoc ILinkedList.getNode}
   */
  getNode(index: number): Node<E> {
    if (index >= this.size || index < 0) throw new Error('no such element')
    let node = this.first
    if (index > this.size / 2) {
      // start from last
      node = this.last
      for (let i = this.size - 1; i > index; i--) {
        node = node?.prev
      }
    } else {
      // start from first
      for (let i = 0; i < index; i++) {
        node = node?.next
      }
    }

    return node
  }

  /**
   * {@inheritDoc ICollection.contains}
   */
  contains(element: E): boolean {
    return this.indexOf(element) > -1
  }

  /**
   * {@inheritDoc IList.equals}
   */
  equals(l: IList<E>): boolean {
    for (let i = 0; i < l.size; i++) {
      if (this.comparator(l.get(i), this.get(i)) !== Ordering.EQ) {
        return false
      }
    }
    return true
  }

  /**
   * {@inheritDoc IList.indexOf}
   */
  indexOf(element: E): number {
    for (let i = 0; i < this.size; i++) {
      if (this.comparator(element, this.get(i)) === Ordering.EQ) return i
    }

    return -1
  }

  /**
   * {@inheritDoc ISortable.sort}
   */
  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    if (this.size <= 1) return
    const values = Array.from(this).sort((a, b) => comparator(a, b))
    let current = this.first
    for (let i = 0; i < values.length; i++) {
      current!.value = values[i]
      current = current!.next
    }
    if (cmp) {
      this.comparator = comparator
    }
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator() {
    for (let i = this.size - 1; i >= 0; i--) {
      yield this.getNode(i)!.value
    }
  }

  /**
   * Iterates through the whole CyclicDoublyLinkedList.
   * @returns Iterator for the CyclicDoublyLinkedList.
   * @remarks Complexity: O(size)
   */
  [Symbol.iterator](): Iterator<E> {
    let first = this.first
    let i = this.size - 1
    return {
      next: () => {
        return {
          done: i === -1,
          value: (() => {
            if (first && i >= 0) {
              const val = first.value
              first = first.next
              i--
              return val
            }
            return undefined!
          })()
        }
      }
    }
  }
}


/**
 * <p>Calculates the element count from a start to an end index on a list in a specified direction.</p>
 * <p>Start and end must be in the interval [0,this.size-1] (x mod this.size)</p>
 * @param start startIndex
 * @param end endIndex
 * @param right count to the right (default: false)
 */
function calculateCount<E>(this: IList<E>, start: number, end: number, right = false): number {
  if (start === end) return 1
  if (right) {
    if (start < end) {
      return end - start + 1
    }
    return this.size - start + end + 1
  }
  if (start < end) {
    return this.size - (end - start) + 1
  }
  return start - end + 1
}

function calculateStartAndEnd<E>(this: IList<E>, startIndex: number, endIndex: number) {
  let start, end
  if (startIndex < 0)
    start = this.size + (startIndex % this.size)
  else
    start = startIndex % this.size
  if (endIndex < 0)
    end = this.size + (endIndex % this.size)
  else
    end = endIndex % this.size
  return { start, end }
}

function _splice<E>(this: IList<E>, startIndex: number, deleteCount: number, slice: IList<E>): IList<E> {
  if (deleteCount === 0) return slice
  const deleteC = deleteCount % this.size
  const size = this.size
  let start = startIndex < 0 ?
    this.size + (startIndex % this.size === 0 ? -this.size : startIndex % this.size)
    : startIndex % this.size

  if (deleteCount < 0) {
    let toIndex = Math.abs(deleteCount)
    if (deleteCount === -this.size || (deleteCount < -this.size && deleteC === 0)) {
      toIndex = size
    }

    // slice and remove to the left
    for (let i = 0, j = start; i < toIndex; i++, j--) {
      if (j < 0) {
        // @ts-ignore
        slice.add(this.remove(this.size - 1))
        j = this.size
      } else {
        // @ts-ignore
        slice.add(this.remove(j))
      }
    }
    this.size -= slice.size
    slice.comparator = this.comparator
    return slice
  }

  let toIndex = Math.abs(deleteC) + start
  if (deleteCount === this.size || (deleteCount > this.size && deleteC === 0)) {
    toIndex = size + start
  }

  // slice and remove to the right
  for (let i = start; i < toIndex; i++) {
    // @ts-ignore
    slice.add(this.remove(start % this.size))
    if (this.size < start) {
      start--
    }
  }
  return slice
}

function _slice<E>(this: ILinkedList<E>, startIndex: number, endIndex: number, slice: ILinkedList<E>) {
  const cse = calculateStartAndEnd<E>
  const calc = cse.call(this, startIndex, endIndex)
  let { start } = calc
  const { end } = calc

  const cc = calculateCount<E>
  const count = cc.call(this, start, end, true)
  let startNode = this.getNode(start)
  for (let i = 0; i < count; i++) {
    slice.add(startNode?.value!)
    startNode = startNode?.next || this.first
    start++
  }
  return slice
}

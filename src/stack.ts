import {
  type Comparator,
  type ICollection,
  type Node,
  Ordering,
} from './'

/**
 * @description LIFO stack contract shared by array and linked implementations.
 *
 * @template E Value type.
 */
export interface IStack<E> extends ICollection<E> {
  /**
   * Push a value on top.
   *
   * @param e - Value to push.
   * @remarks Complexity: O(1)
   */
  push(e: E): void

  /**
   * Pop and return the top value.
   *
   * @returns Removed value.
   * @throws {Error} When empty.
   * @remarks Complexity: O(1)
   */
  pop(): E

  /**
   * Peek the top value without removing it.
   *
   * @returns Top value.
   * @throws {Error} When empty.
   */
  top(): E
}

/**
 * @description Array-backed stack optimized for traversal and random inspection.
 *
 * @template E Value type.
 */
export class Stack<E> implements IStack<E> {
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
        this.push(el)
      }
    }
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear(): void {
    this.arr.splice(0, this.arr.length)
    this.size = 0
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * {@inheritDoc IStack.top}
   */
  top(): E {
    const top = this.arr[this.size - 1]
    if (top === undefined) throw new Error('no such element')
    return top
  }

  /**
   * {@inheritDoc IStack.pop}
   */
  pop(): E {
    const top = this.arr.pop()
    if (top === undefined) throw new Error('no such element')
    this.size--
    return top
  }

  /**
   * {@inheritDoc IStack.push}
   */
  push(e: E): void {
    if (e !== undefined) {
      this.arr.push(e)
      this.size++
    }
  }

  /**
   * {@inheritDoc ICollection.contains}
   */
  contains(element: E): boolean {
    if (this.comparator) {
      for (const value of this) {
        if (this.comparator(element, value) === Ordering.EQ) return true
      }
    } else {
      for (const value of this) {
        if (value === element) return true
      }
    }
    return false
  }

  /**
   * {@link Iterable}
   */
  [Symbol.iterator](): Iterator<E> {
    const stack = this
    let index = this.size - 1
    return {
      next: () => {
        let top
        if (index > -2) top = stack.arr[index--]
        return {
          done: index === -2,
          value: top
        } as IteratorResult<E>
      }
    }
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    this.push(e)
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(collection: ICollection<E>) {
    for (const e of collection) {
      this.push(e)
    }
  }

  /**
   * {@inheritDoc ICollection.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    let indexFromTop: number
    if (isIndex) {
      indexFromTop = Number(target)
    } else {
      const indexFromBottom = this.arr.findIndex(value => this.comparator
        ? this.comparator(value, target as E) === Ordering.EQ
        : value === target)
      if (indexFromBottom === -1) throw new Error('no such element')
      indexFromTop = this.size - 1 - indexFromBottom
    }
    if (indexFromTop < 0 || indexFromTop >= this.size) throw new Error('no such element')
    const actual = this.size - 1 - indexFromTop
    const [removed] = this.arr.splice(actual, 1)
    this.size--
    if (removed === undefined) throw new Error('no such element')
    return isIndex ? removed : indexFromTop
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator(): Generator<E> {
    const tmp = []
    for (const e of this) {
      tmp.push(e)
    }

    for (const e of tmp.reverse()) {
      yield e
    }
  }

  /**
   * {@inheritDoc ISortable.sort}
   */
  sort(cmp?: Comparator<E>): void {
    this.arr.sort(cmp || this.comparator)
  }
}

/**
 * @description Node-based stack with O(1) push/pop regardless of size.
 */
export class LinkedStack<E> implements IStack<E> {
  private _top: Node<E>
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
        this.push(el)
      }
    }
  }

  /**
   * {@inheritDoc IStack.push}
   */
  push(e: E) {
    if (e !== undefined) {
      this._top = {
        value: e,
        next: this._top
      }
      this.size++
    }
  }

  /**
   * {@inheritDoc IStack.pop}
   */
  pop() {
    const node = this._top
    if (node === undefined) throw new Error('no such element')
    this._top = node.next
    this.size--
    const value = node.value
    node.value = node.next = node.prev = undefined! // GC
    return value
  }

  /**
   * {@inheritDoc ICollection.isEmpty}
   */
  isEmpty() {
    return this.size === 0
  }

  /**
   * {@inheritDoc IStack.top}
   */
  top() {
    if (this._top === undefined) throw new Error('no such element')
    return this._top.value
  }

  /**
   * {@inheritDoc ICollection.clear}
   */
  clear() {
    this._top = undefined
    this.size = 0
  }

  /**
   * {@inheritDoc ICollection.contains}
   */
  contains(e: E): boolean {
    if (this.comparator) {
      for (const value of this) {
        if (this.comparator(e, value) === Ordering.EQ) return true
      }
    } else {
      for (const value of this) {
        if (value === e) return true
      }
    }
    return false
  }

  /**
   * {@link Iterable}
   */
  [Symbol.iterator](): Iterator<E> {
    let top = this._top
    return {
      next: () => {
        const _top = top
        top = _top?.next
        return {
          done: _top === undefined,
          value: _top?.value!
        }
      }
    }
  }

  /**
   * {@inheritDoc ICollection.add}
   */
  add(e: E): void {
    this.push(e)
  }

  /**
   * {@inheritDoc ICollection.addAll}
   */
  addAll(collection: ICollection<E>) {
    for (const e of collection) {
      this.push(e)
    }
  }

  private removeAtIndex(index: number): E {
    if (index < 0 || index >= this.size) throw new Error('no such element')
    if (index === 0) return this.pop()

    let prev = this._top
    for (let i = 0; i < index - 1; i++) {
      prev = prev?.next
    }
    const toRemove = prev?.next
    if (!prev || !toRemove) throw new Error('no such element')
    prev.next = toRemove.next
    this.size--
    const value = toRemove.value
    toRemove.value = toRemove.prev = toRemove.next = undefined!
    return value
  }

  /**
   * {@inheritDoc ICollection.remove}
   */
  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    let index: number
    if (isIndex) {
      index = Number(target)
    } else {
      let i = 0
      let node = this._top
      index = -1
      while (node) {
        const match = this.comparator ? this.comparator(node.value, target as E) === Ordering.EQ : node.value === target
        if (match) {
          index = i
          break
        }
        node = node.next
        i++
      }
    }
    if (index < 0 || index >= this.size) throw new Error('no such element')
    const removed = this.removeAtIndex(index)
    return isIndex ? removed : index
  }

  /**
   * {@inheritDoc IReverseIterable.reverseIterator}
   */
  *reverseIterator(): Generator<E> {
    const tmp = []
    for (const e of this) {
      tmp.push(e)
    }

    for (const e of tmp.reverse()) {
      yield e
    }
  }

  /**
   * {@inheritDoc ISortable.sort}
   */
  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const values = Array.from(this).sort((a, b) => comparator(a, b))
    this.clear()
    for (const value of values) {
      this.push(value)
    }
    if (cmp) {
      this.comparator = comparator
    }
  }
}

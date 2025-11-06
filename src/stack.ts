import {
  type Comparator,
  type ICollection,
  type Node,
  Ordering,
} from './'

export interface IStack<E> extends ICollection<E> {
  comparator: Comparator<E>
  push(e: E): void
  pop(): E
  top(): E
}

export class Stack<E> implements IStack<E> {
  private arr: E[] = []
  size = 0
  comparator: Comparator<E> = null!
  constructor(elements?: Iterable<E>) {
    if (elements) {
      for(const el of elements) {
        this.push(el)
      }
    }
  }

  clear(): void {
    this.arr.splice(0, this.arr.length)
    this.size = 0
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  top(): E {
    const top = this.arr[this.size - 1]
    if (top === undefined) throw new Error('no such element')
    return top
  }

  pop(): E {
    const top = this.arr.pop()
    if (top === undefined) throw new Error('no such element')
    this.size--
    return top
  }

  push(e: E): void {
    if (e !== undefined) {
      this.arr.push(e)
      this.size++
    }
  }

  /**
   * Checks if an element is contained in the Stack.
   * For this function to work, a comparator must be set!
   * O(size) amortized
   * @param element
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

  add(e: E): void {
    this.push(e)
  }

  addAll(collection: ICollection<E>) {
    for (const e of collection) {
      this.push(e)
    }
  }

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

  *reverseIterator(): Generator<E> {
    const tmp = []
    for (const e of this) {
      tmp.push(e)
    }

    for (const e of tmp.reverse()) {
      yield e
    }
  }

  sort(cmp?: Comparator<E>): void {
    this.arr.sort(cmp || this.comparator)
  }
}

export class LinkedStack<E> implements IStack<E> {
  private _top: Node<E>
  size = 0
  comparator: Comparator<E> = null!
  constructor(elements?: Iterable<E>) {
    if (elements) {
      for(const el of elements) {
        this.push(el)
      }
    }
  }

  /**
   * O(1)
   * @param e
   */
  push(e: E) {
    if (e !== undefined) {
      this._top = {
        value: e,
        prev: this._top
      }
      this.size++
    }
  }

  /**
   * O(1)
   */
  pop() {
    const node = this._top
    if (node === undefined) throw new Error('no such element')
    this._top = node.prev
    this.size--
    const value = node.value
    node.value = node.next = node.prev = undefined! // GC
    return value
  }

  /**
   * O(1)
   */
  isEmpty() {
    return this.size === 0
  }

  /**
   * O(1)
   */
  top() {
    if (this._top === undefined) throw new Error('no such element')
    return this._top.value
  }

  /**
   * O(1)
   */
  clear() {
    this._top = undefined
    this.size = 0
  }

  /**
   * To use this method, a comparator must be set
   * @param e
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
   * O(size)
   */
  [Symbol.iterator](): Iterator<E> {
    let top = this._top
    return {
      next: () => {
        const _top = top
        top = _top?.prev
        return {
          done: _top === undefined,
          value: _top?.value!
        }
      }
    }
  }

  add(e: E): void {
    this.push(e)
  }

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
      prev = prev?.prev
    }
    const toRemove = prev?.prev
    if (!prev || !toRemove) throw new Error('no such element')
    prev.prev = toRemove.prev
    this.size--
    const value = toRemove.value
    toRemove.value = toRemove.prev = toRemove.next = undefined!
    return value
  }

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
        node = node.prev
        i++
      }
    }
    if (index < 0 || index >= this.size) throw new Error('no such element')
    const removed = this.removeAtIndex(index)
    return isIndex ? removed : index
  }

  *reverseIterator(): Generator<E> {
    const tmp = []
    for (const e of this) {
      tmp.push(e)
    }

    for (const e of tmp.reverse()) {
      yield e
    }
  }

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

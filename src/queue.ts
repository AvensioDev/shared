import {
  type Comparator,
  type ICollection,
  type IStack,
  type Node,
  Ordering,
} from './'

export interface IQueue<E> extends ICollection<E> {
  enqueue(e: E): void
  dequeue(): E
  head(): E
}

export interface IDequeue<E> extends IQueue<E>, IStack<E> { }

export class Queue<E> implements IQueue<E> {
  private arr: E[] = []
  private headIndex = 0
  size = 0
  comparator: Comparator<E> = null!

  constructor(elements?: Iterable<E>, comparator?: Comparator<E>) {
    if (elements) {
      for (const el of elements) {
        this.enqueue(el)
      }
    }

    if (comparator) {
      this.comparator = comparator
      this.sort()
    }
  }

  private compactIfNeeded() {
    const shouldCompact = this.headIndex > 0 && this.headIndex >= this.arr.length / 2
    if (shouldCompact) {
      this.arr = this.arr.slice(this.headIndex)
      this.headIndex = 0
    }
  }

  private toArray(): E[] {
    return this.arr.slice(this.headIndex, this.headIndex + this.size)
  }

  clear(): void {
    this.arr = []
    this.headIndex = 0
    this.size = 0
  }

  dequeue(): E {
    if (this.size === 0) throw new Error('no such element')
    const value = this.arr[this.headIndex]
    this.arr[this.headIndex] = undefined!
    this.headIndex++
    this.size--

    if (this.size === 0) {
      this.clear()
    } else {
      this.compactIfNeeded()
    }

    return value
  }

  enqueue(e: E): void {
    if (e === undefined) return
    this.arr.push(e)
    this.size++
  }

  add(e: E): void {
    this.enqueue(e)
  }

  addAll(collection: ICollection<E>): void {
    for (let e of collection) {
      this.enqueue(e)
    }
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  head(): E {
    if (this.size === 0) throw new Error('no such element')
    const value = this.arr[this.headIndex]
    if (value === undefined) throw new Error('no such element')
    return value
  }

  /**
   * Checks if an element is contained in the Queue.
   * For this function to work, a comparator must be set!
   * O(size) amortized
   * @param element
   */
  contains(element: E): boolean {
    if (this.comparator) {
      for (let i = 0; i < this.size; i++) {
        const value = this.arr[this.headIndex + i]
        if (this.comparator(element, value) === Ordering.EQ) return true
      }
    } else {
      for (let i = 0; i < this.size; i++) {
        const value = this.arr[this.headIndex + i]
        if (value === element) return true
      }
    }
    return false
  }

  [Symbol.iterator](): Iterator<E> {
    const queue = this
    let index = 0
    const end = this.size
    return {
      next(): IteratorResult<E> {
        if (index >= end) {
          return { done: true, value: undefined! }
        }
        const value = queue.arr[queue.headIndex + index]
        index++
        return {
          done: false,
          value
        }
      }
    }
  }

  *reverseIterator(): Generator<E> {
    for (let i = this.size - 1; i >= 0; i--) {
      yield this.arr[this.headIndex + i]
    }
  }

  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const sorted = this.toArray().sort((a, b) => comparator(a, b))
    this.arr = sorted
    this.headIndex = 0
    this.size = sorted.length
    if (cmp) {
      this.comparator = comparator
    }
  }

  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    let index: number
    let values: E[] | undefined
    if (isIndex) {
      index = Number(target)
    } else {
      values = this.toArray()
      const cmp = this.comparator
      if (cmp) {
        index = values.findIndex(value => cmp(value, target as E) === Ordering.EQ)
      } else {
        index = values.findIndex(value => value === target)
      }
    }
    if (index < 0 || index >= this.size) throw new Error('no such element')
    values = values ?? this.toArray()
    const [removed] = values.splice(index, 1)
    if (removed === undefined) throw new Error('no such element')
    this.arr = values
    this.headIndex = 0
    this.size = values.length
    return isIndex ? removed : index
  }
}

export class LinkedQueue<E> implements IQueue<E> {
  private _head: Node<E>
  private tail: Node<E>
  size = 0
  comparator: Comparator<E> = null!

  constructor(elements?: Iterable<E>, comparator?: Comparator<E>) {
    if (elements) {
      for(const el of elements) {
        this.enqueue(el)
      }
    }
    if (comparator) {
      this.comparator = comparator
    }
  }

  /**
   * O(1)
   * @param e
   */
  enqueue(e: E) {
    if (e === undefined) return
    const oldTail = this.tail
    this.tail = {
      value: e,
      next: undefined
    }
    if (this._head) oldTail!.next = this.tail
    else this._head = this.tail
    this.size++
  }

  add(e: E): void {
    this.enqueue(e)
  }

  addAll(collection: ICollection<E>): void {
    for (let e of collection) {
      this.enqueue(e)
    }
  }

  /**
   * O(1)
   */
  dequeue() {
    const head = this._head
    if (!this._head) throw new Error('no such element')
    this._head = head!.next
    this.size--
    const value = head!.value
    if (this.isEmpty()) {
      this.tail = undefined
    }

    head!.value = head!.prev = head!.next = undefined! // GC
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
  head() {
    if (this._head) return this._head.value
    throw new Error('no such element')
  }

  /**
   * O(1)
   */
  clear() {
    this._head = this.tail = undefined
    this.size = 0
  }

  /**
   * Checks if an element is contained in the LinkedQueue.
   * For this function to work, a comparator must be set!
   * O(size) amortized
   * @param element
   */
  contains(element: E): boolean {
    if (this.comparator) {
      for (const e of this) {
        if (this.comparator(element, e) === Ordering.EQ) return true
      }
    } else {
      for (const e of this) {
        if (e === element) return true
      }
    }
    return false
  }

  /**
   * O(size)
   */
  [Symbol.iterator](): Iterator<E> {
    let head = this._head
    return {
      next: () => {
        const _head = head
        head = _head?.next
        return {
          done: _head == undefined,
          value: _head?.value!
        }
      }
    }
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
      this.enqueue(value)
    }
    if (cmp) {
      this.comparator = comparator
    }
  }

  private removeAtIndex(index: number): E {
    if (index < 0 || index >= this.size) throw new Error('no such element')
    if (index === 0) return this.dequeue()

    let prev = this._head
    for (let i = 0; i < index - 1; i++) {
      prev = prev?.next
    }
    const toRemove = prev?.next
    if (!prev || !toRemove) throw new Error('no such element')
    prev.next = toRemove.next
    if (toRemove === this.tail) {
      this.tail = prev
    }
    this.size--
    const value = toRemove.value
    toRemove.value = toRemove.next = toRemove.prev = undefined!
    return value
  }

  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    let index: number
    if (isIndex) {
      index = Number(target)
    } else {
      let node = this._head
      index = -1
      let i = 0
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
}

export class PriorityQueue<E> implements IQueue<E> {
  private heap: E[] = []
  size = 0
  comparator: Comparator<E>

  constructor(comparator: Comparator<E>, elements?: Iterable<E>) {
    this.comparator = comparator
    if (elements) {
      for (const el of elements) {
        this.enqueue(el)
      }
    }
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2)
  }

  private left(index: number) {
    return index * 2 + 1
  }

  private right(index: number) {
    return index * 2 + 2
  }

  private swap(i: number, j: number) {
    const tmp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = tmp
  }

  private siftUp(index: number) {
    let i = index
    while (i > 0) {
      const parentIndex = this.parent(i)
      if (this.comparator(this.heap[i], this.heap[parentIndex]) !== Ordering.LT) break
      this.swap(i, parentIndex)
      i = parentIndex
    }
  }

  private siftDown(index: number) {
    let i = index
    while (true) {
      const left = this.left(i)
      const right = this.right(i)
      let smallest = i

      if (left < this.size && this.comparator(this.heap[left], this.heap[smallest]) === Ordering.LT) {
        smallest = left
      }
      if (right < this.size && this.comparator(this.heap[right], this.heap[smallest]) === Ordering.LT) {
        smallest = right
      }

      if (smallest === i) break
      this.swap(i, smallest)
      i = smallest
    }
  }

  enqueue(e: E): void {
    if (e === undefined) return
    this.heap[this.size] = e
    this.size++
    this.siftUp(this.size - 1)
  }

  add(e: E): void {
    this.enqueue(e)
  }

  addAll(collection: ICollection<E>): void {
    for (const e of collection) {
      this.enqueue(e)
    }
  }

  dequeue(): E {
    if (this.size === 0) throw new Error('no such element')
    const min = this.heap[0]
    const last = this.heap.pop()!
    this.size--
    if (this.size > 0) {
      this.heap[0] = last
      this.siftDown(0)
    }
    return min
  }

  head(): E {
    if (this.size === 0) throw new Error('no such element')
    return this.heap[0]
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  clear(): void {
    this.heap = []
    this.size = 0
  }

  contains(element: E): boolean {
    if (this.comparator) {
      for (let i = 0; i < this.size; i++) {
        if (this.comparator(element, this.heap[i]) === Ordering.EQ) return true
      }
    } else {
      for (let i = 0; i < this.size; i++) {
        if (this.heap[i] === element) return true
      }
    }
    return false
  }

  private snapshotSorted(): E[] {
    const copy = this.heap.slice(0, this.size)
    copy.sort((a, b) => this.comparator(a, b))
    return copy
  }

  [Symbol.iterator](): Iterator<E> {
    const values = this.snapshotSorted()
    let index = 0
    return {
      next: () => {
        if (index >= values.length) return { done: true, value: undefined as unknown as E }
        return { done: false, value: values[index++] }
      }
    }
  }

  *reverseIterator(): Generator<E> {
    const values = this.snapshotSorted()
    for (let i = values.length - 1; i >= 0; i--) {
      yield values[i]
    }
  }

  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const values = this.snapshotSorted().sort((a, b) => comparator(a, b))
    if (cmp) {
      this.comparator = comparator
    }
    this.heap = []
    this.size = 0
    for (const value of values) {
      this.enqueue(value)
    }
  }

  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    const values = this.snapshotSorted()
    let index: number
    if (isIndex) {
      index = Number(target)
    } else if (this.comparator) {
      index = values.findIndex(value => this.comparator(value, target as E) === Ordering.EQ)
    } else {
      index = values.findIndex(value => value === target)
    }
    if (index < 0 || index >= values.length) throw new Error('no such element')
    const [removed] = values.splice(index, 1)
    if (removed === undefined) throw new Error('no such element')
    this.heap = []
    this.size = 0
    for (const value of values) {
      this.enqueue(value)
    }
    return isIndex ? removed : index
  }
}

export class Dequeue<E> implements IDequeue<E> {
  size = 0
  private _head: Node<E>
  private tail: Node<E>
  comparator: Comparator<E> = null!

  constructor(elements?: Iterable<E>) {
    if (elements) {
      for(const el of elements) {
        this.enqueue(el)
      }
    }
  }

  /**
   * O(1)
   * @param e
   */
  enqueue(e: E): void {
    if (e === undefined) return
    if (!this._head) {
      this._head = { value: e }
    } else if (!this.tail) {
      this.tail = {
        value: e,
        prev: this._head
      }
      this._head.next = this.tail
    } else {
      const newTail = {
        value: e,
        prev: this.tail
      }
      this.tail.next = newTail
      this.tail = newTail
    }
    this.size++
  }

  add(e: E): void {
    this.enqueue(e)
  }

  addAll(collection: ICollection<E>): void {
    for (let e of collection) {
      this.enqueue(e)
    }
  }

  /**
   * O(1)
   */
  dequeue(): E {
    if (this.size === 0) throw new Error('no such element')
    const head = this._head
    this._head = head!.next
    if (this._head) this._head.prev = undefined
    this.size--
    if (this.isEmpty()) this.tail = undefined
    return head!.value
  }

  /**
   * O(1)
   * @param e
   */
  push(e: E): void {
    if (e !== undefined) {
      if (!this._head) {
        this._head = { value: e }
      } else if (!this.tail) {
        this.tail = this._head
        this.tail.next = undefined
        this._head = {
          value: e,
          next: this.tail
        }
        this.tail.prev = this._head
      } else {
        const newHead = {
          value: e,
          next: this._head
        }
        this._head.prev = newHead
        this._head = newHead
      }
      this.size++
    }
  }

  /**
   * O(1)
   */
  pop(): E {
    if (this.size === 0) throw new Error('no such element')
    let currentTail = this.tail
    if (!currentTail) {
      currentTail = this._head
      this._head = undefined
    }
    if (this.size === 2) {
      currentTail = this.tail
      this.tail = this._head!.next = undefined
    }

    this.tail = currentTail!.prev
    if (this.tail) this.tail.next = undefined
    this.size--

    return currentTail!.value
  }

  /**
   * O(1)
   */
  top(): E {
    if (this.tail) return this.tail.value
    if (this._head) return this._head.value
    throw new Error('no such element')
  }

  /**
   * O(1)
   */
  head(): E {
    if (this._head) return this._head.value
    throw new Error('no such element')
  }

  /**
   * O(1)
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * O(1)
   */
  clear() {
    this._head = this.tail = undefined
    this.size = 0
  }

  /**
   * Checks if an element is contained in the Dequeue.
   * For this function to work, a comparator must be set!
   * O(size) amortized
   * @param element
   */
  contains(element: E): boolean {
    if (this.comparator) {
      for (const e of this) {
        if (this.comparator(element, e) === Ordering.EQ) return true
      }
    } else {
      for (const e of this) {
        if (e === element) return true
      }
    }
    return false
  }

  /**
   * O(size)
   */
  [Symbol.iterator](): Iterator<E> {
    let head = this._head
    return {
      next: () => {
        const _head = head
        head = _head?.next
        return {
          done: _head == undefined,
          value: _head?.value!
        }
      }
    }
  }

  /**
   * O(size)
   */
  *reverseIterator() {
    if (!this.tail && !this._head) return
    if (!this.tail) {
      yield this._head!.value
      return
    }
    let tail = this.tail
    yield tail?.value
    while (tail?.prev != undefined) {
      tail = tail.prev
      yield tail.value
    }
  }

  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const values = Array.from(this).sort((a, b) => comparator(a, b))
    this.clear()
    for (const value of values) {
      this.enqueue(value)
    }
    if (cmp) {
      this.comparator = comparator
    }
  }

  private removeAtIndex(index: number): E {
    if (index < 0 || index >= this.size) throw new Error('no such element')
    if (index === 0) return this.dequeue()
    if (index === this.size - 1) return this.pop()

    let node = this._head
    for (let i = 0; i < index; i++) {
      node = node?.next
    }
    if (!node) throw new Error('no such element')
    node.prev!.next = node.next
    node.next!.prev = node.prev
    const value = node.value
    node.value = node.next = node.prev = undefined!
    this.size--
    return value
  }

  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    let index: number
    if (isIndex) {
      index = Number(target)
    } else {
      let node = this._head
      index = -1
      let i = 0
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
}

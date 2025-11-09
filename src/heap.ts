// src/heap.ts
import {
  Comparator,
  CyclicDoublyLinkedList,
  ICollection,
  Ordering,
} from './'

export class BinaryHeap<E> implements ICollection<E> {
  private heap: E[] = []
  size = 0
  comparator: Comparator<E>

  constructor(comparator: Comparator<E>, elements?: Iterable<E>) {
    this.comparator = comparator
    if (elements) {
      for (const element of elements) {
        this.insert(element)
      }
    }
  }

  insert(element: E): void {
    if (element === undefined) return
    this.heap[this.size] = element
    this.size++
    this.siftUp(this.size - 1)
  }

  extractMin(): E {
    if (this.size === 0) throw new Error('no such element')
    const top = this.heap[0]
    const last = this.heap.pop()!
    this.size--
    if (this.size > 0) {
      this.heap[0] = last
      this.siftDown(0)
    }
    return top
  }

  peek(): E {
    if (this.size === 0) throw new Error('no such element')
    return this.heap[0]
  }

  add(element: E): void {
    this.insert(element)
  }

  addAll(collection: ICollection<E>): void {
    for (const value of collection) {
      this.insert(value)
    }
  }

  clear(): void {
    this.heap = []
    this.size = 0
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  contains(element: E): boolean {
    if (this.comparator) {
      for (let i = 0; i < this.size; i++) {
        if (this.comparator(element, this.heap[i]) === Ordering.EQ) return true
      }
      return false
    }
    for (let i = 0; i < this.size; i++) {
      if (this.heap[i] === element) return true
    }
    return false
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
      this.insert(value)
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
      this.insert(value)
    }
    return isIndex ? removed : index
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

  private snapshotSorted(): E[] {
    const copy = this.heap.slice(0, this.size)
    copy.sort((a, b) => this.comparator(a, b))
    return copy
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
}

export type FibonacciHeapNode<E> = {
  value: E
  degree: number
  marked: boolean
  left: FibonacciHeapNode<E>
  right: FibonacciHeapNode<E>
  parent?: FibonacciHeapNode<E>
  child?: FibonacciHeapNode<E>
}

/**
 * FibonacciHeap Implementation
 * The Comparator has one requirement: When the "left" value is "null" the ordering must be Ordering.GT
 * This is needed for delete to function correctly
 */
export interface IFibonacciHeap<E> extends ICollection<E> {
  rootList: FibonacciHeapNode<E>
  minNode: FibonacciHeapNode<E>
  insert(element: E): FibonacciHeapNode<E>
  contains(element: E): boolean
  delete(node: FibonacciHeapNode<E>): FibonacciHeapNode<E>
  decreaseKey(node: FibonacciHeapNode<E>, newValue: E): void
  minimum(): FibonacciHeapNode<E>
  extractMin(): FibonacciHeapNode<E>
  union(heap: IFibonacciHeap<E>): void
  extractNeighbours(node: FibonacciHeapNode<E>, includeSelf?: boolean): CyclicDoublyLinkedList<FibonacciHeapNode<E>>
  extractChildren(node: FibonacciHeapNode<E>): CyclicDoublyLinkedList<FibonacciHeapNode<E>>
}

export class FibonacciHeap<E> implements IFibonacciHeap<E> {
  rootList!: FibonacciHeapNode<E>
  minNode!: FibonacciHeapNode<E>
  size = 0
  comparator: Comparator<E>
  private readonly goldenCut = (1 + Math.sqrt(5)) / 2

  constructor(comparator: Comparator<E>, elements?: Iterable<E>) {
    this.comparator = comparator
    if (elements) {
      for (const e of elements) {
        this.insert(e)
      }
    }
  }

  /**
   * O(1)
   * @param element
   */
  insert(element: E): FibonacciHeapNode<E> {
    if (element === undefined) return undefined!
    // @ts-ignore
    const node: FibonacciHeapNode<E> = {
      value: element,
      degree: 0,
      marked: false
    }
    node.left = node
    node.right = node

    if (!this.minNode) {
      this.minNode = this.rootList = node
    } else {
      this.mergeWithRootList(node)
      if (this.comparator(node.value, this.minNode.value) === Ordering.LT) {
        this.minNode = node
      }
    }
    this.size++
    return node
  }

  contains(element: E): boolean {
    if (this.isEmpty()) return false
    for (const node of this.traverseNodes()) {
      if (this.comparator(element, node.value) === Ordering.EQ) {
        return true
      }
    }
    return false
  }

  add(e: E): FibonacciHeapNode<E> {
    return this.insert(e)
  }

  addAll(collection: ICollection<E>): void {
    for (const e of collection) {
      this.insert(e)
    }
  }

  /**
   * O(log(size)) (amortized)
   *
   * @param e
   */
  delete(e: FibonacciHeapNode<E>): FibonacciHeapNode<E> {
    this.decreaseKey(e, null!)
    return this.extractMin()
  }

  /**
   * Decreases a nodes key. When the newValue is null or undefined, node will get the new minNode
   *
   * O(1) (amortized)
   *
   * @param node
   * @param newValue
   */
  decreaseKey(node: FibonacciHeapNode<E>, newValue: E): void {
    if (!node) throw new Error('node to decrease is null!')
    if (newValue && node && this.comparator(newValue, node.value) === Ordering.GT) {
      throw new Error('new value is greater then old one')
    }
    if (typeof newValue !== 'number' && !newValue) {
      this.minNode = node
    }
    node.value = newValue
    const parent = node.parent
    if (parent && this.comparator(node.value, parent.value) === Ordering.LT) {
      this.cut(node, parent)
      this.cascadingCut(parent)
    }
    if (this.comparator(node.value, this.minNode.value) === Ordering.LT) {
      this.minNode = node
    }
  }

  minimum(): FibonacciHeapNode<E> {
    if (this.isEmpty()) throw new Error('no such element')
    return this.minNode
  }

  extractMin(): FibonacciHeapNode<E> {
    const min = this.minNode
    if (min) {
      if (min.child) {
        for (const child of this.extractChildren(min)) {
          this.mergeWithRootList(child)
          child.parent = undefined
        }
      }

      this.removeFromRootList(min)

      if (this.size === 1) {
        this.minNode = this.rootList = undefined!
      } else {
        if (this.comparator(min.left.value, min.right.value) === Ordering.LT)
          this.minNode = min.left
        else
          this.minNode = min.right
        this.consolidate()
      }

      this.size--
    } else {
      throw new Error('no such element')
    }

    return min
  }

  /**
   * O(1)
   *
   * @param heap to merge in the current one
   */
  union(heap: IFibonacciHeap<E>): void {
    if (!this.minNode) {
      this.minNode = heap.minNode
    } else {
      this.minNode = this.comparator(this.minNode.value, heap.minNode.value) === Ordering.LT
        ? this.minNode : heap.minNode
    }

    if (!this.rootList) {
      this.rootList = heap.rootList
    } else {
      const last = heap.rootList.left
      heap.rootList.left = this.rootList.left
      this.rootList.left.right = heap.rootList
      this.rootList.left = last
      this.rootList.left.right = this.rootList
    }

    this.size = this.size + heap.size
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  clear(): void {
    this.rootList = this.minNode = undefined!
    this.size = 0
  }
  extractNeighbours(node: FibonacciHeapNode<E>, includeSelf: boolean = false): CyclicDoublyLinkedList<FibonacciHeapNode<E>> {
    const list = new CyclicDoublyLinkedList<FibonacciHeapNode<E>>()
    if (!node) return list
    if (includeSelf) {
      list.add(node)
    }
    let current = node.right
    while (current && current !== node) {
      list.add(current)
      current = current.right
    }
    return list
  }

  extractChildren(node: FibonacciHeapNode<E>): CyclicDoublyLinkedList<FibonacciHeapNode<E>> {
    const list = new CyclicDoublyLinkedList<FibonacciHeapNode<E>>()
    if (!node?.child) return list
    for (const child of this.iterateSiblings(node.child)) {
      list.add(child)
    }
    return list
  }

  private cut(x: FibonacciHeapNode<E>, y: FibonacciHeapNode<E>) {
    this.removeFromChildList(y, x)
    y.degree--
    this.mergeWithRootList(x)
    x.marked = false
  }

  private cascadingCut(y: FibonacciHeapNode<E>) {
    const z = y.parent
    if (z) {
      if (!y.marked) {
        y.marked = true
      } else {
        this.cut(y, z)
        this.cascadingCut(z)
      }
    }
  }

  private addToChildList(parent: FibonacciHeapNode<E>, newChild: FibonacciHeapNode<E>) {
    if (!parent.child) {
      newChild.left = newChild.right = newChild
      parent.child = newChild
      parent.degree = 1
    } else {
      newChild.right = parent.child
      newChild.left = parent.child.left
      parent.child.left.right = newChild
      parent.child.left = newChild
      parent.degree++
    }
    newChild.parent = parent
  }

  private removeFromChildList(parent: FibonacciHeapNode<E>, node: FibonacciHeapNode<E>) {
    if (parent.degree === 0) return
    if (
      parent.degree === 1
      && node.right === node
    ) {
      parent.child = undefined
      parent.degree = 0
    } else {
      node.left.right = node.right
      node.right.left = node.left
      if (parent.child === node) {
        parent.child = node.right
      }
    }
    node.parent = undefined
    node.marked = false
  }

  private mergeWithRootList(node: FibonacciHeapNode<E>): void {
    node.right = this.rootList
    node.left = this.rootList.left
    node.parent = undefined
    this.rootList.left.right = node
    this.rootList.left = node
  }

  private removeFromRootList(node: FibonacciHeapNode<E>): void {
    if (node.parent) return
    if (node === this.rootList) {
      this.rootList = node.right !== node ? node.right : undefined!
    }
    node.left.right = node.right
    node.right.left = node.left
  }

  private consolidate() {
    const Dh = Math.floor(this.log(this.goldenCut, this.size))
    const A = new CyclicDoublyLinkedList<FibonacciHeapNode<E>>()
    for (let i = 0; i < Dh; i++) {
      A.add(null!)
    }

    const nodes = this.extractNeighbours(this.rootList, true)
    for (const w of nodes) {
      let x = w
      let d = x.degree

      while (A.get(d) != null) {
        let y = A.get(d)
        if (this.comparator(x.value, y.value) === Ordering.GT) {
          const temp = x
          x = y
          y = temp
        }
        this.heapLink(y, x)
        A.set(d, null!)
        d++
      }
      A.set(d, x)
    }

    for (let i = 0; i < A.size; i++) {
      const ai = A.get(i)
      if (ai) {
        if (this.comparator(ai.value, this.minNode.value) === Ordering.LT) {
          this.minNode = ai
        }
      }
    }
  }

  private heapLink(elementInRootList: FibonacciHeapNode<E>, newParent: FibonacciHeapNode<E>) {
    this.removeFromRootList(elementInRootList)
    this.addToChildList(newParent, elementInRootList)
    elementInRootList.marked = false
  }

  /**
   * Base conversion
   *
   * @param base
   * @param x value to be converted
   * @return {number}
   */
  private log(base: number, x: number): number {
    return Math.log(x) / Math.log(base)
  }

  private *iterateSiblings(start?: FibonacciHeapNode<E>): Generator<FibonacciHeapNode<E>> {
    if (!start) return
    let current: FibonacciHeapNode<E> | undefined = start
    let first = true
    while (current && (first || current !== start)) {
      first = false
      yield current
      current = current.right
    }
  }

  private *traverseNodes(): Generator<FibonacciHeapNode<E>> {
    if (this.isEmpty()) return
    const visited = new Set<FibonacciHeapNode<E>>()
    const stack: FibonacciHeapNode<E>[] = []

    for (const root of this.iterateSiblings(this.rootList)) {
      stack.push(root)
    }

    while (stack.length) {
      const node = stack.pop()!
      if (visited.has(node)) continue
      visited.add(node)
      yield node

      for (const child of this.iterateSiblings(node.child)) {
        stack.push(child)
      }
    }
  }

  private snapshotSortedNodes(): FibonacciHeapNode<E>[] {
    const nodes = Array.from(this.traverseNodes())
    if (!this.comparator) {
      return nodes
    }
    nodes.sort((a, b) => this.comparator(a.value, b.value))
    return nodes
  }

  private snapshotSortedValues(): E[] {
    return this.snapshotSortedNodes().map(node => node.value)
  }

  *nodeIterator() {
    for (const node of this.snapshotSortedNodes()) {
      yield node
    }
  }

  [Symbol.iterator](): Iterator<E> {
    const values = this.snapshotSortedValues()
    let index = 0
    return {
      next: () => {
        if (index < values.length) {
          return {
            done: false,
            value: values[index++]
          }
        }
        return { done: true, value: undefined as unknown as E }
      }
    }
  }

  *reverseIterator(): Generator<E> {
    const values = this.snapshotSortedValues()
    for (let i = values.length - 1; i >= 0; i--) {
      yield values[i]
    }
  }

  /**
   * This sort function changes the comparator, if one is given as parameter!
   *
   * @param cmp
   */
  sort(cmp?: Comparator<E>): void {
    const comparator = cmp || this.comparator
    if (!comparator) throw new Error('comparator must be set before sorting')
    const values = Array.from(this).sort((a, b) => comparator(a, b))
    this.clear()
    this.comparator = comparator
    for (const value of values) {
      this.insert(value)
    }
  }

  remove(target: E | number, isIndex: boolean = true): E | number {
    if (this.size === 0) throw new Error('no such element')
    const values = Array.from(this)
    let index: number
    if (isIndex) {
      index = Number(target)
    } else {
      if (this.comparator) {
        index = values.findIndex(value => this.comparator(value, target as E) === Ordering.EQ)
      } else {
        index = values.findIndex(value => value === target)
      }
    }
    if (index < 0 || index >= values.length) throw new Error('no such element')
    const [removed] = values.splice(index, 1)
    if (removed === undefined) throw new Error('no such element')
    this.clear()
    for (const value of values) {
      this.insert(value)
    }
    return isIndex ? removed : index
  }
}

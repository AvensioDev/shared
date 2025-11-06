import {
  Comparator,
  CyclicDoublyLinkedList,
  ICollection,
  Ordering,
} from './'

export type HeapNode<E> = {
  value: E
  degree: number
  marked: boolean
  left: HeapNode<E>
  right: HeapNode<E>
  parent?: HeapNode<E>
  child?: HeapNode<E>
}

/**
 * FibonacciHeap Implementation
 * The Comparator has one requirement: When the "left" value is "null" the ordering must be Ordering.GT
 * This is needed for delete to function correctly
 */
export interface IFibonacciHeap<E> extends ICollection<E> {
  rootList: HeapNode<E>
  minNode: HeapNode<E>
  insert(element: E): HeapNode<E>
  contains(element: E): boolean
  delete(node: HeapNode<E>): HeapNode<E>
  decreaseKey(node: HeapNode<E>, newValue: E): void
  minimum(): HeapNode<E>
  extractMin(): HeapNode<E>
  union(heap: IFibonacciHeap<E>): void
  extractNeighbours(node: HeapNode<E>, includeSelf?: boolean): CyclicDoublyLinkedList<HeapNode<E>>
  extractChildren(node: HeapNode<E>): CyclicDoublyLinkedList<HeapNode<E>>
}

export class FibonacciHeap<E> implements IFibonacciHeap<E> {
  rootList!: HeapNode<E>
  minNode!: HeapNode<E>
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
  insert(element: E): HeapNode<E> {
    if (element === undefined) return undefined!
    // @ts-ignore
    const node: HeapNode<E> = {
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

  add(e: E): HeapNode<E> {
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
  delete(e: HeapNode<E>): HeapNode<E> {
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
  decreaseKey(node: HeapNode<E>, newValue: E): void {
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

  /**
   * O(1)
   */
  minimum(): HeapNode<E> {
    if (this.isEmpty()) throw new Error('no such element')
    return this.minNode
  }

  /**
   * O(log(size)) (amortized)
   */
  extractMin(): HeapNode<E> {
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

  /**
   * O(1)
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * O(1)
   */
  clear(): void {
    this.rootList = this.minNode = undefined!
    this.size = 0
  }
  extractNeighbours(node: HeapNode<E>, includeSelf: boolean = false): CyclicDoublyLinkedList<HeapNode<E>> {
    const list = new CyclicDoublyLinkedList<HeapNode<E>>()
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

  extractChildren(node: HeapNode<E>): CyclicDoublyLinkedList<HeapNode<E>> {
    const list = new CyclicDoublyLinkedList<HeapNode<E>>()
    if (!node?.child) return list
    for (const child of this.iterateSiblings(node.child)) {
      list.add(child)
    }
    return list
  }

  private cut(x: HeapNode<E>, y: HeapNode<E>) {
    this.removeFromChildList(y, x)
    y.degree--
    this.mergeWithRootList(x)
    x.marked = false
  }

  private cascadingCut(y: HeapNode<E>) {
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

  private addToChildList(parent: HeapNode<E>, newChild: HeapNode<E>) {
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

  private removeFromChildList(parent: HeapNode<E>, node: HeapNode<E>) {
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

  private mergeWithRootList(node: HeapNode<E>): void {
    node.right = this.rootList
    node.left = this.rootList.left
    node.parent = undefined
    this.rootList.left.right = node
    this.rootList.left = node
  }

  private removeFromRootList(node: HeapNode<E>): void {
    if (node.parent) return
    if (node === this.rootList) {
      this.rootList = node.right !== node ? node.right : undefined!
    }
    node.left.right = node.right
    node.right.left = node.left
  }

  private consolidate() {
    const Dh = Math.floor(this.log(this.goldenCut, this.size))
    const A = new CyclicDoublyLinkedList<HeapNode<E>>()
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

  private heapLink(elementInRootList: HeapNode<E>, newParent: HeapNode<E>) {
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

  private *iterateSiblings(start?: HeapNode<E>): Generator<HeapNode<E>> {
    if (!start) return
    let current: HeapNode<E> | undefined = start
    let first = true
    while (current && (first || current !== start)) {
      first = false
      yield current
      current = current.right
    }
  }

  private *traverseNodes(): Generator<HeapNode<E>> {
    if (this.isEmpty()) return
    const visited = new Set<HeapNode<E>>()
    const stack: HeapNode<E>[] = []

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

  private snapshotSortedNodes(): HeapNode<E>[] {
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

  /**
   * O(log(size)*size + size*3)
   */
  *nodeIterator() {
    for (const node of this.snapshotSortedNodes()) {
      yield node
    }
  }

  /**
   * O(heap.size*3 + log(heap.size))
   */
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

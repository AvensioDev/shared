import { Comparator, Ordering } from './'

type TreeNode<T> = {
  value: T
  left?: TreeNode<T>
  right?: TreeNode<T>
}

export type TraverseOrder = 'in' | 'pre' | 'post'

export class BinarySearchTree<T> implements Iterable<T> {
  private root?: TreeNode<T>
  private _size = 0

  constructor(public comparator: Comparator<T>, elements?: Iterable<T>) {
    if (elements) {
      for (const value of elements) {
        this.insert(value)
      }
    }
  }

  get size(): number {
    return this._size
  }

  insert(value: T): void {
    if (value === undefined) return
    const node: TreeNode<T> = { value }
    if (!this.root) {
      this.root = node
      this._size++
      return
    }

    let current = this.root
    while (true) {
      const cmp = this.comparator(value, current.value)
      if (cmp === Ordering.LT) {
        if (!current.left) {
          current.left = node
          break
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = node
          break
        }
        current = current.right
      }
    }
    this._size++
  }

  find(value: T): T | null {
    let current = this.root
    while (current) {
      const cmp = this.comparator(value, current.value)
      if (cmp === Ordering.EQ) return current.value
      current = cmp === Ordering.LT ? current.left : current.right
    }
    return null
  }

  delete(value: T): boolean {
    const result = this.deleteNode(this.root, value)
    this.root = result.node
    if (result.removed) {
      this._size--
    }
    return result.removed
  }

  traverse(order: TraverseOrder = 'in'): T[] {
    const output: T[] = []
    this.traverseNode(this.root, order, output)
    return output
  }

  min(): T | null {
    let current = this.root
    if (!current) return null
    while (current.left) {
      current = current.left
    }
    return current.value
  }

  max(): T | null {
    let current = this.root
    if (!current) return null
    while (current.right) {
      current = current.right
    }
    return current.value
  }

  metrics(): { height: number, nodeCount: number } {
    return {
      height: this.computeHeight(this.root),
      nodeCount: this._size,
    }
  }

  [Symbol.iterator](): Iterator<T> {
    const stack: TreeNode<T>[] = []
    let current = this.root
    return {
      next: (): IteratorResult<T> => {
        while (current) {
          stack.push(current)
          current = current.left
        }
        if (stack.length === 0) {
          return { done: true, value: undefined as unknown as T }
        }
        const node = stack.pop()!
        const value = node.value
        current = node.right
        return { done: false, value }
      }
    }
  }

  private deleteNode(node: TreeNode<T> | undefined, value: T): { node?: TreeNode<T>, removed: boolean } {
    if (!node) return { node: undefined, removed: false }
    const cmp = this.comparator(value, node.value)
    if (cmp === Ordering.LT) {
      const result = this.deleteNode(node.left, value)
      node.left = result.node
      return { node, removed: result.removed }
    }
    if (cmp === Ordering.GT) {
      const result = this.deleteNode(node.right, value)
      node.right = result.node
      return { node, removed: result.removed }
    }

    // node found
    if (!node.left && !node.right) {
      return { node: undefined, removed: true }
    }
    if (!node.left) {
      return { node: node.right, removed: true }
    }
    if (!node.right) {
      return { node: node.left, removed: true }
    }

    // two children -> replace with inorder successor
    let successorParent = node
    let successor = node.right
    while (successor!.left) {
      successorParent = successor!
      successor = successor!.left
    }
    node.value = successor!.value
    if (successorParent.left === successor) {
      successorParent.left = successor!.right
    } else {
      successorParent.right = successor!.right
    }
    return { node, removed: true }
  }

  private traverseNode(node: TreeNode<T> | undefined, order: TraverseOrder, out: T[]) {
    if (!node) return
    if (order === 'pre') out.push(node.value)
    this.traverseNode(node.left, order, out)
    if (order === 'in') out.push(node.value)
    this.traverseNode(node.right, order, out)
    if (order === 'post') out.push(node.value)
  }

  private computeHeight(node: TreeNode<T> | undefined): number {
    if (!node) return 0
    return 1 + Math.max(this.computeHeight(node.left), this.computeHeight(node.right))
  }
}

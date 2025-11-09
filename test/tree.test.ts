import { beforeEach, describe, expect, it } from 'vitest'
import { BinarySearchTree, numberComparatorASC } from '../src'

describe('BinarySearchTree', () => {
  let tree: BinarySearchTree<number>

  beforeEach(() => {
    tree = new BinarySearchTree(numberComparatorASC)
  })

  function seed() {
    [5, 3, 7, 2, 4, 6, 8].forEach(value => tree.insert(value))
  }

  it('inserts values and traverses in-order by default', () => {
    seed()
    expect(tree.traverse()).toEqual([2, 3, 4, 5, 6, 7, 8])
    tree.insert(1)
    expect([...tree]).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('supports preorder and postorder traversals', () => {
    seed()
    expect(tree.traverse('pre')).toEqual([5, 3, 2, 4, 7, 6, 8])
    expect(tree.traverse('post')).toEqual([2, 4, 3, 6, 8, 7, 5])
  })

  it('finds values and returns null for missing ones', () => {
    seed()
    expect(tree.find(4)).toBe(4)
    expect(tree.find(9)).toBeNull()
  })

  it('computes min and max', () => {
    seed()
    expect(tree.min()).toBe(2)
    expect(tree.max()).toBe(8)
    tree.insert(10)
    tree.insert(0)
    expect(tree.min()).toBe(0)
    expect(tree.max()).toBe(10)
  })

  it('deletes leaves, nodes with one child, and nodes with two children', () => {
    seed()
    expect(tree.delete(2)).toBe(true) // leaf
    expect(tree.traverse()).toEqual([3, 4, 5, 6, 7, 8])
    expect(tree.delete(7)).toBe(true) // two children
    expect(tree.traverse()).toEqual([3, 4, 5, 6, 8])
    expect(tree.delete(5)).toBe(true) // root
    expect(tree.traverse()).toEqual([3, 4, 6, 8])
    expect(tree.delete(42)).toBe(false)
  })

  it('reports metrics and size', () => {
    seed()
    const metrics = tree.metrics()
    expect(metrics).toEqual({ height: 3, nodeCount: 7 })
    tree.insert(9)
    expect(tree.metrics()).toEqual({ height: 4, nodeCount: 8 })
    tree.delete(9)
    tree.delete(8)
    expect(tree.metrics()).toEqual({ height: 3, nodeCount: 6 })
  })
})

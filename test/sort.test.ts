import {describe, expect, it} from 'vitest'
import {
  DoublyLinkedList,
  heapSort,
  LinkedQueue,
  numberComparatorASC,
  numberComparatorDESC,
  Queue,
  quicksort
} from '../src'

function createList() {
  const list = new DoublyLinkedList<number>()
  list.add(-1)
  list.add(2)
  list.add(-4)
  list.add(1)
  list.add(0)
  return list
}

function listChecksASC(l: number[]) {
  expect(l[0]).toBe(-4)
  expect(l[1]).toBe(-1)
  expect(l[2]).toBe(0)
  expect(l[3]).toBe(1)
  expect(l[4]).toBe(2)
}

function listChecksDESC(l: number[]) {
  expect(l[0]).toBe(2)
  expect(l[1]).toBe(1)
  expect(l[2]).toBe(0)
  expect(l[3]).toBe(-1)
  expect(l[4]).toBe(-4)
}

describe('sorting algorithm tests', () => {
  describe('quicksort', () => {
    it('should sort a number doubly linked list', () => {
      const doublyLinkedList = new DoublyLinkedList<number>()
      doublyLinkedList.comparator = numberComparatorASC
      doublyLinkedList.add(1)
      doublyLinkedList.add(3)
      doublyLinkedList.add(5)
      doublyLinkedList.add(-1)
      doublyLinkedList.add(2)
      doublyLinkedList.add(4)
      const sortedList = quicksort(doublyLinkedList, numberComparatorASC, () => new DoublyLinkedList<number>()) as DoublyLinkedList<number>
      expect(sortedList.size).toBe(6)
      expect(sortedList.get(0)).toBe(-1)
      expect(sortedList.get(1)).toBe(1)
      expect(sortedList.get(2)).toBe(2)
      expect(sortedList.get(3)).toBe(3)
      expect(sortedList.get(4)).toBe(4)
      expect(sortedList.get(5)).toBe(5)
    })

    it('should sort a linked queue ASC', () => {
      const linkedQueue = new LinkedQueue([1,4,5,3,2], numberComparatorASC)
      linkedQueue.sort()
      expect([...linkedQueue]).toEqual([1,2,3,4,5])
    })

    it('should sort a linked queue DESC', () => {
      const linkedQueue = new LinkedQueue([1,4,5,3,2], numberComparatorDESC)
      linkedQueue.sort()
      expect([...linkedQueue]).toEqual([5,4,3,2,1])
    })

    it('should sort a queue ASC', () => {
      const queue = new Queue([1,4,5,3,2], numberComparatorASC)
      queue.sort()
      expect([...queue]).toEqual([1,2,3,4,5])
    })

    it('should sort a queue DESC', () => {
      const queue = new Queue([1,4,5,3,2], numberComparatorDESC)
      expect([...queue]).toEqual([5,4,3,2,1])
    })
  })

  describe('heapsort', () => {
    it('should sort doubly linked list ascending', () => {
      const list = createList()
      const l = [...heapSort(list, numberComparatorASC)]
      listChecksASC(l)
    })
    it('should sort doubly linked list descending', () => {
      const list = createList()
      const l = [...heapSort(list, numberComparatorDESC)]
      listChecksDESC(l)
    })
  })

})

import { beforeEach, describe, expect, it } from 'vitest'
import {
  Comparator,
  CyclicDoublyLinkedList,
  Dequeue,
  DoublyLinkedList,
  IDequeue,
  IQueue,
  LinkedList,
  LinkedQueue,
  LinkedStack,
  numberComparatorASC,
  numberComparatorDESC,
  Ordering,
  PriorityQueue,
  Queue,
  Stack,
  List } from '../src'

type QueueType = (new (elements: Iterable<number>) => IQueue<number>) | (new (comparator: Comparator<number>, elements?: Iterable<number>) => IQueue<number>)
function queueTests(queue: IQueue<number>, queueType: QueueType, priorityQueueTests = false) {
  describe('common queue tests', () => {
    beforeEach(() => {
      queue.clear()
    })
    describe('construct new Queue', () => {
      it('from native Array', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, [1, 2, 3])
        } else {
          // @ts-ignore
          _queue = new queueType([1, 2, 3])
        }
        expect(_queue.size).toBe(3)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.dequeue()).toBe(3)
        expect(_queue.size).toBe(0)
      })
      it('from native Set', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new Set([-1, 1, 0]))
        } else {
          // @ts-ignore
          _queue = new queueType(new Set([-1, 0, 1]))
        }

        expect(_queue.size).toBe(3)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.size).toBe(0)
      })
      it('from Queue', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new Queue([1, -1, 0, 2]))
        } else {
          // @ts-ignore
          _queue = new queueType(new Queue([-1, 0, 1, 2]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
      it('from LinkedQueue', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new LinkedQueue([0, 1, 2, -1]))
        } else {
          // @ts-ignore
          _queue = new queueType(new LinkedQueue([-1, 0, 1, 2]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
      it('from PriorityQueue', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new PriorityQueue(numberComparatorASC, [0, 2, -1, 1]))
        } else {
          // @ts-ignore
          _queue = new queueType(new PriorityQueue(numberComparatorASC, [2, 0, -1, 1]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
      it('from Dequeue', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new Dequeue([0, 2, -1, 1]))
        } else {
          // @ts-ignore
          _queue = new queueType(new Dequeue([-1, 0, 1, 2]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
      it('from Stack', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new Stack([0, 2, -1, 1]))
        } else {
          // @ts-ignore
          _queue = new queueType(new Stack([2, 1, 0, -1]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
      it('from LinkedStack', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new LinkedStack([0, 2, -1, 1]))
        } else {
          // @ts-ignore
          _queue = new queueType(new LinkedStack([2, 1, 0, -1]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
      it('from List', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new List([0, 2, -1, 1]))
        } else {
          // @ts-ignore
          _queue = new queueType(new List([-1, 0, 1, 2]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
      it('from LinkedList', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new LinkedList([0, 2, -1, 1]))
        } else {
          // @ts-ignore
          _queue = new queueType(new LinkedList([-1, 0, 1, 2]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
      it('from DoublyLinkedList', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new DoublyLinkedList([0, 2, -1, 1]))
        } else {
          // @ts-ignore
          _queue = new queueType(new DoublyLinkedList([-1, 0, 1, 2]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
      it('from CyclicDoublyLinkedList', () => {
        let _queue
        if (priorityQueueTests) {
          // @ts-ignore
          _queue = new queueType(numberComparatorASC, new CyclicDoublyLinkedList([0, 2, -1, 1]))
        } else {
          // @ts-ignore
          _queue = new queueType(new CyclicDoublyLinkedList([-1, 0, 1, 2]))
        }

        expect(_queue.size).toBe(4)
        expect(_queue.dequeue()).toBe(-1)
        expect(_queue.dequeue()).toBe(0)
        expect(_queue.dequeue()).toBe(1)
        expect(_queue.dequeue()).toBe(2)
        expect(_queue.size).toBe(0)
      })
    })
    describe('add elements', () => {
      it('adds elements', () => {
        expect(queue.isEmpty()).toBeTruthy()
        expect(() => queue.dequeue()).toThrowError('no such element')

        queue.enqueue(-1)
        queue.enqueue(0)
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)

        expect(queue.dequeue()).toBe(-1)
        expect(queue.head()).toBe(0)
        expect(queue.dequeue()).toBe(0)
        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)
        expect(queue.dequeue()).toBe(3)
        expect(queue.dequeue()).toBe(4)
        expect(() => queue.dequeue()).toThrowError('no such element')

        queue.enqueue(-100)
        queue.enqueue(-10)
        queue.enqueue(-1)

        expect(queue.dequeue()).toBe(-100)
        expect(queue.dequeue()).toBe(-10)
        expect(queue.dequeue()).toBe(-1)
        expect(() => queue.dequeue()).toThrowError('no such element')

        queue.enqueue(1)
        queue.enqueue(10)
        queue.enqueue(100)

        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(10)
        expect(queue.dequeue()).toBe(100)
        expect(() => queue.dequeue()).toThrowError('no such element')
      })
      it('should add "null" elements', () => {
        queue.enqueue(null!)
        expect(queue.size).toBe(1)
        expect(queue.head()).toBeNull()
        expect(queue.dequeue()).toBeNull()
        expect(queue.size).toBe(0)

        queue.enqueue(null!)
        queue.enqueue(null!)
        expect(queue.size).toBe(2)
        expect(queue.head()).toBeNull()
        expect(queue.dequeue()).toBeNull()
        expect(queue.dequeue()).toBeNull()
        expect(queue.size).toBe(0)

        queue.enqueue(null!)
        queue.enqueue(null!)
        queue.enqueue(null!)
        expect(queue.size).toBe(3)
        expect(queue.head()).toBeNull()
        expect(queue.dequeue()).toBeNull()
        expect(queue.dequeue()).toBeNull()
        expect(queue.dequeue()).toBeNull()
        expect(queue.size).toBe(0)
      })
      it('should not add "undefined" elements', () => {
        queue.enqueue(undefined!)
        expect(queue.size).toBe(0)
        expect(() => queue.head()).toThrowError('no such element')
      })
    })
    it('gets elements', () => {
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      const results = [1, 2, 3]
      for (const number of queue) {
        expect(number).toBe(results.shift())
      }
      queue.clear()

      expect(() => queue.head()).toThrowError('no such element')
    })
    it('has correct size', () => {
      expect(queue.isEmpty()).toBeTruthy()
      queue.enqueue(1)
      expect(queue.size).toBe(1)
      queue.enqueue(2)
      expect(queue.size).toBe(2)
      queue.enqueue(3)
      expect(queue.size).toBe(3)
      queue.dequeue()
      expect(queue.size).toBe(2)
      queue.dequeue()
      expect(queue.size).toBe(1)
      queue.head()
      expect(queue.size).toBe(1)
      queue.dequeue()
      expect(queue.size).toBe(0)
      expect(() => queue.dequeue()).toThrowError('no such element')

      queue.enqueue(-1)
      queue.enqueue(0)
      queue.enqueue(1)
      expect(queue.size).toBe(3)
      queue.dequeue()
      expect(queue.size).toBe(2)
      queue.head()
      expect(queue.size).toBe(2)
      queue.dequeue()
      expect(queue.size).toBe(1)
      queue.dequeue()
      expect(queue.size).toBe(0)
      expect(() => queue.dequeue()).toThrowError('no such element')
    })
    it('clears the queue', () => {
      expect(queue.isEmpty()).toBeTruthy()
      expect(() => queue.dequeue()).toThrowError('no such element')

      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)

      expect(queue.size).toBe(3)
      queue.clear()
      expect(queue.isEmpty()).toBeTruthy()
      expect(() => queue.dequeue()).toThrowError('no such element')
    })
  })

  describe('reverse Iterator tests', () => {
    it('should correctly reverse iterate a queue', () => {
      const queue = new Queue([1,2,3,4])
      const numbers = [...queue.reverseIterator()]
      expect(numbers).toEqual([4,3,2,1])
    });
    it('should correctly reverse iterate a linked queue', () => {
      const queue = new LinkedQueue([1,2,3,4])
      const numbers = [...queue.reverseIterator()]
      expect(numbers).toEqual([4,3,2,1])
    });
    it('should correctly reverse iterate a priority queue', () => {
      const queue = new PriorityQueue(numberComparatorASC, [1,2,3,4])
      const numbers = [...queue.reverseIterator()]
      expect(numbers).toEqual([4,3,2,1])
    });
    it('should correctly reverse iterate a dequeue', () => {
      const queue = new Dequeue([1,2,3,4])
      const numbers = [...queue.reverseIterator()]
      expect(numbers).toEqual([4,3,2,1])
    });
  })
}

function iteratorTest(queue: IQueue<number> | IDequeue<number>) {
  it('iterates through queue FIFO', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.size).toBe(3)
    let results = [1, 2, 3]
    for (const number of queue) {
      expect(number).toBe(results.shift())
    }
    expect(queue.size).toBe(3)
    expect(results).toHaveLength(0)
    results = [1, 2, 3]
    for (const number of queue) {
      expect(number).toBe(results.shift())
    }
    expect(queue.size).toBe(3)
    expect(results).toHaveLength(0)

    queue.clear()
    let count = 0
    for (let {} of queue) {
      count++
    }
    expect(count).toBe(0)

    if (queue instanceof Dequeue) {
      queue.clear()
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      results = [1, 2, 3]
      for (const number of queue.reverseIterator()) {
        expect(number).toBe(results.pop())
      }
      expect(queue.size).toBe(3)
      expect(results).toHaveLength(0)
      queue.clear()

      let count = 0
      for (let {} of queue.reverseIterator()) {
        count++
      }
      expect(count).toBe(0)

      results = [1]
      queue.push(1)
      for (const number of queue.reverseIterator()) {
        expect(number).toBe(results.pop())
      }
      expect(queue.size).toBe(1)
      expect(results).toHaveLength(0)
    }
  })
}

describe('queues', () => {
  describe('queue backed by native array', () => {
    const queue = new Queue<number>()
    queueTests(queue, Queue<number>)
    iteratorTest(queue)
  })
  describe('linked queue', () => {
    const queue = new LinkedQueue<number>()
    queueTests(queue, LinkedQueue<number>)
    iteratorTest(queue)
  })
  describe('priority queue', () => {
    const queue = new PriorityQueue((n1: number, n2: number) => {
      if (n1 === n2) return Ordering.EQ
      else if (n1 < n2) return Ordering.LT
      return Ordering.GT
    })
    queueTests(queue, PriorityQueue<number>, true)
    iteratorTest(queue)
  })
  describe('dequeue', () => {
    const dequeue = new Dequeue<number>()
    queueTests(dequeue, Dequeue<number>)
    iteratorTest(dequeue)
    beforeEach(() => {
      dequeue.clear()
    })
    it('should enqueue, push, dequeue and pop elements to and from the dequeu', () => {
      dequeue.push(-1)
      dequeue.push(0)
      dequeue.push(1)
      expect(dequeue.size).toBe(3)
      expect(dequeue.top()).toBe(-1)
      expect(dequeue.dequeue()).toBe(1)
      expect(dequeue.top()).toBe(-1)
      expect(dequeue.pop()).toBe(-1)
      expect(dequeue.top()).toBe(0)
      expect(dequeue.head()).toBe(0)
      expect(dequeue.size).toBe(1)
      expect(dequeue.dequeue()).toBe(0)
      expect(dequeue.size).toBe(0)
    })
    it('should push and pop elements to and from the dequeue', () => {
      dequeue.push(-1)
      dequeue.push(0)
      dequeue.push(1)
      expect(dequeue.size).toBe(3)
      expect(dequeue.top()).toBe(-1)
      expect(dequeue.pop()).toBe(-1)
      expect(dequeue.top()).toBe(0)
      expect(dequeue.pop()).toBe(0)
      expect(dequeue.top()).toBe(1)
      expect(dequeue.size).toBe(1)
      expect(dequeue.pop()).toBe(1)
      expect(dequeue.size).toBe(0)
      dequeue.clear()

      dequeue.push(1)
      expect(dequeue.size).toBe(1)
      expect(dequeue.top()).toBe(1)
      expect(dequeue.pop()).toBe(1)
      expect(dequeue.size).toBe(0)

      expect(() => dequeue.top()).toThrowError('no such element')
      expect(() => dequeue.head()).toThrowError('no such element')
    })
    it('should peek the top and head elements', () => {
      dequeue.enqueue(-10)
      dequeue.enqueue(0)
      dequeue.enqueue(10)
      expect(dequeue.size).toBe(3)

      expect(dequeue.head()).toBe(-10)
      expect(dequeue.top()).toBe(10)
      expect(dequeue.pop()).toBe(10)

      expect(dequeue.head()).toBe(-10)
      expect(dequeue.top()).toBe(0)
      expect(dequeue.pop()).toBe(0)

      expect(dequeue.head()).toBe(-10)
      expect(dequeue.top()).toBe(-10)
      expect(dequeue.pop()).toBe(-10)
      expect(() => dequeue.pop()).toThrowError('no such element')
      expect(() => dequeue.dequeue()).toThrowError('no such element')
      expect(dequeue.size).toBe(0)
    })
    it('contains elements', () => {
      dequeue.enqueue(-2)
      dequeue.enqueue(1)
      dequeue.enqueue(2)
      dequeue.enqueue(3)
      dequeue.enqueue(-1)
      dequeue.enqueue(0)
      dequeue.comparator = numberComparatorASC
      expect(dequeue.contains(-3)).toBeFalsy()
      expect(dequeue.contains(-2)).toBeTruthy()
      expect(dequeue.contains(-1)).toBeTruthy()
      expect(dequeue.contains(0)).toBeTruthy()
      expect(dequeue.contains(1)).toBeTruthy()
      expect(dequeue.contains(2)).toBeTruthy()
      expect(dequeue.contains(3)).toBeTruthy()
      expect(dequeue.contains(4)).toBeFalsy()
    })
  })
})

describe('Dequeue coverage', () => {
  it('covers head/tail operations, comparators, and removals', () => {
    const dequeue = new Dequeue<number>()
    dequeue.enqueue(1)
    dequeue.enqueue(2)
    dequeue.enqueue(3)

    expect(dequeue.dequeue()).toBe(1)
    dequeue.push(0)
    expect(dequeue.pop()).toBe(3)

    expect(dequeue.head()).toBe(0)
    expect(dequeue.top()).toBe(2)

    dequeue.comparator = numberComparatorASC
    expect(dequeue.contains(2)).toBe(true)

    dequeue.enqueue(5)
    const snapshot = Array.from(dequeue)
    expect(snapshot).toEqual([0, 2, 5])
    expect(dequeue.remove(5, false)).toBe(snapshot.indexOf(5))
    expect(Array.from(dequeue.reverseIterator())).toEqual([2, 0])

    dequeue.clear()
    dequeue.enqueue(7)
    expect(Array.from(dequeue.reverseIterator())).toEqual([7])
  })

  it('removes from both ends using indices', () => {
    const dequeue = new Dequeue<number>()
    dequeue.enqueue(1)
    dequeue.enqueue(2)
    dequeue.enqueue(3)

    expect(dequeue.remove(0)).toBe(1)
    expect(dequeue.remove(dequeue.size - 1)).toBe(3)
    expect(dequeue.remove(0)).toBe(2)
    expect(() => dequeue.remove(0)).toThrow('no such element')
  })
})

describe('Queue coverage', () => {
  it('compacts storage and removes values by comparator', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)

    queue.dequeue()
    queue.dequeue()
    queue.enqueue(5)

    queue.comparator = numberComparatorASC
    const snapshot = Array.from(queue)
    expect(snapshot).toEqual([3, 4, 5])
    expect(queue.contains(5)).toBe(true)

    const valueIndex = snapshot.indexOf(5)
    expect(queue.remove(5, false)).toBe(valueIndex)
    expect(Array.from(queue)).toEqual([3, 4])

    queue.sort(numberComparatorDESC)
    expect(queue.comparator).toBe(numberComparatorDESC)
    expect(Array.from(queue)).toEqual([4, 3])
  })

  it('throws meaningful errors for invalid operations', () => {
    const queue = new Queue<number>()
    expect(() => queue.dequeue()).toThrow('no such element')
    queue.enqueue(1)
    expect(() => queue.remove(2)).toThrow('no such element')
    expect(() => queue.sort()).toThrow('comparator must be set before sorting')
  })

  it('supports addAll, clear, and non-comparator contains', () => {
    const source = new Queue<number>()
    source.enqueue(7)
    source.enqueue(8)

    const queue = new Queue<number>()
    queue.addAll(source)
    expect(queue.contains(7)).toBe(true)
    expect(queue.head()).toBe(7)
    expect(queue.dequeue()).toBe(7)
    expect(queue.contains(9)).toBe(false)
    queue.clear()
    expect(queue.isEmpty()).toBe(true)
    expect(() => queue.head()).toThrow('no such element')
  })
})

describe('LinkedQueue coverage', () => {
  it('iterates in both directions and removes by value', () => {
    const queue = new LinkedQueue<number>()
    for (const value of [1, 2, 3, 4]) queue.enqueue(value)

    queue.comparator = numberComparatorASC
    expect(queue.contains(3)).toBe(true)
    expect(Array.from(queue.reverseIterator())).toEqual([4, 3, 2, 1])

    expect(queue.remove(3, false)).toBe(2)
    expect(Array.from(queue)).toEqual([1, 2, 4])

    queue.enqueue(0)
    queue.sort(numberComparatorDESC)
    expect(Array.from(queue)).toEqual([4, 2, 1, 0])
  })

  it('updates tail on removal and handles errors', () => {
    const queue = new LinkedQueue<number>()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.remove(2)).toBe(3)
    queue.enqueue(4)
    expect(Array.from(queue)).toEqual([1, 2, 4])
    expect(() => queue.remove(5, false)).toThrow('no such element')
    queue.clear()
    expect(queue.isEmpty()).toBe(true)
  })
})

describe('PriorityQueue coverage', () => {
  it('supports iterator order and removal flows', () => {
    const queue = new PriorityQueue<number>(numberComparatorASC, [4, 1, 3, 2])

    expect(Array.from(queue)).toEqual([1, 2, 3, 4])
    expect(Array.from(queue.reverseIterator())).toEqual([4, 3, 2, 1])

    const valuesBefore = Array.from(queue)
    expect(queue.remove(1)).toBe(valuesBefore[1])

    const valuesBeforeValueRemoval = Array.from(queue)
    const valueIndex = valuesBeforeValueRemoval.indexOf(3)
    expect(queue.remove(3, false)).toBe(valueIndex)

    queue.add(5)
    expect(() => queue.remove(99, false)).toThrow('no such element')

    queue.sort(numberComparatorDESC)
    expect(queue.comparator).toBe(numberComparatorDESC)
    expect(Array.from(queue)).toEqual([5, 4, 1])
    expect(Array.from(queue.reverseIterator())).toEqual([1, 4, 5])
  })
})

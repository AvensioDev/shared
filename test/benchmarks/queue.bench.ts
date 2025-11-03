import { describe } from 'vitest'
import {
  IQueue,
  ICollection,
} from '../../src'
import {
  fillCollection,
  benchmark,
  QUEUE_MAP,
} from './utils'

describe('enqueue', () => {
  let value = 0

  function queueEnqueueTest(queue: IQueue<number>) {
    queue.enqueue(++value)
  }

  function setup(collection: ICollection<number>) {
    collection.clear()
  }

  for (let key in QUEUE_MAP) {
    benchmark(key, QUEUE_MAP[key], setup, queueEnqueueTest)
  }
})

describe('dequeue', () => {
  function queueDequeueTest(queue: IQueue<number>) {
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in QUEUE_MAP) {
    benchmark(key, QUEUE_MAP[key], setup, queueDequeueTest)
  }
})

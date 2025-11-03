import { describe } from 'vitest'
import {
  numberComparatorASC,
  ICollection,
} from '../../src'
import {
  fillCollection,
  DATA_STRUCTURES_MAP,
  benchmark,
  STACK_MAP,
  QUEUE_MAP,
  dequeueTest,
  popTest,
  removeTest,
} from './utils'

const OPS = 256

describe('add/enqueue/push', () => {
  function addTest(collection: ICollection<number>) {
    for (let i = 0; i < OPS; i++) {
      collection.add((i % 64) + 1)
    }
    collection.clear()
  }

  function setup(collection: ICollection<number>) {}

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(key + (key.includes('Queue') || key.includes('Dequeue') ? ' enqueue' : (key.includes('Stack')) ? ' push' : ' add' ), DATA_STRUCTURES_MAP[key], setup, addTest)
  }
})

describe('contains', () => {
  function containsTest(collection: ICollection<number>) {
    for (let i = 0; i < OPS; i++) {
      collection.contains((i % 64) + 1)
    }
  }

  function setup(collection: ICollection<number>) {
    collection.comparator = numberComparatorASC
    fillCollection(collection)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(key, DATA_STRUCTURES_MAP[key], setup, containsTest)
  }
})

describe('sort', () => {
  function sortTest(collection: ICollection<number>) {
    collection.sort(numberComparatorASC)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    if (key === 'PriorityQueue') continue
    benchmark(key, DATA_STRUCTURES_MAP[key], setup, sortTest)
  }
})

describe('iterate', () => {
  function iterateTest(collection: ICollection<number>) {
    for (let i = 0; i < OPS; i++) {
      for (const _ of collection) {}
    }
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(key, DATA_STRUCTURES_MAP[key], setup, iterateTest)
  }
})

describe('reverse iterate', () => {
  function reverseIterateTest(collection: ICollection<number>) {
    for (let i = 0; i < OPS; i++) {
      for (const _ of collection.reverseIterator()) {}
    }
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(key, DATA_STRUCTURES_MAP[key], setup, reverseIterateTest)
  }
})

describe('clear', () => {
  function clearTest(collection: ICollection<number>) {
    for (let i = 0; i < OPS; i++) {
      collection.clear()
      if (i < OPS - 1) fillCollection(collection)
    }
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(key, DATA_STRUCTURES_MAP[key], setup, clearTest)
  }
})

describe('isEmpty', () => {
  function isEmptyTest(collection: ICollection<number>) {
    for (let i = 0; i < OPS; i++) {
      collection.isEmpty()
    }
  }
  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(key, DATA_STRUCTURES_MAP[key], setup, isEmptyTest)
  }
})

describe('remove', () => {
  function removeTest(collection: ICollection<number>) {
    for (let i = 0; i < OPS; i++) {
      if (collection.size === 0) fillCollection(collection)
      const removed = collection.remove(collection.size - 1)
      if (typeof removed === 'number') {
        collection.add(removed)
      }
    }
  }
  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(key, DATA_STRUCTURES_MAP[key], setup, removeTest)
  }
})

describe('dequeue/pop/remove', () => {
  function _setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in QUEUE_MAP) {
    benchmark(`${key} dequeue`, QUEUE_MAP[key], _setup, dequeueTest)
  }

  for (let key in STACK_MAP) {
    benchmark(`${key} pop`, STACK_MAP[key], _setup, popTest)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(`${key} remove`, DATA_STRUCTURES_MAP[key], _setup, removeTest)
  }
})

describe('dequeue/pop', () => {
  function _setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in QUEUE_MAP) {
    benchmark(`${key} dequeue`, QUEUE_MAP[key], _setup, dequeueTest)
  }

  for (let key in STACK_MAP) {
    benchmark(`${key} pop`, STACK_MAP[key], _setup, popTest)
  }
})

describe('dequeue/remove', () => {
  function _setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(`${key} remove`, DATA_STRUCTURES_MAP[key], _setup, removeTest)
  }

  for (let key in QUEUE_MAP) {
    benchmark(`${key} dequeue`, QUEUE_MAP[key], _setup, dequeueTest)
  }
})

describe('pop/remove', () => {
  function _setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in DATA_STRUCTURES_MAP) {
    benchmark(`${key} remove`, DATA_STRUCTURES_MAP[key], _setup, removeTest)
  }

  for (let key in STACK_MAP) {
    benchmark(`${key} pop`, STACK_MAP[key], _setup, popTest)
  }
})

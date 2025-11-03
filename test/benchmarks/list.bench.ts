import { describe } from 'vitest'
import {
  IList,
  ICollection,
} from '../../src'
import {
  fillCollection,
  benchmark,
  LIST_MAP,
} from './utils'

describe('remove', () => {
  function listRemoveTest(list: IList<number>) {
    list.remove(4)
    list.remove(2)
    list.remove(0)
    list.remove(1)
    list.remove(0)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listRemoveTest)
  }
})

describe('get', () => {
  function listGetTest(list: IList<number>) {
    list.get(0)
    list.get(1)
    list.get(2)
    list.get(3)
    list.get(4)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listGetTest)
  }
})



describe('slice', () => {
  function listSliceTest(list: IList<number>) {
    list.slice(0, 0)
    list.slice(1, 1)
    list.slice(3, 2)
    list.slice(0, 4)
    list.slice(2, 1)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listSliceTest)
  }
})

describe('splice', () => {
  function listSpliceTest(list: IList<number>) {
    list.splice(3, 2)
    list.splice(1, 1)
    list.splice(0, 1)
    list.splice(0, 1)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listSpliceTest)
  }
})

describe('addFirst', () => {
  function listAddFirstTest(list: IList<number>) {
    const target = list as unknown as { addFirst?: (value: number) => void }
    if (typeof target.addFirst === 'function') {
      target.addFirst(-1)
    } else {
      list.add(-1)
    }
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listAddFirstTest)
  }
})

describe('addLast', () => {
  function listAddLastTest(list: IList<number>) {
    const target = list as unknown as { addLast?: (value: number) => void }
    if (typeof target.addLast === 'function') {
      target.addLast(6)
    } else {
      list.add(6)
    }
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listAddLastTest)
  }
})

describe('getFirst', () => {
  function listGetFirstTest(list: IList<number>) {
    const target = list as unknown as { getFirst?: () => number }
    if (typeof target.getFirst === 'function') {
      target.getFirst()
    } else {
      list.get(0)
    }
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listGetFirstTest)
  }
})

describe('getLast', () => {
  function listGetLastTest(list: IList<number>) {
    const target = list as unknown as { getLast?: () => number }
    if (typeof target.getLast === 'function') {
      target.getLast()
    } else {
      list.get(list.size - 1)
    }
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listGetLastTest)
  }
})

describe('map', () => {
  function listMapTest(list: IList<number>) {
    list.map(value => value + 1)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listMapTest)
  }
})

describe('reduce', () => {
  function listReduceTest(list: IList<number>) {
    list.reduce((acc, value) => acc + value, 0)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listReduceTest)
  }
})

describe('filter', () => {
  function listFilterTest(list: IList<number>) {
    list.filter(value => (value & 1) === 0)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listFilterTest)
  }
})

describe('every', () => {
  function listEveryTest(list: IList<number>) {
    list.every(value => value > 0)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listEveryTest)
  }
})

describe('some', () => {
  function listSomeTest(list: IList<number>) {
    list.some(value => value === -1)
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in LIST_MAP) {
    benchmark(key, LIST_MAP[key], setup, listSomeTest)
  }
})

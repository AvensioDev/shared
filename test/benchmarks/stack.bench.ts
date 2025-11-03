import { describe } from 'vitest'
import {
  IStack,
  ICollection,
} from '../../src'
import {
  fillCollection,
  benchmark,
  STACK_MAP,
} from './utils'

describe('push', () => {
  function stackPushTest(stack: IStack<number>) {
    fillCollection(stack)
  }

  function setup(collection: ICollection<number>) {}

  for (let key in STACK_MAP) {
    benchmark(key, STACK_MAP[key], setup, stackPushTest)
  }
})

describe('pop', () => {
  function stackPopTest(stack: IStack<number>) {
    stack.pop()
  }

  function setup(collection: ICollection<number>) {
    fillCollection(collection)
  }

  for (let key in STACK_MAP) {
    benchmark(key, STACK_MAP[key], setup, stackPopTest)
  }
})

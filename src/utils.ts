import { CyclicDoublyLinkedList } from './list'
import { FibonacciHeapNode, IFibonacciHeap } from './heap'

/**
 * Log a level-by-level visualization of a Fibonacci heap.
 *
 * @template E Value type.
 * @param heap - Heap to inspect.
 * @example
 * ```ts
 * printHeap(heap)
 * ```
 */
export function printHeap<E>(heap: IFibonacciHeap<E>) {
  // @ts-ignore
  _printHeap.call(heap, heap.extractNeighbours(heap.rootList, true))
}

function _printHeap<E>(this: IFibonacciHeap<E>, neighbours?: CyclicDoublyLinkedList<FibonacciHeapNode<E>>, lvl = 1) {
  if (!neighbours) neighbours = this.extractNeighbours(this.rootList, true)
  const childs = new CyclicDoublyLinkedList<FibonacciHeapNode<E>>()
  let s = `${(lvl === 1 ? '\x1b[36m' : '') + lvl}\x1b[0m:\t`
  for (const neighbour of neighbours) {
    s += `${neighbour.value}`
    if (neighbour.parent) s += `(P ${neighbour.parent.value})\t`
    else s += '\t'
    if (neighbour.child) {
      const c = this.extractChildren(neighbour)
      for (const cElement of c) {
        childs.add(cElement)
      }
    }
  }
  console.log(s)
  if (!childs.isEmpty()) { // @ts-ignore
    _printHeap.call(this, childs, ++lvl)
  }
}

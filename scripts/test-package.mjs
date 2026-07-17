import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(import.meta.url)
const esm = await import(pathToFileURL(resolve('dist/shared.es.js')).href)
const cjs = require(resolve('dist/shared.cjs'))

for (const entry of [esm, cjs]) {
  assert.equal(typeof entry.List, 'function')
  assert.equal(typeof entry.BinarySearchTree, 'function')
  assert.equal(typeof entry.createComparator, 'function')
}

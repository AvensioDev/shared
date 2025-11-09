/**
 * @description Lightweight 3D point used by graph and geometry utilities.
 *
 * @example
 * ```ts
 * const p = new Point(1, 2, 3)
 * ```
 */
export class Point {
  x: number
  y: number
  z: number

  /**
   * @param x - X coordinate.
   * @param y - Y coordinate.
   * @param z - Z coordinate.
   */
  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }
}

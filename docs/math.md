# Math & Utilities

## `Point`
Simple 3D point utility with public `x`, `y`, and `z` coordinates (defaulting to `0`). Useful for graph or geometry-related payloads.

```ts
const origin = new Point()
const p = new Point(10, 20, 5)
```

Use it as-is or extend it for domain-specific vector math.

import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  mode: 'production',
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'shared',
      formats: ['iife'],
      fileName: (format) => `shared.${format}.js`,
    },
    minify: false,
    emptyOutDir: false,
  }
})

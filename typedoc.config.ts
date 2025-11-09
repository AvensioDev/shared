// typedoc.config.ts
import type { TypeDocOptions } from 'typedoc'

const config: Partial<TypeDocOptions> = {
  entryPoints: ['src/index.ts'],
  out: 'docs/api',
  plugin: ['typedoc-plugin-markdown'],
  theme: 'markdown',
  hideGenerator: true,
  readme: 'none',
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true
}
export default config

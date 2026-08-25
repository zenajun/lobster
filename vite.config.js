import { defineConfig, transformWithOxc } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

const jsxInJs = {
  name: 'jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (!/src[\\/].*\.js$/.test(id)) {
      return null
    }

    const result = await transformWithOxc(code, id, { lang: 'jsx' })
    return { code: result.code, map: result.map }
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [jsxInJs, react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@components': path.resolve(import.meta.dirname, 'src/assets/components'),
      '@constants': path.resolve(import.meta.dirname, 'src/assets/constants'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
  },
})

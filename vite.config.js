import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

// Hash-based routing (#experience, #projects, ...) means the server never
// sees anything past the `#` — only the root `/` can ever be meaningfully
// prerendered as static HTML. Sections beyond home are still fully
// crawlable by any bot that executes JS (Google, most link-preview
// services); this specifically fixes the case of a crawler that doesn't —
// today that request gets nothing but "You need to enable JavaScript."
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    command === 'build' && prerender({
      routes: ['/'],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterDocumentEvent: 'render-event',
      },
    }),
  ].filter(Boolean),
  publicDir: 'public',
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons'],
        }
      }
    }
  }
}))

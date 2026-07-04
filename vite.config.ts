import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart({
      pages: [{ path: '/' }, { path: '/terms' }, { path: '/privacy' }],
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      spa: {
        enabled: true,
      },
    }),
    viteReact(),
  ],
})

export default config

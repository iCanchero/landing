import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  // Prerendering must reach its own preview server, even with dev running on localhost.
  preview: { host: '127.0.0.1' },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      pages: [{ path: '/' }, { path: '/terms' }, { path: '/privacy' }],
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      spa: {
        enabled: true,
        // Keep the shell's prerender task separate from the marketing homepage.
        maskPath: '/?__spa_shell=1',
      },
    }),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    viteReact(),
  ],
})

export default config

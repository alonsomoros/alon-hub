import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'logo_app.png'],
    manifest: {
      name: 'alXns Central Hub',
      short_name: 'alXns Hub',
      description: 'Private command center for self-hosted infrastructure and personal goals.',
      theme_color: '#080c14',
      background_color: '#080c14',
      display: 'standalone',
      start_url: '/',
      icons: [
        { src: '/logo.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/logo.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: '/logo.png', sizes: '512x512', type: 'image/png', purpose: 'maskable any' },
      ],
    },
  })],
})

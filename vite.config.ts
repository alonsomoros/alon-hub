import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'alXns Central Hub',
      short_name: 'alXns Hub',
      description: 'Private command center for self-hosted infrastructure and personal goals.',
      theme_color: '#080c14',
      background_color: '#080c14',
      display: 'standalone',
      start_url: '/',
      icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
    },
  })],
})

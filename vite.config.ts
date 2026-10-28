import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['icons/*.png'],
    manifest: {
      name: 'alXns',
      short_name: 'alXns',
      description: 'App centralizada para servicios personales',
      theme_color: '#f5f7f4',
      background_color: '#f5f7f4',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        { src: '/icons/logo-48x48.png', sizes: '48x48', type: 'image/png', purpose: 'any' },
        { src: '/icons/logo-72x72.png', sizes: '72x72', type: 'image/png', purpose: 'any' },
        { src: '/icons/logo-96x96.png', sizes: '96x96', type: 'image/png', purpose: 'any' },
        { src: '/icons/logo-128x128.png', sizes: '128x128', type: 'image/png', purpose: 'any' },
        { src: '/icons/logo-144x144.png', sizes: '144x144', type: 'image/png', purpose: 'any' },
        { src: '/icons/logo-152x152.png', sizes: '152x152', type: 'image/png', purpose: 'any' },
        { src: '/icons/logo-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/icons/logo-256x256.png', sizes: '256x256', type: 'image/png', purpose: 'any' },
        { src: '/icons/logo-384x384.png', sizes: '384x384', type: 'image/png', purpose: 'any' },
        { src: '/icons/logo-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
    },
  })],
})

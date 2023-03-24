import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const BASE_URL = 'https://89h22h708.zicp.fun/';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server:{
    proxy:{
      '/api':{
        target:BASE_URL,
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }

  }
})

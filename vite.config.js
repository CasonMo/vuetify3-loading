import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'Vuetify3Loading',
      fileName: 'vuetify3-loading'
    },
    rollupOptions: {
      external: ['vue', 'vuetify',"vuetify/components"],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify'
        }
      }
    }
  }
})

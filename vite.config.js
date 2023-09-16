import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  base: '/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, './public/partials'),
    }),
  ],
})
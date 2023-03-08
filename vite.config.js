import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 4270,
  },
  build: {
    incremental: true,
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }, 
    cache: true,
    minify: true,
    mode: "development",
    chunks: true,
    moduleBundling: true,
    prerenderPaths: ["/"],
    modulePreload: true,
    outDir: "build",
    //Podemos especificar otro directorio de salida para los assets, en ves de "assets"
    assetsDir: "activos",
    //
    devCode: true,
    debug: true,
  }
})

import { defineConfig } from "vite"
import { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: [resolve(__dirname, 'src/plugin/index.ts')],
            formats: ['es', 'cjs']
        }
    }
})

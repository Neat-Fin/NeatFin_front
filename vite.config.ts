import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/NeatFin_front/",
  server: {
    port: 3000, // 원하는 포트로 변경
  },
})

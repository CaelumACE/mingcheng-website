import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 关闭 Vite 自带的 outDir 清空，避免 safe-delete 回收站机制在本沙箱环境失败导致构建中断；
    // 由 CI/本地脚本手动 rm -rf dist 清理。
    emptyOutDir: false,
  },
})

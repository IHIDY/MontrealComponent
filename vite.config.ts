import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { configDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    ...configDefaults,
    globals: true,  // Global expect allowed
    environment: 'jsdom',
    setupFiles: "./src/setupTests.ts"
  },
})

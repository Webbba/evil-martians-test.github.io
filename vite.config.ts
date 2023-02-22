import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase',
    },
  },
});

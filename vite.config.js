import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Add this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@mui/icons-material'], // Exclude this from bundling
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for the src folder
    },
  },
});

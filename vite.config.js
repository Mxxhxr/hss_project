import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hss_project/', // Set to the repository name for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      'prop-types': 'prop-types/index.js',
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// export default defineConfig({
//   plugins: [react()],
//   base: '/hss_project/', // Match this to your repository name
// });

export default defineConfig({
  plugins: [react()],
  // base: '/hss_project/', // This must match your repo name
});
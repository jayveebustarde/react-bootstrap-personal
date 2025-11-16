import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you deploy to a subfolder (e.g. GitHub Pages), set base: '/your-repo-name/'
  base: '/',
});

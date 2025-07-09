
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ricolino-react/', // 👈 This is critical for GitHub Pages!
});

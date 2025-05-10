import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ DO NOT import or use @tailwindcss/vite — it's not a real plugin
export default defineConfig({
  plugins: [react()],
});

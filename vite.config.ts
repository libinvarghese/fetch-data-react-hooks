import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export -- expected by vite
export default defineConfig({
  plugins: [react()],
});

import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/api': 'http://localhost:8000',
      '/imgs': 'http://localhost:8000',
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dts: 'src/components.d.ts', // generate `components.d.ts` global declarations
      resolvers: [VantResolver()],
    }),
  ],
});

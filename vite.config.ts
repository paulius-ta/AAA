import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react({
      babel: {
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            {
              version: '2023-05',
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@config': '/src/config',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@customTypes': '/src/types',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
      '@stores': '/src/stores',
      '@data': '/src/data',
      '@xperiments': '/src/xperiments',
    },
  },
});

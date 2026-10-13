import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const inputs: Record<string, string> = {
    main: path.resolve(__dirname, 'index.html'),
    artigos: path.resolve(__dirname, 'artigos.html'),
    noticias: path.resolve(__dirname, 'noticias.html'),
  };

  // Auto-registrar todos os artigos
  const artigosDir = path.resolve(__dirname, 'artigos');
  if (fs.existsSync(artigosDir)) {
    fs.readdirSync(artigosDir)
      .filter((f) => f.endsWith('.html'))
      .forEach((f) => {
        const name = f.replace('.html', '');
        inputs[`artigo_${name}`] = path.resolve(artigosDir, f);
      });
  }

  // Auto-registrar todas as notícias
  const noticiasDir = path.resolve(__dirname, 'noticias');
  if (fs.existsSync(noticiasDir)) {
    fs.readdirSync(noticiasDir)
      .filter((f) => f.endsWith('.html'))
      .forEach((f) => {
        const name = f.replace('.html', '');
        inputs[`noticia_${name}`] = path.resolve(noticiasDir, f);
      });
  }

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: inputs,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

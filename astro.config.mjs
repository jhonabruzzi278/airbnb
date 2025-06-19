import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import node from '@astrojs/node';
import clerk from '@clerk/astro';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

const useNode = process.argv.includes('--node');

export default defineConfig({
  output: 'server',
  adapter: useNode
    ? node({ mode: 'standalone' })
    : vercel({ runtime: 'nodejs18.x', edgeMiddleware: false }),
  vite: { plugins: [tailwindcss()] },
  integrations: [icon(), clerk({ afterSignInUrl: '/', afterSignUpUrl: '/' })],
});

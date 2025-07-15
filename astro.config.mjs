import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import clerk from '@clerk/astro';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    clerk({ afterSignInUrl: '/', afterSignUpUrl: '/' }),
  ],
});

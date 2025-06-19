import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import clerk from '@clerk/astro';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: false,         // deshabilita edge si no lo necesitas
    cacheOnDemandPages: true       // opcional: habilita cache en requests SSR
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    clerk({ afterSignInUrl: '/', afterSignUpUrl: '/' }),
  ],
});

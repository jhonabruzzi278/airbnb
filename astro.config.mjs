import { defineConfig } from 'astro/config';

import clerk from '@clerk/astro';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    clerk({ afterSignInUrl: '/', afterSignUpUrl: '/' }),
  ],
});

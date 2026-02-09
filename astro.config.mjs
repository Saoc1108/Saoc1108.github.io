// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. IMPORTANTE: Tu dominio final
  site: 'https://Saoc1108.github.io', 
  
  // 2. La base es la raíz porque tu repo es "usuario.github.io"
  base: '/', 

  // 3. Mantén tu configuración de Tailwind v4 intacta
  vite: {
    plugins: [tailwindcss()]
  }
});
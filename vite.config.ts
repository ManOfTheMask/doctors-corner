import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ["voidtek.dev", "localhost"],
    fs: {
      allow: ["./static"]
    },
  },
  preview: {
	host:"0.0.0.0",
        port: 4173
  },

  plugins: [sveltekit()]

});

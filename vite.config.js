import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Rediriger toutes les routes vers index.html
  historyApiFallback: true,

  build: {
    // Pour la production, s'assurer que les routes SPA fonctionnent
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optimisation optionnelle
      },
    },
  },
});

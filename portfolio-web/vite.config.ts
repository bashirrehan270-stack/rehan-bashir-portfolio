import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import tailwindercss from "@tailwindcss/vite"
export default defineConfig({
  plugins: [react(), tailwindercss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,
    port: 5173,
    open: true,
  },

  preview: {
    port: 4173,
  },

  build: {
    target: "esnext",
    sourcemap: false,
    outDir: "dist",
    assetsDir: "assets",
    chunkSizeWarningLimit: 1000,
  },
});
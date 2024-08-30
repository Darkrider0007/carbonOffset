import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://carbonoffset-backend.onrender.com", // Backend server
        changeOrigin: true,
        secure: false, // Use false for HTTP, true for HTTPS
        // rewrite: (path) => path.replace(/^\/api/, ''), // Uncomment if you need to strip /api
      },
    },
  },
});

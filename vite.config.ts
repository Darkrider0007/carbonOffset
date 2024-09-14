import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path"; // Use correct import for path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensure correct path resolution
    },
  },
});

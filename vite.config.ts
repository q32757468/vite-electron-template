import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const root = resolve(__dirname, "src/render");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  resolve: {
    alias: {
      "@": root,
    },
  },
  plugins: [vue()],
  build: {
    outDir: resolve(__dirname, "dist"),
  },
});

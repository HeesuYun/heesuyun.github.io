import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// User site: https://heesuyun.github.io/ (Pages serves /docs at site root)
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});

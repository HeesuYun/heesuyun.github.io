import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// User site: https://heesuyun.github.io/ (root)
export default defineConfig({
  plugins: [react()],
  base: "/",
});

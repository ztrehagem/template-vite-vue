import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve("src"),

  publicDir: path.resolve("public"),

  plugins: [vue()],
});

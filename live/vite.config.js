import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
  },
  build: { target: "esnext" },
});

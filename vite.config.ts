import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, "images");

function serveRepoImages(): Plugin {
  return {
    name: "serve-repo-images",
    configureServer(server) {
      server.middlewares.use("/images", (req, res, next) => {
        const urlPath = decodeURIComponent((req.url ?? "/").split("?")[0]);
        const filePath = path.normalize(path.join(imagesDir, urlPath));
        if (!filePath.startsWith(imagesDir) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          next();
          return;
        }
        const ext = path.extname(filePath).toLowerCase();
        const types: Record<string, string> = {
          ".png": "image/png",
          ".jpg": "image/jpeg",
          ".jpeg": "image/jpeg",
          ".webp": "image/webp",
          ".gif": "image/gif",
        };
        res.setHeader("Content-Type", types[ext] ?? "application/octet-stream");
        fs.createReadStream(filePath).pipe(res);
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), serveRepoImages()],
  root: ".",
  publicDir: "public",
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    watch: {
      ignored: ["**/images/**"],
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8787",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

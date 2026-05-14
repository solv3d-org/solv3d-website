import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT || 8787);

const distDir = path.join(__dirname, "dist");
if (existsSync(path.join(distDir, "index.html"))) {
  app.use(express.static(distDir));
  app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
} else {
  app.get(/.*/, (_req, res) => {
    res.status(503).send("Build the site first with npm run build.");
  });
}

const server = app.listen(port, "127.0.0.1");
server.on("listening", () => console.log(`Solv3d site listening on http://127.0.0.1:${port}`));
server.on("error", (err) => {
  console.error(`Failed to start server: ${err.message}`);
  process.exit(1);
});

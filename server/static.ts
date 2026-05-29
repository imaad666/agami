import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const publicDir = path.resolve(__dirname, "public");
  const distRoot = __dirname;
  const distPath =
    fs.existsSync(publicDir) && fs.statSync(publicDir).isDirectory()
      ? publicDir
      : fs.existsSync(path.resolve(distRoot, "index.html"))
        ? distRoot
        : publicDir;

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

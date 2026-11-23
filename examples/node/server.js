// A small server on Bun: the page at /, a JSON clock at /api/time. bun --watch restarts it when this
// file changes; the page is read on each request, so an edit of public/ shows on the next load.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const PORT = Number(process.env.PORT ?? 3000);
const started = new Date();

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  if (url.pathname === "/api/time") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ now: new Date().toISOString(), started: started.toISOString(), bun: Bun.version }));
    return;
  }
  if (url.pathname === "/") {
    const page = await readFile(new URL("./public/index.html", import.meta.url), "utf8");
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(page);
    return;
  }
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("Not found\n");
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

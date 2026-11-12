import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist", import.meta.url));
const host = "127.0.0.1";
const port = 4173;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

await readFile(resolve(root, "index.html"));

function previewSubmission(request, response) {
  let body = "";
  request.setEncoding("utf8");
  request.on("data", (chunk) => {
    body += chunk;
    if (body.length > 4096) request.destroy();
  });
  request.on("end", () => {
    const fields = new URLSearchParams(body);
    const required = ["nev", "telefon", "ok", "visszahivas"];
    const valid = fields.get("form-name") === "idopontkeres" &&
      !fields.get("bot-field") &&
      fields.get("hozzajarulas") === "igen" &&
      required.every((name) => fields.get(name)?.trim());

    if (!valid) {
      response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Hiányos űrlap. Térjen vissza az űrlaphoz.");
      return;
    }

    // Local demonstration only. Test data is discarded after this response.
    response.writeHead(303, { Location: "/koszonjuk/" });
    response.end();
  });
}

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, `http://${host}:${port}`).pathname);
    if (request.method === "POST" && pathname === "/koszonjuk/") {
      previewSubmission(request, response);
      return;
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { Allow: "GET, HEAD" });
      response.end();
      return;
    }

    const target = resolve(root, "." + pathname + (pathname.endsWith("/") ? "index.html" : ""));
    const type = types[extname(target)];
    if (!target.startsWith(root + sep) || !type) {
      response.writeHead(404);
      response.end();
      return;
    }

    const body = await readFile(target);
    response.writeHead(200, { "Content-Type": type, "X-Content-Type-Options": "nosniff" });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Az oldal nem található.");
  }
});

server.listen(port, host, () => console.log(`Helyi előnézet: http://localhost:${port}/`));

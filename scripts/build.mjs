import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(root, "dist");
const files = [
  "index.html",
  "kezelesek-es-arak/index.html",
  "rolam/index.html",
  "kapcsolat/index.html",
  "adatkezeles/index.html",
  "koszonjuk/index.html",
  "sitemap.xml",
  "robots.txt",
  "assets/css/styles.css",
  "assets/js/main.js",
  "assets/js/form-validation.js",
  "assets/favicon.svg",
  "assets/images/hero-gyogytorna.webp",
  "assets/images/egyeni-gyogytorna.webp",
  "assets/images/kiscsoportos-gerinctorna.webp",
  "assets/images/nemeth-balint-portre.webp"
];

for (const file of files) {
  const target = resolve(output, file);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(resolve(root, file), target);
}

console.log(`Build kész: ${files.length} fájl a dist mappában.`);

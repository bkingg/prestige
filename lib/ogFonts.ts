import { readFile } from "fs/promises";
import path from "path";

/**
 * Loads local font files for OG/Twitter image generation via Node's `fs`
 * directly (cached per server process), instead of letting @vercel/og fall
 * back to its bundled default font — that fallback builds a `file://` URL
 * with OS-native path separators, which is invalid on Windows and also
 * interacts badly with the edge runtime during heavy static generation.
 * Reading the bytes ourselves and passing them via the `fonts` option
 * sidesteps both issues and lets these routes stay on the Node runtime.
 */
let cachedFonts: Promise<{ name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" }[]> | null = null;

export function loadOgFonts() {
  if (!cachedFonts) {
    cachedFonts = Promise.all([
      readFile(path.join(process.cwd(), "assets/fonts/Spectral-Regular.ttf")),
      readFile(path.join(process.cwd(), "assets/fonts/Spectral-Bold.ttf")),
    ]).then(([regular, bold]) => [
      { name: "Spectral", data: regular.buffer.slice(regular.byteOffset, regular.byteOffset + regular.byteLength) as ArrayBuffer, weight: 400 as const, style: "normal" as const },
      { name: "Spectral", data: bold.buffer.slice(bold.byteOffset, bold.byteOffset + bold.byteLength) as ArrayBuffer, weight: 700 as const, style: "normal" as const },
    ]);
  }
  return cachedFonts;
}

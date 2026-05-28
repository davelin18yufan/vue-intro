import { defineConfig, type Plugin } from 'vite'

/**
 * Vite 8 on Windows incorrectly relativizes absolute paths in virtual-module
 * imports when the project directory contains non-ASCII characters.
 *
 * Root cause: process.cwd() returns raw Unicode ("新增資料夾") while Vite
 * internally URL-encodes the virtual-module location ("%E6%96%B0..."), so
 * path.relative() treats them as different roots and produces a broken path
 * like "../新增資料夾/vue_intro/D:/新增資料夾/vue_intro/node_modules/...".
 *
 * Fix: resolveId hook intercepts the already-mangled path and extracts the
 * embedded Windows absolute path — the real target — before Vite tries
 * (and fails) to look up the nonsense relative path on disk.
 */
function fixWindowsNonAsciiPath(): Plugin {
  // Matches paths that contain a Windows drive letter somewhere in the middle,
  // e.g. "../新增資料夾/vue_intro/D:/新增資料夾/vue_intro/node_modules/..."
  const mangledRe = /^\.\.\/.*\/([A-Za-z]:\/.*)/

  return {
    name: 'slidev-fix-windows-non-ascii-path',
    enforce: 'pre',
    resolveId(id) {
      const m = id.match(mangledRe)
      if (m) return m[1] // hand back the real absolute path
    },
  }
}

export default defineConfig({
  plugins: [fixWindowsNonAsciiPath()],
  optimizeDeps: {
    // pnpm shameful-hoist causes CJS/ESM interop failure for this Slidev
    // recording dependency; pre-bundling it to ESM fixes the missing export.
    include: ['@fix-webm-duration/fix'],
  },
  server: {
    fs: {
      // Allow Vite dev server to serve files from hoisted pnpm node_modules
      // that may sit outside the project root on Windows non-ASCII paths.
      strict: false,
      allow: ['..'],
    },
  },
})

// scripts/prerender.mjs
//
// Post-build static prerender. This site is a client-side-rendered SPA, so the
// built dist/index.html ships an empty <div id="root"> — invisible to search
// engines and LLM crawlers that don't run JavaScript. We can't use Node SSR
// because components read `window` during render (useWindowDimensions), so we
// run the real app in a headless browser instead: serve dist/, visit each
// route, let React + react-helmet-async render, then snapshot the full HTML
// (content + <head> meta + JSON-LD) into dist/<route>/index.html.

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { preview } from 'vite'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

// Keep this list in sync with the routes in src/App.tsx and public/sitemap.xml.
const routes = ['/', '/about', '/recipes', '/programs', '/testimonials']

async function run() {
  const server = await preview({ preview: { port: 4173, strictPort: true } })
  const base = server.resolvedUrls.local[0].replace(/\/$/, '')

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    for (const route of routes) {
      const page = await browser.newPage()
      await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 })

      // Wait for the app to mount and for react-helmet-async to write the head.
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root')
          return !!root && root.childElementCount > 0 &&
            !!document.querySelector('link[rel="canonical"]')
        },
        { timeout: 60000 },
      )

      const html = await page.content()
      await page.close()

      const outFile =
        route === '/'
          ? resolve(distDir, 'index.html')
          : resolve(distDir, `.${route}`, 'index.html')
      mkdirSync(dirname(outFile), { recursive: true })
      writeFileSync(outFile, html, 'utf8')
      console.log(`prerendered ${route} -> ${outFile.replace(distDir, 'dist')}`)
    }
  } finally {
    await browser.close()
    await new Promise((r) => server.httpServer.close(r))
  }
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('prerender failed:', err)
    process.exit(1)
  })

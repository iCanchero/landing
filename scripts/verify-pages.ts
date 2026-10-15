import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const publicDir = new URL('../.output/public/', import.meta.url)
const readPage = (path: string) =>
  readFileSync(new URL(path, publicDir), 'utf8')

const home = readPage('index.html')
const shell = readPage('_shell.html')

assert.notEqual(home, shell, 'The homepage must contain prerendered content.')
assert.ok(home.includes('<h1'), 'The homepage heading must be prerendered.')
assert.equal(
  readPage('404.html'),
  shell,
  '404.html must provide the SPA shell.',
)
assert.ok(existsSync(new URL('.nojekyll', publicDir)))

for (const path of [
  'index.html',
  'terms/index.html',
  'privacy/index.html',
  '404.html',
]) {
  const html = readPage(path)
  assert.ok(html.includes('<html'), `${path} must contain HTML.`)
  assert.ok(
    !/\/@vite\/|\/@id\/|\/@tanstack-start\/|data-tsd-source=/.test(html),
    `${path} must not contain development-server output.`,
  )
  for (const match of html.matchAll(
    /(?:src|href)="(\/assets\/[^"?#]+)[^"]*"/g,
  )) {
    assert.ok(
      existsSync(new URL(match[1].slice(1), publicDir)),
      `${path} references a missing asset: ${match[1]}`,
    )
  }
}

console.log('GitHub Pages static output verified.')

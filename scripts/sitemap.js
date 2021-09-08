const fs = require('fs')
const path = require('path')
const { readdirRecursively, removeExtension } = require('./_utils')

const public = path.join(process.cwd(), 'public')
const root = path.join(process.cwd(), 'src', 'pages')

const pages = readdirRecursively(root)
  .filter(file => (
    !path.basename(file).startsWith('_') && // Skip special pages
    !file.includes('[') && // Skip variables
    file.endsWith('.tsx')
  ))
  .map(file => {
    if (file.endsWith('/index.tsx')) {
      return path.join(path.dirname(file), '') // Handle index pages
    }

    return removeExtension(file)
  })

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>`

console.log('(Sitemap generation) Files to process:')
console.log(pages)

for (let i = 0, l = pages.length; i < l; i++) {
  const file = path.relative(root, pages[i])

  sitemap += `
  <url>
    <loc>https://seia.io/${file}</loc>
    <changefreq>monthly</changefreq>
  </url>`
}

const posts = readdirRecursively(path.join(process.cwd(), 'posts'))
  .filter(file => file.endsWith('.mdx'))

console.log('Stories to process:')
console.log(posts)

for (let i = 0, l = posts.length; i < l; i++) {
  const post = posts[i]

  sitemap += `
  <url>
    <loc>https://seia.io/stories/${path.basename(removeExtension(post))}</loc>
    <changefreq>monthly</changefreq>
  </url>`
}

sitemap += `
</urlset>
`

fs.writeFileSync(path.join(public, 'sitemap.xml'), sitemap)

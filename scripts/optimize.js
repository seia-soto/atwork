const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const root = path.join(process.cwd(), 'public', 'images')

/**
 * Read files in folder recursively
 *
 * @param {string} location The start location to search
 * @returns {string[]} The list of files read recursively
 */
const readdirRecursively = location => {
  const files = fs.readdirSync(location)
  const results = []

  for (let i = 0, l = files.length; i < l; i++) {
    const file = files[i]
    const fullpath = path.join(location, file)

    if (fs.statSync(fullpath).isDirectory()) {
      results.push(...readdirRecursively(fullpath))
    } else {
      results.push(fullpath)
    }
  }

  return results
}

const files = readdirRecursively(root)
  .filter(file => !file.endsWith('.webp'))

console.log('Files to process: (below)')
console.log(files)

const main = async () => {
  for (let i = 0, l = files.length; i < l; i++) {
    const data = await sharp(files[i])
      .webp()
      .toBuffer()

    fs.writeFileSync(files[i].replace(/(.*)\.[^.]+$/, '$1') + '.webp', data)
  }
}

main()

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { readdirRecursively, removeExtension } = require('./_utils')

const root = path.join(process.cwd(), 'public', 'images')

const files = readdirRecursively(root)
  .filter(file => !file.endsWith('.webp'))

console.log('(Image optimization) Files to process:')
console.log(files)

const main = async () => {
  for (let i = 0, l = files.length; i < l; i++) {
    const file = files[i]

    let data

    if (file.endsWith('avatar.png')) {
      data = await sharp(file)
        .resize(40, 40, {
          fit: 'inside'
        })
        .webp()
    } else {
      data = await sharp(files[i])
        .webp()
        .toBuffer()
    }

    fs.writeFileSync(removeExtension(files[i]) + '.webp', data)
  }
}

main()

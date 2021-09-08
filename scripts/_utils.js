const fs = require('fs')
const path = require('path')

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

/**
 * Remove file extension from file path
 *
 * @param {string} file The file path to process
 * @returns {string} File name
 */
const removeExtension = file => file.replace(/(.*)\.[^.]+$/, '$1')

module.exports = {
  readdirRecursively,
  removeExtension
}

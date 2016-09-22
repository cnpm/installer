// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const request = require('request').defaults({ json: true })
const versions = require('./versions')

module.exports = (cb) => {
  request('https://npm.taobao.org/mirrors/node/index.json', (err, resp, index) => {
    if (err) return cb(err)
    if (resp.statusCode !== 200) {
      return cb(new Error('Status not 200, ' + resp.statusCode))
    }
    cb(null, versions(index))
  })
}

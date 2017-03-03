const IO = require('io-square')
const request = require('request')

class IONode extends IO {
  static get (url) {
    return new IO(cb => request(url, cb))
      .error(e => console.error)
      .map((e, res, body) => body)
  }
}

module.exports = IONode

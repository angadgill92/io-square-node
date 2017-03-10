const IO = require('io-square')
const request = require('request')
const readline = require('readline')
const fs = require('fs')

const rlConfig = {
  input: process.stdin,
  output: process.stdout
} /* Config for readline interface */

const errCb = e => { console.error(e) }

class IONode extends IO {
  static httpGet (url) {
    return new IO(cb => request(url, cb))
      .error(errCb)
      .map((e, res, body) => body)
  }

  static getLine (str) {
    const rl = readline.createInterface(rlConfig)
    return new IO(cb => rl.question(str, cb))
      .error(errCb)
      .map(data => {
        rl.close()
        return data
      })
  }

  static putLine (...data) {
    return new IO(cb => process.nextTick(cb, data))
      .error(errCb)
      .map(data => {
        console.log(...data)
        return data
      })
  }

  static readFile (filename) {
    return new IO(cb => fs.readFile(filename, cb))
      .error(errCb)
      .map((_, data) => data.toString())
  }

  static writeFile (filename, data) {
    return new IO(cb => fs.writeFile(filename, data, cb))
      .error(errCb)
  }
}

module.exports = IONode

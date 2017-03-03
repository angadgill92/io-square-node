## IO^2 for Node JavaScript

### IO Monad for NodeJS

Separate pure and impure functions in NodeJS

#### Install

`$ npm install io-square-node --save`

#### Example

``````javascript
const IO = require('io-square-node')

IO.get('http://google.com')
	  .then(body => {
        console.log(body)
	  })
``````


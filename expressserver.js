const express = require('express')
const application = express()
const portnumber = 3000

application.get('/', (req, res) => {
  res.send('Hello world')
})

application.listen(portnumber, () => {
  console.log(`application listening on port ${portnumber}`)
})
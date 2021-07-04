const express = require('express')
const app = express()
const { people } = require('./data')

app.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.listen(5000, () => {
  console.log('server listening on port 5000...')
})

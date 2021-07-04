const express = require('express')
const app = express()
const logger = require('./logger')
const authorise = require('./authorise')

// apply to all paths
app.use([logger, authorise])
// only apply to specific path
// app.use('/about', logger)

app.get('/', (req, res) => {
  console.log(req.user)
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

// apply both middleware to this specific path
app.get('/api/items', [logger, authorise], (req, res) => {
  res.send('Items')
})

app.listen(5000, () => {
  console.log('server listening on port 5000...')
})

const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.static('./methods-public'))
// parse form data to make req.body possible
app.use(express.urlencoded({ extended: false }))
// parse json to make req.body possible
app.use(express.json())

app.use('/login', auth)
app.use('/api/people', people)

app.listen(5000, () => {
  console.log('server listening on port 5000...')
})

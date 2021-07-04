const express = require('express')
const app = express()
const { people } = require('./data')

app.use(express.static('./methods-public'))
// parse form data to make req.body possible
app.use(express.urlencoded({ extended: false }))
// parse json to make req.body possible
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

// CHECK! this is not working
app.post('api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide a name' })
  }
  res.status(201).json({ success: true, person: name })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(400).send('Please enter name')
})

app.listen(5000, () => {
  console.log('server listening on port 5000...')
})

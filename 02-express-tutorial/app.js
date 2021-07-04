const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((item) => {
    const { id, name, image } = item
    return { id, name, image }
  })
  res.json(newProducts)
})

app.listen(5000, () => {
  console.log('server listening on port 5000...')
})

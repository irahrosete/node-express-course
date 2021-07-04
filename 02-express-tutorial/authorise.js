const authorise = (req, res, next) => {
  const { user } = req.query
  if (user === 'irah') {
    req.user = { name: 'irah', id: 2 }
    next()
  } else {
    res.status(401).send('Unauthosied user')
  }
}

module.exports = authorise

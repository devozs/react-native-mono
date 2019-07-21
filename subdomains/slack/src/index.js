module.exports = (req, res) => {
  res.statusCode = 301
  res.setHeader('Location', 'https://api.devozs.com/slack')

  res.end()
}

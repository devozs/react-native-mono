module.exports = (req, res) => {
  res.statusCode = 301
  res.setHeader('Location', `https://devozs.com/${req.url.substr(1)}`)

  res.end()
}

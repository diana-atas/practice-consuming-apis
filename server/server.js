const path = require('path')
const express = require('express')
const request = require('superagent')

// const welcome = require('./routes/welcome')

const server = express()

module.exports = server

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use('/api/v1/welcome', welcome)

server.get('/api/affirmation', (req, res) => {
  request
    .get('https://www.affirmations.dev')
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.error(err.message)
    })
})

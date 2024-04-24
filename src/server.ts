import express from 'express'
import { books } from './db'

const server = express()
const port = 3000

server.get('/books', (req, res) => {
  res.json(books)
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

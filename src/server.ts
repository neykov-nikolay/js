import express from 'express'
import { users, products } from "./db"

const PORT = 3000
const server = express()

server.get('/users', (req, res) => {
  res.json(users)
})

server.get('/products', (req, res) => {
  res.json(products)
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

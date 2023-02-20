require('dotenv').config()
const Server = require('./models/server')

// Llamar mi clase Server
const server = new Server()

// Lanzar metodo listen
server.listen()
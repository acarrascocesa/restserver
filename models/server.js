const express = require("express");
const cors = require("cors");

// Express basado en clases
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.usersPath = "/api/users";

    // Middlewares: son funciones que se ejecutan siempre que inicia nuestro servidor
    // Los middlewares siempre son app.use
    this.middlewares();

    // Cors: nos permite proteger nuestro servidor
    // Muchos navegadores presentaran error si el cors no esta habilitado
    this.app.use(cors());

    // Lectura y parseo del body(convertir datos recibidos a json)
    this.app.use(express.json());

    // Llamando a las rutas
    this.routes();
  }

  // Metodo middlewares
  middlewares() {
    // Directorio publico
    this.app.use(express.static("public"));
  }

  //Metodo para las rutas
  routes() {
    this.app.use(this.usersPath, require("../routes/user.routes"));
  }

  // Metodo listen
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;

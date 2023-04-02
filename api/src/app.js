const express = require('express');//Importo el módulo express
const cookieParser = require('cookie-parser');//para manejar cookies
const bodyParser = require('body-parser');//para procesar solicitudes HTTP entrantes en la API
const morgan = require('morgan');//para registrar las solicitudes HTTP en la consola
const routes = require('./routes/index.js');// Importo todas las rutas definidas

require('./db.js');//Importo la configuración de la base de datos

const server = express();//Creo una instancia de Express llamada "server".

server.name = 'API';//Se define el nombre del servidor como "API".

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
//Agrega el middleware body-parser para analizar los cuerpos de las solicitudes entrantes en formato urlencoded.
server.use(bodyParser.json({ limit: '50mb' }));
//Agrega el middleware body-parser para analizar los cuerpos de las solicitudes entrantes en formato JSON.
server.use(cookieParser());
//Agrega el middleware cookie-parser para analizar las cookies en las solicitudes entrantes.
server.use(morgan('dev'));
//Agrega el middleware morgan para registrar las solicitudes HTTP en la consola en formato dev.
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from.
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
//Agrega el middleware para permitir el acceso de solicitudes desde el dominio http://localhost:3000 y permitir los métodos GET, POST, OPTIONS, PUT y DELETE.

server.use('/api', routes);
//Agrega todas las rutas definidas en la carpeta /routes con el prefijo '/api'.

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
//Agrega un middleware para manejar errores en la API y devuelve un mensaje de error y el código de estado 500 en caso de que ocurra un error.

module.exports = server;
//Exporta el objeto "server" para poder usarlo en otros archivos.
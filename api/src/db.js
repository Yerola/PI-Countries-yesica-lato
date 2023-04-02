require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Country.belongsToMany(Activity, { through: 'countryxactivity', timestamps: false });

Activity.belongsToMany(Country, { through: 'countryxactivity', timestamps: false });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

/*
Este código se encarga de crear una conexión a una base de datos PostgreSQL 
y definir los modelos y sus relaciones para una aplicación web.

Primero, el código utiliza el paquete "dotenv" para cargar las variables de entorno 
desde un archivo .env, que tiene definidas las variables DB_USER, DB_PASSWORD y DB_HOST.

Luego, se utiliza el paquete Sequelize para establecer la conexión a la base de datos. 
Se define una instancia de Sequelize que utiliza la información de las variables 
de entorno para conectar con la base de datos "countries". 
Se especifica también que se deshabilite el registro de las consultas SQL en la consola 
(logging: false) y que no se utilice la extensión nativa de PostgreSQL (native: false).

Después, se leen los archivos de la carpeta "models" y se agregan sus definiciones 
a un arreglo llamado "modelDefiners". Cada archivo de modelo exporta una función 
que define la estructura de una tabla en la base de datos.

Luego se inyecta la conexión a la base de datos (sequelize) en cada uno de los modelos 
utilizando la función exportada por cada archivo de modelo.
A continuación, se capitalizan los nombres de los modelos, 
para que coincidan con la convención de nomenclatura en JavaScript. 
Esto se hace utilizando los métodos Object.entries y map.

Después de capitalizar los nombres de los modelos, 
se establecen las relaciones entre ellos. 
En este caso, defino dos relaciones "muchos-a-muchos" 
entre los modelos Country y Activity. 
La relación la especifico utilizando el método "belongsToMany" de Sequelize.

Finalmente, se exportan los modelos y la conexión a la base de datos. 
Esto permitirá que los modelos y la conexión puedan ser importados 
y utilizados en otras partes de la aplicación.
*/

const { DataTypes, sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.BIGINT,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  },
    {
      freezeTableName: true
    }
  );
};

/*
En este código defino un modelo llamado "country" utilizando la biblioteca Sequelize 
de Node.js, que utilizo para interactuar con la base de datos relacional "countries". 
El modelo representa una tabla de base de datos que contiene información sobre países.

A continuación, describo cada campo definido en el modelo:

-"id": Es el identificador del país, que defino como una cadena de tres caracteres. 
      Es obligatorio y es la clave primaria de la tabla.

-"name": Es el nombre del país, que defino como una cadena de caracteres. 
          Es obligatorio.

"flag": Es la URL de la bandera del país, que defino como una cadena de caracteres. 
        Es obligatorio y se valida utilizando la función "isUrl" 
        de la biblioteca validator.

-"continent": Es el continente al que pertenece el país, que defino como una 
              cadena de caracteres. Es obligatorio.

-"capital": Es la capital del país, que defino como una cadena de caracteres. 
            Es obligatorio.

-"subregion": Es la subregión a la que pertenece el país, que defino
              como una cadena de caracteres. Es opcional.

-"area": Es el área del país en kilómetros cuadrados, 
          que se define como un número entero grande. Es opcional.

"population": Es la población del país, que se define como un número entero. Es opcional.

Al final del archivo, se exporta la función que recibe como argumento 
la conexión de Sequelize y que utilizo para definir el modelo y establecer 
las relaciones necesarias con el otro modelo en la aplicación. 
En este caso, utilizo también la opción "freezeTableName: true" 
para indicar que el nombre de la tabla en la base de datos debe ser exactamente 
el mismo que el nombre del modelo (en este caso, "Country").
*/
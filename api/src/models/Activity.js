const { DataTypes, sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    physicalDifficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      defaultValue: "1",
      allowNull: false,
    },

    technicalDifficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      defaultValue: "1",
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      defaultValue: "1",
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM("Spring", "Summer", "Fall", "Winter"),
      allowNull: false,
    },

  }, {
    freezeTableName: true
  });
};

/*
Este código es un módulo de Node.js en el que exporto una función 
en el que defino el modelo de datos para la tabla "activity" 
de mi base de datos "countries" 
utilizando la biblioteca ORM (Mapeo Objeto Relacional) de Sequelize.

Dicha función que exporto toma un objeto Sequelize como parámetro y en él
defino la estructura de la tabla de "activity" utilizando el método sequelize.define(). 
La tabla de "activity" tiene los siguientes campos:

-"id": un número entero autoincremental, clave primaria de la tabla.

-"name": una cadena de texto que representa el nombre de la actividad. 
        Este campo no puede ser nulo y es único.

-"physicalDifficulty": una enumeración que representa la dificultad física 
                      de la actividad, con valores del 1 al 5. 
                      El valor predeterminado es 1 y este campo no puede ser nulo.

-"technicalDifficulty": una enumeración que representa la dificultad técnica 
                        de la actividad, con valores del 1 al 5. 
                        El valor predeterminado es 1 y este campo no puede ser nulo.

-"duration": un número entero que representa la duración de la actividad. 
              El valor predeterminado es 1 y este campo no puede ser nulo.

-"season": una enumeración que representa la temporada en la que se realiza la actividad. 
          Los valores posibles son "Spring", "Summer", "Fall" y "Winter". 
          Este campo no puede ser nulo.

El objeto de opciones que paso como segundo parámetro a sequelize.define() 
tiene una propiedad "freezeTableName" que se establezco en "true". 
Esto significa que el nombre de la tabla será exactamente "Activity" 
y no se le agregará un prefijo o sufijo como Sequelize suele hacer por defecto.

Una vez definido este modelo, lo puedo utilizar para realizar operaciones CRUD 
(Crear, Leer, Actualizar y Eliminar) en la tabla "Activity" correspondiente 
en mi base de datos "countries".
*/
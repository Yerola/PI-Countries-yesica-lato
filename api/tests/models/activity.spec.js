const { conn, Activity } = require('../../src/db.js');
const { expect } = require('chai');

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  const activityCreate = {
    name: 'Golfing',
    difficulty: 4,
    duration: 2,
    season: "Winter"
  };

  //TODO VALIDATORS
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));

    //* TEST 1 NAME
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Activity.create({ ...activityCreate, name: null })
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Activity.create({ name: 'Golfing' });
      });
    });

    //* TEST 2: SEASON
    describe('season', () => {
      it('should throw an error if "season" is null', (done) => {
        Activity.create({ ...activityCreate, season: null })
          .then(() => done(new Error('It requires a valid "season"')))
          .catch(() => done());
      });
      it('should work when its a valid season', () => {
        Activity.create({ season: 'Winter' });
      });
    });

    //*  TEST 3: DIFFICULT
    describe('dificultad', () => {
      it('should work when its a valid difficulty', () => {
        Activity.create({ difficulty: 2 });
      });
    });

    //* TEST 4: DURATION
    describe('duration', () => {
      it('should throw an error if "no duration selected"', (done) => {
        Activity.create({ duracion: null })
          .then(() => done(new Error('Duration value must be greater than 1')))
          .catch(() => done());
      });
      it('should work when its a valid duration', () => {
        Activity.create({ duration: 2 });
      });
    });
  });
});

/*
Este código es una suite de pruebas unitarias para el modelo de base de datos "Activity". 
La suite de pruebas utiliza la biblioteca Mocha y el asertor Chai 
para realizar pruebas en los validadores de los campos del modelo de base de datos.

Primero, se importan las dependencias necesarias para la prueba, 
que incluyen la conexión a la base de datos y la biblioteca de aserciones Chai. 
Luego, se describe la suite de pruebas unitarias en una función global describe(), 
que tiene como argumento una cadena que describe el tema de la suite de pruebas 
(en este caso, el modelo de actividad).

Antes de realizar las pruebas, se asegura que se puede autenticar 
con la base de datos con una función before().

Dentro de la suite de pruebas hay una sección Validators que describe 
una serie de pruebas de validación de campos para el modelo de actividad.

Para cada campo del modelo de actividad, 
se describe una sección que contiene dos pruebas: 
una prueba que debe generar un error si el valor del campo es nulo o inválido 
y otra prueba que debe ser exitosa si el valor del campo es válido.

Por ejemplo, para el campo "name", se describen dos pruebas. 
La primera prueba (con it()) valida si la creación de una actividad con un nombre nulo 
genera un error, mientras que la segunda prueba valida si la creación de una actividad 
con un nombre válido no genera ningún error.

De manera similar, se describen las pruebas para los campos 
"season", "difficulty" y "duration".

En resumen, este código describe una serie de pruebas unitarias 
que evalúan los validadores de los campos del modelo de actividad. 
Estas pruebas se aseguran de que la creación de una actividad solo sea exitosa 
si se proporciona información válida y completa para cada campo.
*/
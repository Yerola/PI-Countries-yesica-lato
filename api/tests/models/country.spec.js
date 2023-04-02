const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  const testCountry = {
    name: "Argentina",
    continents: "South America",
    flags: "https://flagcdn.com/w320/ar.png",
    capital: "Buenos Aires"
  };

  // VALIDATORS
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));

    // TEST NAME FIELD
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: `Argentina` });
      });
    });
  });

  // TEST FLAGS FIELD
  describe('flags', () => {
    it('should throw an error if the field "flags" is null', (done) => {
      Country.create({
        name: "Argentina",
        continents: "South America",
        capital: "Buenos Aires"
      })
        .then(() => done(new Error('It requires a valid flags')))
        .catch(() => done());
    });
    it('should work when a valid field "flags" is found', () => {
      Country.create(testCountry);
    });
  });

  // TEST CONTINENTS FIELD
  describe('continents', () => {
    it('should throw an error if the field "continents" is null', (done) => {
      Country.create({
        name: "Argentina",
        flags: "https://flagcdn.com/w320/ar.png",
        capital: "Buenos Aires"
      })
        .then(() => done(new Error('It requires a valid "continents" field')))
        .catch(() => done());
    });
    it('should work when a valid field "continents" is found', () => {
      Country.create(testCountry);
    });
  });

  // TEST CAPITAL FIELD
  describe('capital', () => {
    it('should throw an error if the field "capital" is null', (done) => {
      Country.create({
        name: "Argentina",
        continents: "South America",
        flags: "https://flagcdn.com/w320/ar.png"
      })
        .then(() => done(new Error('It requires a valid "capital" field')))
        .catch(() => done());
    });
    it('should work when a valid field "capital" is found', () => {
      Country.create(testCountry);
    });
  });
});

/*
Este código es una serie de pruebas unitarias para el modelo "Country" 
de la base de datos "countries". 
Las pruebas se escriben con el marco de prueba Mocha y la librería de aserciones Chai.

En el código se importa el modelo Country y la conexión de la base de datos "conn" 
desde el archivo de base de datos "../../src/db.js", y también se importa la librería 
de aserciones Chai.

La función "describe" se utiliza para agrupar las pruebas, y dentro de ella, 
se define una serie de pruebas unitarias con la función "it".

En la primera sección "Validators", se prueba la validación de los campos 
del modelo Country. Dentro de esta sección, hay una sección "name" que tiene dos pruebas. 
La primer prueba asegura que se lance un error si el campo "name" es nulo al intentar 
crear una instancia del modelo Country. 
La segunda prueba asegura que se pueda crear una instancia del modelo Country 
si el campo "name" tiene un valor válido.

Después, hay tres secciones más, cada una probando un campo diferente del modelo. 
La sección "flags" asegura que se lance un error si el campo "flags" es nulo 
al intentar crear una instancia del modelo Country, y que se pueda crear una instancia 
si el campo "flags" tiene un valor válido. 
La sección "continents" y la sección "capital" hacen pruebas similares para los campos 
correspondientes.

La función "before" se ejecuta antes de las pruebas y se utiliza para asegurarse 
de que se pueda autenticar con la base de datos. 
La función "beforeEach" se ejecuta antes de cada prueba y se utiliza para eliminar 
y crear la tabla de Country antes de cada prueba.

En resumen, este código es una serie de pruebas unitarias que comprueban 
que los campos del modelo "Country" de la base de datos "countries" se validan 
correctamente y que se pueden crear instancias del modelo con valores válidos 
para cada campo.
*/
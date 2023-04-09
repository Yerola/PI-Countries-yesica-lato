//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require('axios');
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const data = require('./src/data.json');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  try {
    let restCountriesDb = await Country.findAll()
    if (restCountriesDb.length === 0) {
      try {
        let response = await axios.get('https://restcountries.com/v3/all')
        let api = response.data
        api && api.map(async el => await Country.findOrCreate({
          where: {
            id: el.cca3,
            name: el.name.common,
            flag: el.flags[1],
            continent: el.continents ? el.continents[0] : 'Continents not found',
            capital: el.capital ? el.capital[0] : 'Capital not found',
            subregion: el.subregion ? el.subregion : 'Subregion not found',
            area: el.area,
            population: el.population || 0
          }
        }));
      } catch (error) {
        console.error(error);
        console.log('Loading data from data.json'); // log que indica carga de datos de data.json porque falla api
        data && data.map(async el => await Country.findOrCreate({
          where: {
            id: el.cca3,
            name: el.name.common,
            flag: el.flags[1],
            continent: el.continents ? el.continents[0] : 'Continents not found',
            capital: el.capital ? el.capital[0] : 'Capital not found',
            subregion: el.subregion ? el.subregion : 'Subregion not found',
            area: el.area,
            population: el.population || 0
          }
        }));
      };
    };
  } catch (error) {
    throw new Error(error.message);
  };
  server.listen(process.env.PORT || 3001, () => {
    console.log('Listening at 3001'); // eslint-disable-line no-console
  });
});

/*
Este código realiza la inicialización de la base de datos de la aplicación. 
Primero, se importa la biblioteca Axios, el servidor y el modelo "Country" 
y la conexión a la base de datos conn. También se importa un archivo data.json 
que contiene información sobre países.

Luego, se llama a la función sync de conn con la opción force: true, 
lo que eliminará y recreará todas las tablas en la base de datos. 
Una vez completado, se busca en la tabla Country para verificar si ya hay datos en ella. 
Si no hay datos, se intenta obtener información de países de la API https://restcountries.com/v3/all.

Si la API devuelve datos, se realizan operaciones de creación en la base de datos 
con "Country.findOrCreate". La información de cada país es mapeada y se establecen 
las propiedades de cada país como atributos del modelo "Country". 
Si la API falla, se usa el archivo "data.json" para cargar información de países.

Finalmente, una vez que se ha completado la carga de datos, 
el servidor se inicia y se escucha en el puerto 3001.
*/

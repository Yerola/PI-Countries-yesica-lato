const { Router } = require('express');
const { conn } = require('../db');
const { Country, Activity } = conn.models;
const { Op } = require('sequelize')
const router = Router();

router.get('/', (req, res, next) => {
    try {
        if (req.query.name) {
            return Country.findAll({
                attributes: ['flag',
                    'name',
                    'continent',
                    'id',
                    'population',
                    'capital',
                    'subregion',
                    'area'],
                where: {
                    name: {
                        [Op.iLike]: `%${req.query.name}%`
                    }
                },
                include: { model: Activity }
            })
                .then(country => {
                    if (country.length === 0) {
                        return res.send('Not country found')
                    }
                    return res.status(200).send(country)
                });
        } else {
            return Country.findAll({
                attributes: ['flag',
                    'name',
                    'continent',
                    'id',
                    'population',
                    'capital',
                    'subregion',
                    'area'],
                include: { model: Activity }
            })
                .then(country => {
                    return res.status(200).send(country);
                });
        }
    } catch (error) {
        res.status(500).next(error);
    }
});

router.get('/:id/', async (req, res, next) => {
    try {
        const { id } = req.params;
        const country = await Country.findAll({
            where: {
                id: id,
            },
            include: { model: Activity }
        })
        return res.status(200).send(country);
    } catch (error) {
        return res.status(500).next(error)
    };
});

module.exports = router;

/*
En este archivo de rutas de Express manejo peticiones HTTP 
relacionadas con países (/api/countries).

Importo el enrutador de Express, importo los modelos "Country" y "Activity" 
de la conexión a la base de datos e importo el operador "Op" de Sequelize 
para poder realizar búsquedas con operadores especiales. 
Luego creo el objeto router.

en la primera ruta manejo una petición GET sin parámetros, 
la que devuelve una lista de todos los países con sus actividades. 
Si la petición contiene el parámetro "name", se realizará una búsqueda de los países 
que coincidan con ese nombre (ignorando mayúsculas y minúsculas) 
y se devolverán esos países con sus actividades. 
El resultado de la búsqueda se envía como respuesta en formato JSON.

En la segunda ruta manejo una petición GET que contiene el ID de un país en la URL. 
Se realizará una búsqueda de un país con ese ID y se devolverá ese país 
con sus actividades en formato JSON. 
Si el país no existe, se devolverá un error.
*/

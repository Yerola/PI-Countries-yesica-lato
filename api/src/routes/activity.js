const { Router } = require('express');
const { conn } = require('../db');
const { Activity, Country, countryxactivity } = conn.models;
const router = Router();

router.get('/', async (_req, res, next) => {
    try {
        const newActivity = await Activity.findAll({
            include: [
                {
                    model: Country,
                    through: "countryxactivity",
                },
            ],
        });
        return res.send(newActivity);
    } catch (error) {
        next(error)
    };
});

router.post('/', async (req, res, next) => {
    try {
        const { name,
            physicalDifficulty,
            technicalDifficulty,
            duration,
            season,
            countryId } = req.body;
        const newActivity = await Activity.create({
            name,
            physicalDifficulty,
            technicalDifficulty,
            duration,
            season,
        });
        if (countryId)
            await newActivity.addCountry(countryId);
        return res.status(201).send(newActivity);
    } catch (error) {
        next(error)
    };
});

module.exports = router;

/*
En este código exporto un enrutador de Express que maneja solicitudes HTTP 
relacionadas con actividades turísticas.

Primero, en el código importo el enrutador de Express, 
la instancia de conexión de Sequelize y los modelos Activity, Country y countryxactivity.

Luego, creo el enrutador y defino una ruta GET que devuelve 
todas las actividades turísticas y sus países correspondientes 
utilizando el método findAll() de Sequelize. 
Para ello, uso la opción include para indicar que incluya el modelo "Country" 
y que utilice la tabla intermedia "countryxactivity" para establecer 
la relación entre los modelos "Activity" y "Country".

La ruta POST la utilizo para crear una nueva actividad turística. 
Los datos necesarios se obtienen del cuerpo de la solicitud (req.body) 
y los uso para crear una nueva instancia del modelo "Activity" con el método create(). 
Si se proporciona un "countryId" en el cuerpo de la solicitud, 
se agrega un país a la actividad utilizando el método addCountry().

Por último, exporto el enrutador para que pueda ser utilizado 
por la aplicación de Express.
*/
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activityRoutes = require('./activity');
const countryRoutes = require('./country');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/activity', activityRoutes);
router.use('/country', countryRoutes);

module.exports = router;

/*
En este código exporto un enrutador de Express que combina dos sub-enrutadores 
llamados "activityRoutes" y "countryRoutes". 
El enrutador combina las rutas de ambos sub-enrutadores en una sola, 
de manera que cuando utilizo este enrutador en la aplicación Express, 
puedo acceder a las rutas definidas en "activityRoutes" utilizando el prefijo /activity 
y a las rutas definidas en "countryRoutes" utilizando el prefijo /country.

El código utiliza la función "use" de Express para montar los sub-enrutadores 
en la ruta correspondiente. 

Por ejemplo, cuando llamo a router.use('/activity', activityRoutes), 
se monta el sub-enrutador "activityRoutes" en la ruta /activity. 
Esto significa que cualquier ruta definida en "activityRoutes" será accesible 
a través de la ruta /activity/nombre-de-la-ruta. 

De manera similar, cuando llamo a router.use('/country', countryRoutes), 
se monta el sub-enrutador "countryRoutes" en la ruta /country.
Por ejemplo, si se recibe una solicitud a la ruta /country/all, 
entonces se utilizará el controlador y la ruta definidos en "countryRoutes" 
para manejar esa solicitud.
*/


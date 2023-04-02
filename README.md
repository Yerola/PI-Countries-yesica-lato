![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **COUNTRIES** | Proyecto Individual

## **📌 OBJETIVOS GENERALES   **

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />

---

PI-Countries

<br />

Mi Proyecto Individual desarrollado para el Bootcamp de SoyHenry.

<br />

PI Countries (Proyecto Individual). 
El proyecto consume datos de la API de Rest Countries los almacena en una base de datos local 
y luego trabaja y los requiere desde la API propia.

<br />

Requisitos de evaluación:
-Incluir paginado.
-Poder ordenarlos de la A-Z y Z-A.
-Poder filtrar los paises por poblacion, continente y actividades.
-Crear actividades para cada pais, permitiendo que muchos paises tengan la misma actividad.
-Realizar busqueda de un pais en particular.

<br />

Tecnologías utilizadas:
- PostgreSQL para la Base de Datos
- NodeJS y Express para el Back-End
- React, Redux para el Front-End
- CSS puro para estilos

<br />
----------------------------

Proyecto individual - Countries

<br />

Bienvenidos a mi proyecto individual
P.I. Henry. Se trata de una SPA (Single Page Application) implementando las mejores prácticas. 
Haciendo una vista rápida y general, 
podemos notar que la página contiene países de todo el mundo, 
información sobre los mismos y la posibilidad de, cual bitácora, 
agregarle actividades turísticas al país que se desee. 
Se utilizaron distintas tecnologías para realizar el trabajo en su totalidad, 
desarrollando base de datos, back-end y front-end.

<br />

Tecnologías usadas
 React (Front-end)
 Redux (Front-end)
 Express (Back-end)
 Sequelize - Postgres (Base de datos)

<br />

Base de datos
Cuenta con dos entidades: países y actividades. 
Como un país puede tener muchas actividades y una actividad puede pertenecer a muchos países, 
la relación entre ambas entidades es MUCHOS A MUCHOS, 
con lo cual utilizamos una tabla intermedia (en este caso, llamada country_activity). 
Se realizó una función loader para cargar la base de datos con información traída desde una API externa. 
De esta manera, se requirió sólo una vez la información que esta API nos provee. 
De ahí en más, se trabaja con nuestra base de datos directamente.

<br />

Back-end
Se desarrolló un servidor en Node/Express con los métodos GET y POST en diversas rutas. 
Las rutas utilizadas son:

<br />

 GET /countries: nos muestra un listado de todos los países.
 GET /countries/{idPais}: nos muestra el detalle de un país en particular.
 GET /countries?name="...": nos muestra los países que tengan coincidencias en su nombre con lo que iría en los puntos suspensivos (lo que se busca).
 POST /activity: recibe datos de las actividades desde un formulario y luego las crea en la base de datos.

<br />

Front-end
Todos los componentes fueron realizados con CSS puro, sin uso de librerías externas.

<br />

Se desarrolló una aplicación de React/Redux con:

<br />

Pagina inicial / Landing page: posee la imagen característica del trabajo y un botón de ingreso.

<br />

Ruta principal / Home: donde se exhiben pequeñas tarjetas de países 
con un pequeño detalle de cada uno y con la posibilidad de hacer click 
(cada tarjeta es un link) para abrir el detalle más profundo de cada país. 
Se muestran 9 países y hay botones de flechas para avanzar y retroceder en el paginado de dichos países. 
Sobre estas tarjetas se tiene una barra de navegación con ordenamientos 
(alfabéticamente y por población, tanto ascendente como descendentemente), 
filtrados (por continente) y barras de búsquedas (por nombre o por actividades), 
como así también con un botón de reset para volver a mostrar todos los países 
y un botón para acceder a la creación de una actividad turística.

<br />

Detalle profundo de un país: se muestran nombre, bandera, abreviatura, continente, capital, 
población, área y actividades de dicho país. Si este no posee actividades, 
existe la posibilidad de acceder hacia la ruta para agregar una mediante un botón 
dentro de un texto que invita a hacerlo.

<br />

Formulario: un formulario donde se ingresan los datos para agregar una actividad a uno o varios países. 
En ese formulario encontraremos para ingresar nombre de la actividad, dificultad (de 1 a 5), 
duración en horas (de 1 a 24) y estación del año en que se realice. 
Además, tendremos una barra de búsqueda para elegir los países que deseemos que serán mostrados abajo 
en tarjetas y tendrán un botón de AGREGAR para enlistarlos antes de crear la actividad, 
así podemos asociar la actividad en cuestión con su o sus respectivos países. 
Por último, un botón de AGREGAR en la misma barra superior para finalizar con este proceso 
y finalmente crear dicha actividad.

<br />

Espero que hayan disfrutado de mi proyecto!
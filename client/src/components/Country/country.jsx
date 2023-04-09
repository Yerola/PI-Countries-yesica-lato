import { Link } from "react-router-dom";
import style from './country.module.css';

export default function Country({ id, name, flag, continent, population }) {
    return <div className={style.card}>
        <Link
            to={`/id/${id}`}
            className={style.sinSubrayado}
        >
            <h1 className={style.h1}>{name}</h1>
            <h3 className={style.h3}>{continent}</h3>
            <img
                src={flag}
                alt={name + 'flag'}
                className={style.img}
            />
            <h4 className={style.h4}>{population.toLocaleString('es-ES')} 👫</h4>
        </Link>
    </div>
};

/*
Este código es una función de componente React llamada "Country", 
que devuelve un fragmento de JSX (JavaScript XML) 
que representa una tarjeta (card) de un país. 
La función acepta cuatro propiedades como argumentos: 
"id", "name", "flag" y "continent".

La función "Country" utiliza la etiqueta "Link" importada desde "react-router-dom" 
para permitir la navegación hacia una página de detalles de un país específico 
cuando se hace clic en la tarjeta. 
La propiedad "to" de "Link" es un string que representa la ruta a la página de detalles 
y utiliza la variable "id" pasada como propiedad. 
La propiedad "className" se utiliza para agregar una clase CSS llamada "sinSubrayado" 
a la etiqueta "Link".

El contenido de la tarjeta de país se envuelve dentro de un div con una clase CSS 
llamada "card" importada desde el archivo "./country.module.css". 
Dentro del div, hay un encabezado h1 con el nombre del país, 
un encabezado h3 con el continente del país, 
una imagen con la bandera del país 
y un encabezado h3 con el ID del país. 
Cada elemento tiene una clase CSS específica para darle estilo al componente.
*/
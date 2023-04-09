import axios from "axios";
import { Fragment, useEffect, useState } from "react"; //hooks
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import style from './countryDetails.module.css';

export default function CountryDetails() {
    const [country, setCountry] = useState(null);
    let { id } = useParams();
    useEffect(() => {
        axios.get(`/api/country/${id}`)
            .then((response) => {
                setCountry(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
        return () => {
            setCountry(null);
        };
    }, [id]);

    return <div className={style.card}>
        {
            country ?
                <Fragment>
                    <Link to='/home' >
                        <button className={style.button}>back to home</button>
                    </Link>
                    <h1 className={style.h1}>{country[0].name} </h1>
                    <img className={style.flag} src={country[0].flag} alt='flag' />
                    <h3 className={style.h3}>Country Id: {id}</h3>
                    <h3 className={style.h3}>Continent: {country[0].continent}</h3>
                    <h3 className={style.h3}>Capital: {country[0].capital}</h3>
                    <h3 className={style.h3}>Subregion: {country[0].subregion}</h3>
                    <h3 className={style.h3}>Area: {country[0].area.toLocaleString('es-ES')} km²</h3>
                    <h3 className={style.h3}>Population: {country[0].population.toLocaleString('es-ES')} 👫</h3>
                    {country[0].activities.length > 0
                        ? country[0].activities.map(ac => {
                            return (
                                <Fragment>
                                    <div>
                                        <br></br>
                                        <hr size="2" width="50%" color="#EE82EE"></hr>
                                        <hr size="3" width="100%" color="#14F5F5D0"></hr>
                                        <hr size="2" width="50%" color="#9400D3"></hr>
                                        <h2 className={style.h2}>Activity name: {ac.name}</h2>
                                        <h4 className={style.h4}>Physical Difficulty: {ac.physicalDifficulty}</h4>
                                        <h4 className={style.h4}>Technical Difficulty: {ac.technicalDifficulty}</h4>
                                        <h4 className={style.h4}>Duration: {ac.duration} hours ⏱</h4>
                                        <h4 className={style.h4}>Season: {ac.season}</h4>
                                    </div>
                                </Fragment>

                            );
                        })
                        : <h3 className={style.error}>⚠There are no activities yet...⚠
                            <Link to='/add'>
                                <p> ⏩Click here to adding one... ➕⏪  </p>
                            </Link>
                        </h3>
                    };
                </Fragment> :
                <div>Loading...⌛</div>
        };
    </div>
};

/*
Este es un componente donde muestro los detalles de un país. 

Defino dos estados del componente "country" que es el objeto que contendrá 
la información del país seleccionado y lo inicializo en "null". 
"setCountry" es la función que utilizo para actualizar el estado de "country".

En el componente uso el hook "useParams" de "react-router-dom" 
para obtener el "id" del país de la URL. 
Luego, utilizo el hook "useEffect" para hacer una llamada a la API del servidor 
que me devuelve los detalles del país usando Axios.

Cuando el componente se carga por primera vez o cuando "id" cambia, 
"useEffect" realiza una llamada a la API y actualiza el estado de "country" 
con la información obtenida.
Cuando la respuesta es exitosa, los detalles del país se almacenan 
en el estado del componente usando el hook "useState".

En el método return del componente, 
verifico si se han obtenido los detalles del país. 
Si es así, muestro la información detallada del país, 
incluyendo su nombre, bandera, capital, área, población y actividades. 

Las actividades se representan como una lista de objetos y las muestro 
utilizando la función map iterando a través de ellas.
Si el país no tiene ninguna actividad, 
muestro un mensaje de advertencia y un enlace para agregar una actividad
(utilizando la etiqueta <Link> de "react-router-dom"). 
Si los detalles del país aún no se han cargado, 
muestro un mensaje de carga.
*/
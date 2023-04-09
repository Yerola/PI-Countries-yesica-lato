import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import style from './AddActivities.module.css';
import { Link } from "react-router-dom";
import { postActivity } from "../../redux/action";
import { useHistory } from "react-router";

export default function AddActivities() {
    let dispatch = useDispatch();
    let history = useHistory();
    let allCountries = useSelector((state) => state.countries);

    const [error, setError] = useState({
        countryId: [],
        name: "",
        physicalDifficulty: "",
        technicalDifficulty: "",
        duration: "",
        season: "",
    });

    const [country, setCountry] = useState({
        countryId: [],
        name: "",
        physicalDifficulty: "",
        technicalDifficulty: "",
        duration: "",
        season: "",
    });

    function validate(country) {
        let error = {};
        if (!country.countryId) {
            error.countryId = 'Please select Id';
        } else if (!country.name) {
            error.name = 'Please select activity';
        } else if (!country.duration) {
            error.duration = 'Please select a duration';
        } else if (!country.physicalDifficulty) {
            error.physicalDifficulty = 'Please select Difficulty';
        }
        else if (!country.technicalDifficulty) {
            error.technicalDifficulty = 'Please select Degree of Difficulty';
        } else if (!country.season) {
            error.season = 'Please select a season';
        }
        return error;
    };

    function onInputChange(e) {
        e.preventDefault();
        setCountry({
            ...country,
            [e.target.name]: e.target.value
        });
        setError(validate({
            ...country,
            [e.target.name]: e.target.value,
        }));
    };

    function handleSelect(e) {
        let existe = country.countryId.includes(e.target.value);
        if (!existe) {
            setCountry({
                ...country,
                countryId: [...country.countryId, e.target.value]
            });
        };
    };

    function handleDelete(el) {
        setCountry({
            ...country,
            countryId: country.countryId.filter(id => id !== el)
        });
    };

    function onSubmit(e) {
        e.preventDefault();

        const validationErrors = validate(country);
        setError(validationErrors);
        if (Object.keys(validationErrors).length === 0) {

            dispatch(postActivity(country)); // reducer 

            alert('Your activity was successfully created');
            setCountry({
                countryId: "",
                name: "",
                physicalDifficulty: "",
                technicalDifficulty: "",
                duration: "",
                season: "",
            });
            history.push('/home');
        }
    };

    return (
        <div className={style.div}>
            <Link
                className={style.link} to='/home'>
                <br />
                <center>
                    <button className={style.button}>Back to Home</button>
                </center>
            </Link>
            <h1 className={style.h1}>🚲🧗‍♀️🏌️‍♂️🎿Create Activity🎣⚽🏃‍♀️🏇</h1>

            <form onSubmit={onSubmit}>
                <div >
                    <h3 className={style.h3}>Select Countries to your Activities</h3>
                    <select
                        className={style.select}
                        name='countryId'
                        onChange={handleSelect}
                        value={country.countryId} >

                        <option value="Select Country Name" key={-1}>Select Country Name</option>
                        {allCountries && allCountries
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((country, i) => (
                                <option value={country.id} key={i}>
                                    {country.name} ({country.id})
                                </option>
                            ))}
                        {error.countryId && <p>{error.countryId}</p>}
                    </select>

                    <div>
                        {country.countryId.map((el) =>
                        (<div >
                            <button
                                className={style.x}
                                onClick={(e) => handleDelete(el)}
                            >❌ {el}
                            </button>
                        </div>)
                        )}
                    </div>

                    <h3 className={style.h3}>Activity Name:</h3>
                    <select
                        className={style.select}
                        name='name'
                        onChange={onInputChange}
                        value={country.name}>
                        <option value="Select Activity Name">Select Activity Name</option>
                        <option value="Adventure Turism">Adventure Turism ⛺🪂</option>
                        <option value="Art gallery tours">Art gallery tours 🎨🖼👨‍🎨</option>
                        <option value="Bádminton">Bádminton 🏸</option>
                        <option value="Basketball">Basketball 🏀</option>
                        <option value="Boxing">Boxing 🥊</option>
                        <option value="City walking tours">City walking tours 🌆🏙🚶‍♂️</option>
                        <option value="Climbing">Climbing 🧗‍♀️</option>
                        <option value="Cricket">Cricket 🏏</option>
                        <option value="Cycling tours">Cycling tours 🚲</option>
                        <option value="Farm visits ">Farm visits 🐄🐖🐓</option>
                        <option value="Fencing">Fencing 🤺</option>
                        <option value="Fishing">Fishing 🎣</option>
                        <option value="Football">Football 🏈</option>
                        <option value="Gastronomic Tour">Gastronomic Tour 🍽</option>
                        <option value="Golf">Golfing 🏌️‍♂️</option>
                        <option value="Hiking">Hiking 🥾</option>
                        <option value="Historical tours">Historical tours 🕰🚶‍♀️</option>
                        <option value="Hockey">Hockey 🏑🏒</option>
                        <option value="Horse Riding">Horse Riding 🏇</option>
                        <option value="Kayaking">Kayaking 🛶</option>
                        <option value="Marathons">Marathons 🏃‍♀️🏃‍♂️</option>
                        <option value="Martial Arts">Martial Arts 🥋</option>
                        <option value="Music festivals">Music festivals 🎆🎶</option>
                        <option value="Museum visits">Museum visits 👁‍🗨🖼</option>
                        <option value="Ping Pong">Ping Pong 🏓</option>
                        <option value="Racing">Racing 🏁🚘</option>
                        <option value="Rugby">Rugby 🏉</option>
                        <option value="Scuba and snorkel diving">Scuba diving 🤿</option>
                        <option value="Skating">Skating ⛸</option>
                        <option value="Skydiving">Skydiving 🎿</option>
                        <option value="Snowboard">Snowboard 🏂</option>
                        <option value="Soccer">Soccer ⚽</option>
                        <option value="Sport Competition">Sport Competition 🤸‍♀️🤸‍♂️🏅</option>
                        <option value="Swimming">Swimming 🏊‍♀️🏊‍♂️</option>
                        <option value="Tennis">Tennis 🎾</option>
                        <option value="Theme parks">Theme parks 🎢</option>
                        <option value="Triathlons">Triathlons 🏃‍♀️🏊‍♀️🚴‍♀️</option>
                        <option value="Volley">Volley 🏐</option>
                        <option value="Waterpolo">Waterpolo 🤽‍♀️🤽‍♂️</option>
                        <option value="Wildlife watching">Wildlife watching 👀</option>
                        <option value="Wine tasting ">Wine tasting 🍷</option>
                        <option value="Yoga retreats">Yoga retreats 🧘‍♂️🧘‍♀️</option>
                        {error.name && (<option>{error.name} </option>)}
                    </select>
                </div>

                <div>
                    <h3 className={style.h3}>Duration:</h3>
                    <select
                        className={style.select}
                        onChange={onInputChange}
                        name='duration'
                        type='text'
                        value={country.duration}
                    >
                        <option value="Duration">Select Duration</option>
                        <option value="1">1 hour</option>
                        <option value="2">2 hour</option>
                        <option value="3">3 hour</option>
                        <option value="4">4 hour</option>
                        <option value="5">more than 5 hours</option>
                        {error.duration && (
                            <option>
                                {error.duration}
                            </option>
                        )};
                    </select>
                </div>

                <div>
                    <h3 className={style.h3}>Difficulty</h3>
                    <select
                        className={style.select}
                        name='physicalDifficulty'
                        onChange={onInputChange}
                        value={country.physicalDifficulty}
                    >
                        <option value="Select Difficulty">Select Difficulty</option>
                        <option value="1">1-Light</option>
                        <option value="2">2-Moderate</option>
                        <option value="3">3-Normal</option>
                        <option value="4">4-Strong</option>
                        <option value="5">5-Very Strong</option>
                        {error.physicalDifficulty && (
                            <option>
                                {error.physicalDifficulty}
                            </option>
                        )};
                    </select>
                </div>

                <div>
                    <h3 className={style.h3}>Degree of Difficulty</h3>
                    <select
                        className={style.select}
                        name='technicalDifficulty'
                        onChange={onInputChange}
                        value={country.technicalDifficulty}
                    >
                        <option value="Degree of Difficulty">Select Degree of Difficulty</option>
                        <option value="1">1-Beginner</option>
                        <option value="2">2-Easy</option>
                        <option value="3">3-Moderate</option>
                        <option value="4">4-Challenging</option>
                        <option value="5">5-Professional</option>
                        {error.technicalDifficulty && (
                            <option>
                                {error.technicalDifficulty}
                            </option>
                        )};
                    </select>
                </div>

                <div>
                    <h3 className={style.h3}>Season</h3>
                    <select
                        className={style.select}
                        name='season'
                        onChange={onInputChange}
                        value={country.season}
                    >
                        <option value="Select Season">Select Season</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                        {error.season && (
                            <option>
                                {error.season}
                            </option>
                        )};
                    </select>
                </div>
                <br />
                <center>
                    <button
                        className={`${style.button} 
                                    ${(!country.name ||
                                !country.countryId ||
                                !country.technicalDifficulty
                                || !country.physicalDifficulty
                                || !country.season
                                || !country.duration) ? style.disabled : ''}`}
                        type='submit'
                        onClick={onSubmit}
                        onChange={onInputChange}
                        disabled={
                            !country.name
                            || !country.countryId
                            || !country.technicalDifficulty
                            || !country.physicalDifficulty
                            || !country.season
                            || !country.duration}>
                        🟢Create Activity✔
                    </button>
                    <select id="errors" defaultValue={Object.values(error)}>
                        {Object.values(error).length === 0 ? (<option value="">-- All Fields Complete --</option>)
                            : (
                                <option
                                    value={JSON.stringify(error)}>{Object.values(error)}
                                </option>)}
                    </select>
                </center>
            </form>
        </div>
    );
};

/*
A continuación, explicaré su funcionalidad en términos generales:
-Importaciones: 
El código comienza importando diferentes paquetes y funciones de React 
y de su framework Redux. También se importan algunos estilos de un archivo CSS local 
y dos funciones que se utilizarán más adelante en el código.

-Componente AddActivities: 
Esta es la función principal que se exporta y que contiene todo el código. 
Este componente utiliza varios hooks de React, como useState, useDispatch, useSelector 
y useHistory, que se explicarán más abajo.

-Variables de estado: 
El componente define dos variables de estado utilizando el hook useState de React: 
una para guardar los errores que se puedan presentar en el formulario 
y otra para guardar la información de la actividad que se están creando. 
Ambas variables de estado tienen la misma estructura: 
un objeto con diferentes propiedades, como: 
countryId (el identificador del país), 
name (el nombre de la actividad), 
physicalDifficulty (la dificultad física de la actividad), 
technicalDifficulty (la dificultad técnica de la actividad), 
duration (la duración de la actividad) 
y season (la temporada o estación en la que se realiza la actividad).

-Función validate: 
Esta función se encarga de validar los campos del formulario 
y devuelve un objeto con los errores encontrados. 
Si todos los campos están completos, devuelve un objeto vacío. 
Se utiliza en la función onSubmit, que se explicará más abajo.

-Función onInputChange: 
Esta función se ejecuta cada vez que hay un cambio en uno de los campos del formulario 
y actualiza la variable de estado "country" con el valor correspondiente. 
Además, utiliza la función "validate" para actualizar la variable de estado "error" 
con los errores correspondientes.

-Función handleSelect: 
Esta función se ejecuta cuando se selecciona un país en el formulario 
y actualiza la variable de estado "country" con el valor correspondiente. 
También utiliza la función "validate" para actualizar la variable de estado "error" 
con los errores correspondientes.

-Función handleDelete: 
Esta función se ejecuta cuando se elimina un país seleccionado en el formulario 
y actualiza la variable de estado country con el valor correspondiente.

-Función onSubmit: 
Esta función se ejecuta cuando se envía el formulario y valida los campos utilizando 
la función "validate". Si no hay errores, utiliza la función "postActivity" 
del paquete Redux para enviar la información de la actividad al servidor 
y mostrar una alerta de éxito. 
También resetea las variables de estado "country" y "error" y redirige al usuario 
a la página de inicio.

-Return: 
En la última sección de mi código, 
se presenta el JSX que se renderiza en el navegador. 
Este JSX incluye varios elementos HTML y utiliza las variables de estado 
y las funciones explicadas anteriormente para crear el formulario 
y mostrar los errores en tiempo real. 
Además, incluye un botón para volver a la página de inicio 
y un título que indica que se está creando una actividad.
*/
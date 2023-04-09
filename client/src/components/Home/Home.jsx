import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from '../../redux/action';
import Country from "../Country/country";
import Paginated from "../Paginated/paginated";
import SearchBar from "../SearchBar/searchBar";
import Order from "../Order/order";
import style from './Home.module.css';
import { Link } from "react-router-dom";
import github from "../../img/github.png";
import linkedIn from "../../img/linkedIn.png";
import instagram from "../../img/instagram.png";
import yo from "../../img/Yesica_Lato_Icon.ico";

export default function Home() {
    let allCountries = useSelector((state) => state.filterCountries);
    /*
    Uso el hook "useSelector" de Redux para obtener el estado de "filterCountries" 
    del store global de Redux y le asigno la variable "allCountries".       
    */
    let dispatch = useDispatch(); //Uso el hook "useDispatch" de Redux y le asigno la variable "dispatch".
    let [currentPage, setCurrentPage] = useState(1); // estado local de mi página
    /*
    Uso el hook "useState" de React para crear un estado local llamado "currentPage" 
    y le asigno la variable "setCurrentPage". 
    El valor inicial de "currentPage" es 1.
    */
    let [countriesPerPage] = useState(10);//Creo una constante llamada "countriesPerPage" y le asigno el valor 10.
    let indexOfLastCountry = (currentPage * countriesPerPage);
    /*
    Calculo el índice del último país de la página actual multiplicando 
    "currentPage" por "countriesPerPage" y le asigno la variable "indexOfLastCountry".
    */
    let indexOfFirstCountry = (indexOfLastCountry - countriesPerPage);
    /*
    Calculo el índice del primer país de la página actual 
    restando "countriesPerPage" del índice del último país de la página actual 
    y le asigno la variable "indexOfFirstCountry".
    */
    let currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    /*
    Uso el método "slice" de JavaScript para extraer un subconjunto de "allCountries" 
    que va desde "indexOfFirstCountry" hasta "indexOfLastCountry" 
    y le asigno la variable "currentCountries".
    */
    let paginated = (pageNumber) => { setCurrentPage(pageNumber) };
    /*
    Defino una función llamada "paginated" 
    que toma de argumento "pageNumber" y se lo asigno a "setCurrentPage".
    */

    function handleOnclick(e) {
        e.preventDefault();
        dispatch(fetchCountry())
    };

    /*
    Defino una función llamada "handleOnclick" 
    que toma un evento "e" como argumento y llama a "fetchCountry" usando "dispatch". 
    Previene el comportamiento predeterminado del evento con "preventDefault" para que no se refresque la página.
    */

    return (
        <div>
            <Link to='/add' className={style.rayita}>
                <center>
                    <button className={style.by}>🚲🧗‍♀️🏌️‍♂️🎿Create Activity🎣⚽🏃‍♀️🏇</button>
                </center>
            </Link>
            <center>
                <Link to="/" className={style.rayita}>
                    <button className={style.by}> Back to the Landing... 🤗🌎</button>
                </Link>
            </center>
            <div className='containerIcons'>
                <a href="https://github.com/Yerola" target="_blank"
                    rel="noopener noreferrer"><img className='socials' src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/yesica-lato/" target="_blank"
                    rel="noopener noreferrer"><img className='socials' src={linkedIn} alt="linkdlin" /></a>
                <a href="https://www.instagram.com/ye.ro.la/" target="_blank"
                    rel="noopener noreferrer"><img className='socials' src={instagram} alt="instagram" /></a>
            </div>
            <h1 className={style.h1}>World´s Countries</h1>
            <SearchBar />
            <Order />
            <center>
                <input
                    type='submit'
                    value='A l l  C o u n t r i e s'
                    className={style.allcountries}
                    onClick={e => { handleOnclick(e) }}
                />
            </center>
            {currentCountries?.map((country) => {
                return <Country
                    key={country.id}
                    name={country.name}
                    population={country.population}
                    continent={country.continent}
                    flag={country.flag}
                    id={country.id}
                />
            })}
            <Paginated
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paginated={paginated}
            />
            <center>
                <h2 className={style.by2}>✨ Developed by Yesica Romina Lato ✨</h2>
                <img src={yo} alt="yo" border="10px" />
            </center>
            <h2 className={style.aboutSubContainer}>This project is part of the Bootcamp of
                <a href="https://www.soyhenry.com/" className="outLinks" target="_blank" rel="noreferrer"> Soy Henry
                </a></h2>
        </div>
    );
};
/*
Este componente renderiza una lista de países, 
que pueden ser filtrados y ordenados, 
y una barra de búsqueda para buscar países específicos. 
*/
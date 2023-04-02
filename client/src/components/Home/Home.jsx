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

export default function Home() {
    let allCountries = useSelector((state) => state.filterCountries);
    let dispatch = useDispatch(); //
    let [currentPage, setCurrentPage] = useState(1); // estado local de mi página
    let [countriesPerPage] = useState(10);
    let indexOfLastCountry = (currentPage * countriesPerPage);
    let indexOfFirstCountry = (indexOfLastCountry - countriesPerPage);
    let currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    let paginated = (pageNumber) => { setCurrentPage(pageNumber) };

    function handleOnclick(e) {
        e.preventDefault();
        dispatch(fetchCountry())
    };

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
            <center><h2 className={style.by2}>✨ Developed by Yesica Romina Lato ✨</h2></center>
            <h2 className={style.aboutSubContainer}>This project is part of the Bootcamp of <a href="https://www.soyhenry.com/" className="outLinks" target="_blank" rel="noreferrer">Soy Henry</a></h2>
        </div>
    );
};

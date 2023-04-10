/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './paginated.css';
import { useState } from "react";

export default function Paginated({ countriesPerPage, allCountries, paginated }) {
    const [activeButton, setActiveButton] = useState(1);
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumber.push(i);
    };

    const handleButtonClick = (number) => {
        paginated(number);
        setActiveButton(number);
    };

    const prevButton = (
        <li>
            <a
                onClick={() => handleButtonClick(activeButton - 1)}
                className={activeButton === 1 ? "disabled" : ""}
            >
                Prev
            </a>
        </li>
    );

    const nextButton = (
        <li>
            <a
                onClick={() => handleButtonClick(activeButton + 1)}
                className={activeButton === pageNumber.length ? "disabled" : ""}
            >
                Next
            </a>
        </li>
    );

    let pagesToRender = [];
    let minPage = activeButton - 5 >= 1 ? activeButton - 5 : 1;
    let maxPage = minPage + 9 <= pageNumber.length ? minPage + 9 : pageNumber.length;

    for (let i = minPage; i <= maxPage; i++) {
        pagesToRender.push(i);
    }

    return (
        <section className="paginated">
            <ul>
                {prevButton}
                {pagesToRender.map(number => (
                    <li href='number' key={number}>
                        <a
                            className={number === activeButton ? "active" : ""}
                            onClick={() => handleButtonClick(number)}>
                            {number}
                        </a>
                    </li>
                ))};
                {nextButton}
            </ul>
        </section>
    );
};

/*
Para el paginado definí un botón "prev" y un botón "next" 
en el comienzo y final de la sección de paginación. 
Establecí la clase "disabled" en los botones prev y next 
cuando el botón está en el primer o último número, respectivamente.

La variable "pagesToRender" se utiliza para almacenar el número de páginas 
que se mostrarán. Establecí "minPage" como el número de página actual menos 5 o 1, 
si esto último es mayor. Luego, establecí "maxPage" como el número de "minPage" 
más 9 o el número total de páginas, si esto último es menor.

Utilizo un ciclo for para empujar cada número de página en "pagesToRender". 
Finalmente, renderizo el botón "prev", el botón "next" y 
las páginas renderizadas en el "ul".
*/

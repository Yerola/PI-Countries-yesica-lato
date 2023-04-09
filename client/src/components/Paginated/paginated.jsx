/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './paginated.css';

export default function Paginated({ countriesPerPage, allCountries, paginated }) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumber.push(i);
    };
    return (
        <section className="paginated">
            <ul>
                {pageNumber &&
                    pageNumber.map(number => (
                        <li href='number' key={number}>
                            <a onClick={() => paginated(number)}> {number}</a>
                        </li>
                    ))};
            </ul>
        </section>
    );
};
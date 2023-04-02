import React from 'react';
import { Link } from 'react-router-dom';
import style from './landPage.module.css';

export default function LandingPage() {
    return (
        <div>
            <h1 className={style.h1}>Click on the world to "Api Countries"</h1>
            <Link
                className={style.link}
                to='/Home'
            >
                <input
                    className={style.boton}
                    type='submit'
                    value='Click'
                />
            </Link>
            <h2 className={style.h2}>by Yesica Romina Lato</h2>
        </div>
    );
};
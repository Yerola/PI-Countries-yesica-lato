import React from 'react';
import { Link } from 'react-router-dom';
import style from './landPage.module.css';

export default function LandingPage() {
    return (
        <div>
            <h2 className={style.h2}>Click on the world to "Api Countries"</h2>
            <Link
                className={style.link}
                to='/Home'
            >
                <input
                    className={style.boton}
                    type='submit'
                    value=''
                />
            </Link>
            <h3 className={style.h3}>by Yesica Romina Lato</h3>
        </div>
    );
};
import React from "react";
import { Link } from "react-router-dom";
import style from './Error.module.css';
import error from "../../img/404-error-lost-in-space.jpg";

export default function Error() {
  return (
    <div>
      <center>
        <Link to="/Home" className={style.rayita}>
          <button className={style.by}> Back to the Home... 🤗🌎</button>
        </Link>
      </center>
      <h1>Error 404</h1>
      <center><img src={error} alt="error" border="10px" /></center>
      <h2>Route not found</h2>
    </div>
  )
};
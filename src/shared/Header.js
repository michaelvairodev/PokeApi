import React, { Fragment } from "react";
import logo from "../assets/pokeapi_logo_256.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Fragment>
      <nav className={styles.Header}>
        <img src={logo} alt="Logo PokeApi" />
        <ul>
          <li>
            <a href="/">Github ↗</a>
          </li>
          <li>
            <a href="/">Documentación ↗</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>
      ;
    </Fragment>
  );
}

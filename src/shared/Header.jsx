import React, { Fragment } from 'react';
import logo from '../assets/pokeapi_logo_256.png';
import Search from '../components/Search';
import styles from './Header.module.css';
import iconMenuResponsive from '../assets/menu_icon.png';

import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Header() {
  return (
    <Fragment>
      <Router>
        <nav className={styles.Header}>
          <button className={styles.menu_responsive}>
            <img src={iconMenuResponsive} alt='' />
          </button>
          <Link to='/'>
            <img src={logo} alt='Logo PokeApi' />
          </Link>
          <ul className={styles.menu}>
            <li>
              <a href='https://github.com/michaelvairodev'>Github ↗</a>
            </li>
            <li>
              <a href='/'>Docs ↗</a>
            </li>
            <li>
              <button>CONTACTO</button>
            </li>
          </ul>
        </nav>
      </Router>
      <Search />
    </Fragment>
  );
}

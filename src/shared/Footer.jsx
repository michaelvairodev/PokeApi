import React, { Fragment } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Fragment>
      <footer className={styles.Footer}>
        <p>
          Desarrollado por:
          <a href='http://www.michaelvairo.com'>Michael Vairo</a>
        </p>
      </footer>
      ;
    </Fragment>
  );
}

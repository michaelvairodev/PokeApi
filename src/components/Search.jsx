import React, { Fragment } from 'react';
import filterIcon from '../assets/filter_icon.png';
import gridIcon from '../assets/grid_icon.png';
import styles from './Search.module.css';

const Search = () => {
  return (
    <Fragment>
      <div className={styles.Search}>
        <input type='text' placeholder='Pokémon...' />
        <button>
          <img src={gridIcon} alt='' />
        </button>
        <button>
          <img src={filterIcon} alt='' />
        </button>
      </div>
    </Fragment>
  );
};

export default Search;

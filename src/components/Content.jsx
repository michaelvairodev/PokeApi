import React, { Fragment } from 'react';
import styles from './Content.module.css';

//IMPORTACIONES TEMPORALES
import defIcon from '../assets/def_icon.png';
import atkIcon from '../assets/atk_icon.png';
import especialIcon from '../assets/especial_icon.png';
import imgPokemon from '../assets/bulbasaur.svg';

export default function Content() {
  return (
    <Fragment>
      <div className={styles.Content}>
        <div className={styles.card}>
          <div className={styles.card_top}>
            <span className={styles.card_top_id}>#1</span>
            <span className={styles.card_top_type}>Planta</span>
          </div>
          <img className={styles.card_img} src={imgPokemon} alt='' />
          <p className={styles.card_name}>Bulbasaur</p>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_left}>
              <div className={styles.card_bottom_left_atk}>
                <img src={atkIcon} alt='' />
                <span>25</span>
              </div>
              <br />
              <div className={styles.card_bottom_left_def}>
                <img src={defIcon} alt='' />
                <span>10</span>
              </div>
            </div>
            <div className={styles.card_bottom_right_especial}>
              <img src={especialIcon} alt='' />
              <span>82</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_top}>
            <span className={styles.card_top_id}>#1</span>
            <span className={styles.card_top_type}>Planta</span>
          </div>
          <img className={styles.card_img} src={imgPokemon} alt='' />
          <p className={styles.card_name}>Bulbasaur</p>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_left}>
              <div className={styles.card_bottom_left_atk}>
                <img src={atkIcon} alt='' />
                <span>25</span>
              </div>
              <br />
              <div className={styles.card_bottom_left_def}>
                <img src={defIcon} alt='' />
                <span>10</span>
              </div>
            </div>
            <div className={styles.card_bottom_right_especial}>
              <img src={especialIcon} alt='' />
              <span>82</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_top}>
            <span className={styles.card_top_id}>#1</span>
            <span className={styles.card_top_type}>Planta</span>
          </div>
          <img className={styles.card_img} src={imgPokemon} alt='' />
          <p className={styles.card_name}>Bulbasaur</p>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_left}>
              <div className={styles.card_bottom_left_atk}>
                <img src={atkIcon} alt='' />
                <span>25</span>
              </div>
              <br />
              <div className={styles.card_bottom_left_def}>
                <img src={defIcon} alt='' />
                <span>10</span>
              </div>
            </div>
            <div className={styles.card_bottom_right_especial}>
              <img src={especialIcon} alt='' />
              <span>82</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_top}>
            <span className={styles.card_top_id}>#1</span>
            <span className={styles.card_top_type}>Planta</span>
          </div>
          <img className={styles.card_img} src={imgPokemon} alt='' />
          <p className={styles.card_name}>Bulbasaur</p>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_left}>
              <div className={styles.card_bottom_left_atk}>
                <img src={atkIcon} alt='' />
                <span>25</span>
              </div>
              <br />
              <div className={styles.card_bottom_left_def}>
                <img src={defIcon} alt='' />
                <span>10</span>
              </div>
            </div>
            <div className={styles.card_bottom_right_especial}>
              <img src={especialIcon} alt='' />
              <span>82</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_top}>
            <span className={styles.card_top_id}>#1</span>
            <span className={styles.card_top_type}>Planta</span>
          </div>
          <img className={styles.card_img} src={imgPokemon} alt='' />
          <p className={styles.card_name}>Bulbasaur</p>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_left}>
              <div className={styles.card_bottom_left_atk}>
                <img src={atkIcon} alt='' />
                <span>25</span>
              </div>
              <br />
              <div className={styles.card_bottom_left_def}>
                <img src={defIcon} alt='' />
                <span>10</span>
              </div>
            </div>
            <div className={styles.card_bottom_right_especial}>
              <img src={especialIcon} alt='' />
              <span>82</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_top}>
            <span className={styles.card_top_id}>#1</span>
            <span className={styles.card_top_type}>Planta</span>
          </div>
          <img className={styles.card_img} src={imgPokemon} alt='' />
          <p className={styles.card_name}>Bulbasaur</p>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_left}>
              <div className={styles.card_bottom_left_atk}>
                <img src={atkIcon} alt='' />
                <span>25</span>
              </div>
              <br />
              <div className={styles.card_bottom_left_def}>
                <img src={defIcon} alt='' />
                <span>10</span>
              </div>
            </div>
            <div className={styles.card_bottom_right_especial}>
              <img src={especialIcon} alt='' />
              <span>82</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_top}>
            <span className={styles.card_top_id}>#1</span>
            <span className={styles.card_top_type}>Planta</span>
          </div>
          <img className={styles.card_img} src={imgPokemon} alt='' />
          <p className={styles.card_name}>Bulbasaur</p>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_left}>
              <div className={styles.card_bottom_left_atk}>
                <img src={atkIcon} alt='' />
                <span>25</span>
              </div>
              <br />
              <div className={styles.card_bottom_left_def}>
                <img src={defIcon} alt='' />
                <span>10</span>
              </div>
            </div>
            <div className={styles.card_bottom_right_especial}>
              <img src={especialIcon} alt='' />
              <span>82</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_top}>
            <span className={styles.card_top_id}>#1</span>
            <span className={styles.card_top_type}>Planta</span>
          </div>
          <img className={styles.card_img} src={imgPokemon} alt='' />
          <p className={styles.card_name}>Bulbasaur</p>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_left}>
              <div className={styles.card_bottom_left_atk}>
                <img src={atkIcon} alt='' />
                <span>25</span>
              </div>
              <br />
              <div className={styles.card_bottom_left_def}>
                <img src={defIcon} alt='' />
                <span>10</span>
              </div>
            </div>
            <div className={styles.card_bottom_right_especial}>
              <img src={especialIcon} alt='' />
              <span>82</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

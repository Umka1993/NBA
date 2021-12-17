import React from 'react';
import s from './navigationFooter.module.scss';
import arrow from 'assets/icon/chevron_right_24px.png';
import { ItemsPerPage } from '../ItemsPerPage/ItemsPerPage';

export const NavigationFooter = () => {
  return (
    <div className={s.navFooter}>
      <div className={s.pagination}>
        <span className={s.arrowLeft}>
          <img src={arrow} alt="arrow" />
        </span>
        <ul>
          <li className={s.active}>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>...</li>
          <li>27</li>
        </ul>
        <span className={s.arrowRight}>
          <img src={arrow} alt="arrow" />
        </span>
      </div>

      <ItemsPerPage />
    </div>
  );
};

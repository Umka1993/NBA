import React from 'react';
import s from './searchInput.module.scss';
import search from '../../../../assets/icon/search.png';

export const SearchInput = (): JSX.Element => {
  return (
    <div className={s.navInput}>
      <input type="text" placeholder="Search..." />
      <div className={s.inputImg}>
        <img src={search} alt="search" />
      </div>
    </div>
  );
};

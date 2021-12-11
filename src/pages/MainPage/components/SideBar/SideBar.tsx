import React from 'react';
import s from './sideBar.module.scss';
import groupPerson from 'assets/icon/group_person.png';
import person from 'assets/icon/person.png';
import logout from 'assets/icon/logout.png';
import { Link } from 'react-router-dom';

export const SideBar = (): JSX.Element => {
  return (
    <div className={s.sideBar}>
      <div className={s.generalItems}>
        <Link to="Teams" className={s.items}>
          <div className={s.itemsImg}>
            <img src={groupPerson} alt="groupPerson" />
          </div>
          <p>Teams</p>
        </Link>
        <Link to="Players" className={s.items}>
          <div className={s.itemsImg}>
            <img src={person} alt="person" />
          </div>
          <p>Players</p>
        </Link>
      </div>
      <div className={s.itemsLogout}>
        <div className={s.itemsImg}>
          <img src={logout} alt="logout" />
        </div>
        <p>Sign out</p>
      </div>
    </div>
  );
};

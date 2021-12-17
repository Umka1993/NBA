import React from 'react';
import s from './sideBar.module.scss';
import groupPerson from 'assets/icon/teamsActive.png';
import person from 'assets/icon/players.png';
import logout from 'assets/icon/logout.png';
import { NavLink } from 'react-router-dom';

export const SideBar = (): JSX.Element => {
  return (
    <div className={s.sideBar}>
      <div className={s.generalItems}>
        <NavLink to="Teams" activeClassName="active" className={s.items}>
          <div className="teamsImg"></div>
          <p>Teams</p>
        </NavLink>
        <NavLink to="Players" activeClassName="active" className={s.items}>
          <div className="playersImg"></div>
          <p>Players</p>
        </NavLink>
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

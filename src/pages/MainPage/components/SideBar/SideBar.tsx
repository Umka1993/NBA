import React from 'react';
import s from './sideBar.module.scss';
import groupPerson from 'assets/icon/group_person.png';
import person from 'assets/icon/person.png';
import logout from 'assets/icon/logout.png';

export const SideBar = (): JSX.Element => {
  return (
    <div className={s.sideBar}>
      <div className={s.generalItems}>
        <div className={s.items}>
          <div className={s.itemsImg}>
            <img src={groupPerson} alt="groupPerson" />
          </div>
          <p>Teams</p>
        </div>
        <div className={s.items}>
          <div className={s.itemsImg}>
            <img src={person} alt="person" />
          </div>
          <p>Players</p>
        </div>
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

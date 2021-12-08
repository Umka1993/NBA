import React from 'react';
import s from './header.module.scss';
import menu from 'assets/icon/menu.png';
import logo from 'assets/icon/logo.png';
import profilePhoto from 'assets/icon/profile.png';

export const Header = (): JSX.Element => {
  return (
    <div className={s.header}>
      <div className={s.wrap}>
        <div className={s.burger}>
          <img src={menu} alt="menu" />
        </div>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.userData}>
          <div className={s.userName}>
            <p>John Smith</p>
          </div>
          <div className={s.userAvatar}>
            <img src={profilePhoto} alt="userAvatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

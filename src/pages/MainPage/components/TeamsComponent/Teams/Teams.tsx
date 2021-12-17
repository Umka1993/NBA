import React, { useState } from 'react';
import s from './teams.module.scss';
import { SearchInput } from '../../SearchInput/SearchInput';
import { Button } from '../../../../../ui/buttons/Button/Button';
import { NavigationFooter } from '../../../../../ui/NavigationFooter/NavigationFooter';
import { NavLink, Outlet } from 'react-router-dom';
import { DefaultBlock } from '../../../../../ui/DefaultBlock/DefaultBlock';
import { NetTeams } from './NetTeams/NetTeams';
import defaultTeamsImg from 'assets/icon/defaultTeams.png';

export const Teams = () => {
  const [teams, setTeams] = useState(false);
  return (
    <>
      <div className={s.nav}>
        <SearchInput />
        <NavLink to={'addNewTeam'}>
          <Button>Add +</Button>
        </NavLink>
      </div>
      <div className={s.blockContent}>
        {/*{teams ? <NetTeams /> : <DefaultBlock img={defaultTeamsImg} />}*/}
        <Outlet />
      </div>
      <NavigationFooter />
    </>
  );
};

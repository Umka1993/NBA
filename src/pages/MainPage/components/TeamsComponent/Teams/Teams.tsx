import React, { useState } from 'react';
import s from './teams.module.scss';
import { SearchInput } from '../../SearchInput/SearchInput';
import { Button } from '../../../../../ui/buttons/Button/Button';
import { NavigationFooter } from '../../../../../ui/NavigationFooter/NavigationFooter';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../../../core/redux/hooks/redux';

export const Teams = () => {
  const [teams, setTeams] = useState(false);
  const { teamsCollection } = useAppSelector((state) => state.teamsReducer);

  return (
    <>
      <div className={s.nav}>
        <SearchInput />
        <NavLink to={'addNewTeam'}>
          <Button>Add +</Button>
        </NavLink>
      </div>
      <div className={s.blockContent}>
        <Outlet />
      </div>
      <NavigationFooter />
    </>
  );
};

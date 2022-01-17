import React, { useEffect, useState } from 'react';
import s from './teams.module.scss';
import { SearchInput } from '../../SearchInput/SearchInput';
import { Button } from '../../../../../ui/buttons/Button/Button';
import { NavigationFooter } from '../../../../../ui/NavigationFooter/NavigationFooter';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../../../core/redux/hooks/redux';
import { NetTeams } from './NetTeams/NetTeams';
import { DefaultBlock } from '../../../../../ui/DefaultBlock/DefaultBlock';
import defaultTeams from '../../../../../assets/icon/defaultTeams.png';
import { useDispatch } from 'react-redux';
import { teams } from '../../../../../modules/Commands/getComands/commandsThunk';
import { Loading } from '../../../../../ui/Loading/Loading';
import { IsError } from '../../../../../ui/IsError/IsError';

export const Teams = () => {
  // const [teams, setTeams] = useState(false);
  const teamsCollection = useAppSelector((state) => state.teamsReducer.teamsCollection);
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.nav}>
        <SearchInput />
        <NavLink to={'addNewTeam'}>
          <Button>Add +</Button>
        </NavLink>
      </div>
      <div className={s.blockContent}>
        {teamsCollection ? <NetTeams /> : <DefaultBlock img={defaultTeams} />}
      </div>
    </>
  );
};

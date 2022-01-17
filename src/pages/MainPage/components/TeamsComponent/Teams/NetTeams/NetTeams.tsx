import React, { useEffect } from 'react';
import s from './netTeams.module.scss';
import { useAppSelector } from '../../../../../../core/redux/hooks/redux';
import { NavigationFooter } from '../../../../../../ui/NavigationFooter/NavigationFooter';
import { useDispatch } from 'react-redux';
import { teams } from '../../../../../../modules/Commands/getComands/commandsThunk';
import { Team } from './Team/Team';

export const NetTeams = () => {
  const newCommand = useAppSelector((state) => state.addCommandReducer.newCommand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(teams());
  }, [newCommand]);

  return (
    <div className={s.wrapper}>
      <Team />
      <NavigationFooter />
    </div>
  );
};

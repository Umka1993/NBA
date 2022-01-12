import React, { useEffect } from 'react';
import s from './netTeams.module.scss';
import teamImg from 'assets/icon/teamImg.png';
import { useAppSelector } from '../../../../../../core/redux/hooks/redux';
import { NavigationFooter } from '../../../../../../ui/NavigationFooter/NavigationFooter';
import { useDispatch } from 'react-redux';
import { teams } from '../../../../../../modules/Commands/getComands/commandsThunk';

export const NetTeams = () => {
  const teamsCollection = useAppSelector((state) => state.teamsReducer.teamsCollection);
  const newCommand = useAppSelector((state) => state.addCommandReducer.newCommand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(teams());
  }, [newCommand]);

  const team = teamsCollection.map((team) => {
    return (
      <div className={s.teamCard}>
        <div className={s.mainCard}>
          <div className={s.teamImg}>
            <img src={`${process.env.REACT_APP_BASE_URL}${team.imageUrl}`} alt="teamImg" />
          </div>
        </div>
        <div className={s.teamInfo}>
          <div className={s.teamWrap}>
            <p className={s.teamName}>{team.name}</p>
            <p className={s.teamBirthday}>Year of foundation: {team.foundationYear}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={s.wrapper}>
      {team}
      <NavigationFooter />
    </div>
  );
};

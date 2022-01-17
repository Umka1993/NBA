import React from 'react';
import s from './team.module.scss';

import { useAppSelector } from '../../../../../../../core/redux/hooks/redux';

export const Team = () => {
  const teamsCollection = useAppSelector((state) => state.teamsReducer.teamsCollection);
  const team = teamsCollection.map((team) => {
    return (
      <div className={s.teamCard} key={team.id}>
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

  return <>{team}</>;
};

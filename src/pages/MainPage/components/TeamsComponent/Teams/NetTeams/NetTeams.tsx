import React from 'react';
import s from './netTeams.module.scss';
import teamImg from 'assets/icon/teamImg.png';

export const NetTeams = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.teamCard}>
        <div className={s.mainCard}>
          <div className={s.teamImg}>
            <img src={teamImg} alt="teamImg" />
          </div>
        </div>
        <div className={s.teamInfo}>
          <div className={s.teamWrap}>
            <p className={s.teamName}>Portland trail blazers</p>
            <p className={s.teamBirthday}>Year of foundation: 1970</p>
          </div>
        </div>
      </div>
      <div className={s.teamCard}>
        <div className={s.mainCard}>
          <div className={s.teamImg}>
            <img src={teamImg} alt="teamImg" />
          </div>
        </div>
        <div className={s.teamInfo}>
          <div className={s.teamWrap}>
            <p className={s.teamName}>Portland trail blazers</p>
            <p className={s.teamBirthday}>Year of foundation: 1970</p>
          </div>
        </div>
      </div>
      <div className={s.teamCard}>
        <div className={s.mainCard}>
          <div className={s.teamImg}>
            <img src={teamImg} alt="teamImg" />
          </div>
        </div>
        <div className={s.teamInfo}>
          <div className={s.teamWrap}>
            <p className={s.teamName}>Portland trail blazers</p>
            <p className={s.teamBirthday}>Year of foundation: 1970</p>
          </div>
        </div>
      </div>
      <div className={s.teamCard}>
        <div className={s.mainCard}>
          <div className={s.teamImg}>
            <img src={teamImg} alt="teamImg" />
          </div>
        </div>
        <div className={s.teamInfo}>
          <div className={s.teamWrap}>
            <p className={s.teamName}>Portland trail blazers</p>
            <p className={s.teamBirthday}>Year of foundation: 1970</p>
          </div>
        </div>
      </div>
      <div className={s.teamCard}>
        <div className={s.mainCard}>
          <div className={s.teamImg}>
            <img src={teamImg} alt="teamImg" />
          </div>
        </div>
        <div className={s.teamInfo}>
          <div className={s.teamWrap}>
            <p className={s.teamName}>Portland trail blazers</p>
            <p className={s.teamBirthday}>Year of foundation: 1970</p>
          </div>
        </div>
      </div>
      <div className={s.teamCard}>
        <div className={s.mainCard}>
          <div className={s.teamImg}>
            <img src={teamImg} alt="teamImg" />
          </div>
        </div>
        <div className={s.teamInfo}>
          <div className={s.teamWrap}>
            <p className={s.teamName}>Portland trail blazers</p>
            <p className={s.teamBirthday}>Year of foundation: 1970</p>
          </div>
        </div>
      </div>
    </div>
  );
};

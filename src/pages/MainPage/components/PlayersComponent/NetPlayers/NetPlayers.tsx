import React from 'react';
import s from './netPlayers.module.scss';
import player from '../../../../../assets/icon/player.png';

export const NetPlayers = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.playersCard}>
        <div className={s.mainCard}>
          <div className={s.playersImg}>
            <img src={player} alt="playersImg" />
          </div>
        </div>
        <div className={s.playersInfo}>
          <div className={s.playersWrap}>
            <p className={s.playersName}>
              Jaylen Adams <span className={s.numberPlayer}>#10</span>
            </p>
            <p className={s.teamName}>Portland trail blazers</p>
          </div>
        </div>
      </div>
      <div className={s.playersCard}>
        <div className={s.mainCard}>
          <div className={s.playersImg}>
            <img src={player} alt="playersImg" />
          </div>
        </div>
        <div className={s.playersInfo}>
          <div className={s.playersWrap}>
            <p className={s.playersName}>
              Jaylen Adams <span className={s.numberPlayer}>#10</span>
            </p>
            <p className={s.teamName}>Portland trail blazers</p>
          </div>
        </div>
      </div>
      <div className={s.playersCard}>
        <div className={s.mainCard}>
          <div className={s.playersImg}>
            <img src={player} alt="playersImg" />
          </div>
        </div>
        <div className={s.playersInfo}>
          <div className={s.playersWrap}>
            <p className={s.playersName}>
              Jaylen Adams <span className={s.numberPlayer}>#10</span>
            </p>
            <p className={s.teamName}>Portland trail blazers</p>
          </div>
        </div>
      </div>
      <div className={s.playersCard}>
        <div className={s.mainCard}>
          <div className={s.playersImg}>
            <img src={player} alt="playersImg" />
          </div>
        </div>
        <div className={s.playersInfo}>
          <div className={s.playersWrap}>
            <p className={s.playersName}>
              Jaylen Adams <span className={s.numberPlayer}>#10</span>
            </p>
            <p className={s.teamName}>Portland trail blazers</p>
          </div>
        </div>
      </div>
      <div className={s.playersCard}>
        <div className={s.mainCard}>
          <div className={s.playersImg}>
            <img src={player} alt="playersImg" />
          </div>
        </div>
        <div className={s.playersInfo}>
          <div className={s.playersWrap}>
            <p className={s.playersName}>
              Jaylen Adams <span className={s.numberPlayer}>#10</span>
            </p>
            <p className={s.teamName}>Portland trail blazers</p>
          </div>
        </div>
      </div>
      <div className={s.playersCard}>
        <div className={s.mainCard}>
          <div className={s.playersImg}>
            <img src={player} alt="playersImg" />
          </div>
        </div>
        <div className={s.playersInfo}>
          <div className={s.playersWrap}>
            <p className={s.playersName}>
              Jaylen Adams <span className={s.numberPlayer}>#10</span>
            </p>
            <p className={s.teamName}>Portland trail blazers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

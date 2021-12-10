import React from 'react';
import s from './players.module.scss';
import search from 'assets/icon/search.png';
import arrow from 'assets/icon/chevron_right_24px.png';
import player from 'assets/icon/player.png';
import { FilterTeams } from '../FilterTeams/FilterTeams';

export const Players = (): JSX.Element => {
  return (
    <div className={s.content}>
      <div className={s.contentWrap}>
        <div className={s.nav}>
          <div className={s.navInput}>
            <input type="text" placeholder="Search..." />
            <div className={s.inputImg}>
              <img src={search} alt="search" />
            </div>
          </div>

          <FilterTeams />

          <button> Add +</button>
        </div>
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
        <div className={s.navFooter}>
          <div className={s.pagination}>
            <span className={s.arrowLeft}>
              <img src={arrow} alt="arrow" />
            </span>
            <ul>
              <li className={s.active}>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>...</li>
              <li>27</li>
            </ul>
            <span className={s.arrowRight}>
              <img src={arrow} alt="arrow" />
            </span>
          </div>
          <div className={s.numbersPlayers}>
            <span className={s.number}>6</span>
            <span className={s.button}>
              <img src={arrow} alt="arrow" />
            </span>
          </div>
          <div className={s.playersNumberWindow}>
            <span>6</span>
            <span>12</span>
            <span>24</span>
          </div>
        </div>
      </div>
    </div>
  );
};

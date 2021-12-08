import React from 'react';
import s from './conten.module.scss';
import search from 'assets/icon/search.png';
import teamImg from 'assets/icon/POR 1.png';
import arrow from 'assets/icon/chevron_right_24px.png';

export const Content = (): JSX.Element => {
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

          <button>Add +</button>
        </div>
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
          <div className={s.numberTeams}>
            <span className={s.number}>6</span>
            <span className={s.button}>
              <img src={arrow} alt="arrow" />
            </span>
          </div>
          <div className={s.teamNumberWindow}>
            <span>6</span>
            <span>12</span>
            <span>24</span>
          </div>
        </div>
      </div>
    </div>
  );
};

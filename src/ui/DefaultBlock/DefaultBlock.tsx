import React from 'react';
import s from './defaultBlock.module.scss';

export const DefaultBlock = ({ img }: { img: string }) => {
  return (
    <div className={s.defaultBlock}>
      <div className={s.wrap}>
        <div className={s.img}>
          <img src={img} alt="defaultTeamsImg" />
        </div>
        <div className={s.text}>
          <h3>Empty here</h3>
          <p>Add new teams to continue</p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BreadcrumbsNav } from 'ui/BreadcrumbsNav/BreadcrumbsNav';
import s from './teamsConstructor.module.scss';
import { AddTeamForm } from './AddTeamForm/AddTeamForm';

export const TeamConstructor = () => {
  const [crumbs, setCrumbs] = useState(['Team', 'Add new team']);

  const selected = (crumb: string) => {
    console.log(crumb);
  };

  return (
    <div className={s.constructorWrap}>
      <div className={s.breadcrumb}>
        <BreadcrumbsNav crumbs={crumbs} selected={selected} />
      </div>
      <div className={s.constructorTeam}>
        <AddTeamForm />
      </div>
    </div>
  );
};

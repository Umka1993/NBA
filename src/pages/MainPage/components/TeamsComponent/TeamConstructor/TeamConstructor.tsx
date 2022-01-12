import React, { useEffect, useState } from 'react';
import { BreadcrumbsNav } from 'ui/BreadcrumbsNav/BreadcrumbsNav';
import s from './teamsConstructor.module.scss';
import { AddTeamForm } from './AddTeamForm/AddTeamForm';
import { useAppSelector } from '../../../../../core/redux/hooks/redux';
import { useNavigate } from 'react-router-dom';

export const TeamConstructor = () => {
  const [crumbs, setCrumbs] = useState(['Team', 'Add new team']);
  const newCommand = useAppSelector((state) => state.addCommandReducer.newCommand);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(newCommand).length !== 0) {
      navigate('/MainPage/Teams');
    }
  }, [newCommand]);
  return (
    <div className={s.constructorWrap}>
      <div className={s.breadcrumb}>
        <BreadcrumbsNav crumbs={crumbs} />
      </div>
      <div className={s.constructorTeam}>
        <AddTeamForm />
      </div>
    </div>
  );
};

import React from 'react';
import s from './breadcrumbsNav.module.scss';
import { useNavigate } from 'react-router-dom';

export const BreadcrumbsNav = ({ crumbs }: { crumbs: string[] }): JSX.Element => {
  const navigate = useNavigate();

  function isLast(index: number) {
    return index === crumbs.length - 1;
  }

  return (
    <div className={s.wrap}>
      <nav className={s.nav}>
        <ul className={s.crumbs}>
          {crumbs.map((crumb, indexCrumb) => {
            // const disabled = isLast(indexCrumb) ? 'disabled' : '';

            return (
              <li key={indexCrumb} className={s.crumbItem}>
                <button
                  className={` ${s.crumbButton}`}
                  disabled={isLast(indexCrumb)}
                  onClick={() => navigate('/MainPage/Teams')}
                >
                  {crumb}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

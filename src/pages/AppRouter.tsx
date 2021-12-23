import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

import { PlayersComponent } from './MainPage/components/PlayersComponent/PlayersComponent';
import { SignInPage } from './SignInPage/SignInPage';
import { TeamsComponent } from './MainPage/components/TeamsComponent/TeamsComponent';
import { useAppSelector } from '../core/redux/hooks/redux';
import { Teams } from './MainPage/components/TeamsComponent/Teams/Teams';
import { DefaultBlock } from '../ui/DefaultBlock/DefaultBlock';
import { TeamConstructor } from './MainPage/components/TeamsComponent/TeamConstructor/TeamConstructor';

import defaultTeams from 'assets/icon/defaultTeams.png';

export const AppRouter = (): JSX.Element => {
  const isAuthorised = localStorage.getItem('SavedToken');
  const token = useAppSelector((state) => state.loginSliceReducer.token);
  const teamsCollection = useAppSelector((state) => state.teamsReducer.teamsCollection);
  // const teamsCollection = true;
  // const teamsCollection.length = 1
  const [teams, setTeams] = useState(false);
  // console.log(!teamsCollection.length);

  return (
    <Routes>
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}

      {isAuthorised ? (
        privateRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element}>
            <Route path="Teams/*" element={<TeamsComponent />}>
              <Route path="/" element={<Teams />}>
                <Route path="/" element={<DefaultBlock img={defaultTeams} />} />
                {/*{teamsCollection.length ? (*/}
                {/*  <Route path="/" element={<DefaultBlock img={defaultTeams} />} />*/}
                {/*) : (*/}
                {/*  <Route path="netTeams" element={<NetTeams />} />*/}
                {/*)}*/}
              </Route>
              <Route path="addNewTeam" element={<TeamConstructor />} />
            </Route>
            <Route path="Players" element={<PlayersComponent />} />
          </Route>
        ))
      ) : (
        <Route path="*" element={<SignInPage />} />
      )}
    </Routes>
  );
};

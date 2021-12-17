import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

import { PlayersComponent } from './MainPage/components/PlayersComponent/PlayersComponent';
import { SignInPage } from './SignInPage/SignInPage';
import { TeamsComponent } from './MainPage/components/TeamsComponent/TeamsComponent';
import { TeamConstructor } from './MainPage/components/TeamsComponent/TeamConstructor/TeamConstructor';
import { Teams } from './MainPage/components/TeamsComponent/Teams/Teams';
import { NetTeams } from './MainPage/components/TeamsComponent/Teams/NetTeams/NetTeams';
import { DefaultBlock } from '../ui/DefaultBlock/DefaultBlock';
import defaultTeamsImg from 'assets/icon/defaultTeams.png';

export const AppRouter = (): JSX.Element => {
  const isAuthorised = localStorage.getItem('token');
  const [teams, setTeams] = useState(false);

  return (
    <Routes>
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}

      {isAuthorised ? (
        privateRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element}>
            <Route path="/Teams/*" element={<TeamsComponent />}>
              <Route path="/" element={<Teams />}>
                {teams ? (
                  <>
                    <Route path="addNewTeam" element={<TeamConstructor />} />
                    <Route path="netTeams" element={<NetTeams />} />
                  </>
                ) : (
                  <>
                    <Route path="addNewTeam" element={<TeamConstructor />} />
                    <Route path="/" element={<DefaultBlock img={defaultTeamsImg} />} />
                  </>
                )}
              </Route>
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

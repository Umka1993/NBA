import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}
      {privateRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}
    </Routes>
  );
};

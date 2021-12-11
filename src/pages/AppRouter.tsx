import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { Teams } from './MainPage/components/Teams/Teams';
import { Players } from './MainPage/components/Players/Players';
import { useAppSelector } from '../core/redux/hooks/redux';
import { SignInPage } from './SignInPage/SignInPage';

export const AppRouter = (): JSX.Element => {
  const { isLogin } = useAppSelector((state) => state.loginSliceReducer);
  console.log(privateRoutes);
  return (
    <Routes>
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}

      {isLogin ? (
        privateRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element}>
            <Route path="Teams" element={<Teams />} />
            <Route path="Players" element={<Players />} />
          </Route>
        ))
      ) : (
        <Route path="*" element={<SignInPage />} />
      )}
    </Routes>
  );
};

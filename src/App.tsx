import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './pages/AppRouter';
import '../src/assets/style/variables.scss';
import './assets/style/main.scss';

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;

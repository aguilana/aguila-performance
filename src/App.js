import React from 'react';
import { Navbar } from './components';
import AppRoutes from './setup/routes-manager';

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;

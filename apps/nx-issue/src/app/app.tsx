import { Idea } from '@nx-issue/idea';
import { ReactUi } from '@nx-issue/react-ui';
import React from 'react';
import './app.scss';

export const App = () => {
  return (
    <>
      <ReactUi />
      <Idea />
    </>
  );
};

export default App;

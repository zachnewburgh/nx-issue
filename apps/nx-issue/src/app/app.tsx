import React from 'react';
import { RedocStandalone } from 'redoc';
import './app.scss';

export const App = () => {
  return (
    <RedocStandalone
      specUrl="http://rebilly.github.io/RebillyAPI/openapi.json"
      options={{
        nativeScrollbars: true,
        theme: { colors: { primary: { main: '#dd5522' } } }
      }}
    />
  );
};

export default App;

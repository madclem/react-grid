import React from 'react';
import MainContainer from './components/MainContainer';
import DefaultTheme from './themes/DefaultTheme';
import { ThemeProvider } from 'styled-components';

// Routes
// menu
// slider
// two articles
// footer

function App(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={DefaultTheme}>
        <MainContainer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

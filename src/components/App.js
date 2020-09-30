import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Home from 'components/pages/Home';
import Login from 'components/pages/Login';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height:100vh;
    margin: 0;
    color: black;
    font-family:'Kaushan Script', cursive
  }
`;

const theme = {
  primaryColor: '#f8049c',
  secondaryColor: '#fdd54f',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

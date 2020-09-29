import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

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

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;

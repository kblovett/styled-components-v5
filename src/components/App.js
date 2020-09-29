import React, { Fragment } from 'react';

import { createGlobalStyle } from 'styled-components';
import { Button } from 'components/common';

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
      <h1>App</h1>
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
    </Fragment>
  );
}

export default App;

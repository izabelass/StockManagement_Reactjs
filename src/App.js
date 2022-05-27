import React from 'react';

import ResponsiveAppBar from './components/NavBar';
import Router from './Routes';
import { Container } from '@material-ui/core';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Container>
            <ResponsiveAppBar />
            <Router />
          </Container>

        </header>
      </div>
    </>
  );
}

export default App;


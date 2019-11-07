import React from 'react';
import styled from 'styled-components';
import Header from './components/modules/header/header';
import Main from './components/modules/main/main';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <Header/>
      <Main/>
    </StyledApp>
  );
}

export default App;

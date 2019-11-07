import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/globalStyle';
import Container from '../../common/container';
import TabsContainer from '../tabs/tabs-container';

const StyledMain = styled.main`
  padding: 56px 0;
  background-color: ${colors.grayTwo};
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  padding-left: 8px;
  font-size: 40px;
`;

function Main() {
  return (
    <StyledMain>
      <MainContainer>
        <Title>Мои организации</Title>
        <TabsContainer />
      </MainContainer>
    </StyledMain>
  );
}

export default Main;

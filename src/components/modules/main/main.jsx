import React from 'react';
import styled from 'styled-components';
import { colors, pxToRem } from '../../../theme/globalStyle';
import Container from '../../common/container';
import TabsContainer from '../tabs/tabs-container';

const StyledMain = styled.main`
  padding: 56px 0;
  background-color: ${colors.grayTwo};
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  padding-left: 8px;
  font-size: ${pxToRem(40)};
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 736px;
`;

function Main() {
  return (
    <StyledMain>
      <MainContainer>
        <Wrap>
          <Title>Мои организации</Title>
          <TabsContainer />
        </Wrap>
      </MainContainer>
    </StyledMain>
  );
}

export default Main;

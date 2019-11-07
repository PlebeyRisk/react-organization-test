import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/logo';
import { colors } from '../../../theme/globalStyle';
import Container from '../../common/container';

const StyledHeader = styled.header`
  padding: 16px 0;
  background-color: ${colors.light};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;

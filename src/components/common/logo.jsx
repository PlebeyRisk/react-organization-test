import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.svg';

const StyledLogo = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

function Logo({ size = 52 }) {
  return (
    <StyledLogo size={size}>
      <img src={logo} alt="logo" width={size} height={size} />
    </StyledLogo>
  );
}

export default Logo;

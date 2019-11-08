import styled from 'styled-components';
import { colors, pxToRem } from '../../theme/globalStyle';

const Button = styled.button`
  padding: 12px 40px;
  border: none;
  border-radius: 3px;
  background-color: ${colors.primary};
  color: ${colors.textLight};
  font-size: ${pxToRem(18)};
  font-weight: 700;

  &:active {
    opacity: 0.8;
  }
`;

export default Button;

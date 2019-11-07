import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/globalStyle';

const StyledTextField = styled.input`
  padding: 13px 16px;
  background-color: ${colors.light};
  border: 1px solid ${colors.border};
  border-radius: 3px;
  color: ${colors.textThree};

  &:focus {
    border-color: ${colors.borderFocus};
  }
`;

const TextField = ({ meta, input, ...props }) => {
  return <StyledTextField {...props} {...input} />;
};

export default TextField;

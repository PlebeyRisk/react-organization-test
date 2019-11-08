import styled from 'styled-components';
import { device, size } from '../../theme/globalStyle';



const Container = styled.div`
  margin: 0 auto;
  width: 90%;

  @media ${device.laptopL} {
    max-width: ${size.laptopL * 0.96667}px;
  }
`;

export default Container;

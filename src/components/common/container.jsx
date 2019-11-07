import styled from 'styled-components';
import { displayKeyPoints } from '../../theme/globalStyle';

const { phoneWidth, tableWidth, smDesktopWidth, desktopWidth, lgDesktopWidth } = displayKeyPoints;

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1920px;

  @media (min-width: ${phoneWidth}px) and (max-width: ${tableWidth - 0.02}px) {
    max-width: ${phoneWidth * 0.96667}px;
  }
  @media (min-width: ${tableWidth}px) and (max-width: ${smDesktopWidth - 0.02}px) {
    max-width: ${tableWidth * 0.96667}px;
  }
  @media (min-width: ${smDesktopWidth}px) and (max-width: ${desktopWidth - 0.02}px) {
    max-width: ${smDesktopWidth * 0.96667}px;
  }
  @media (min-width: ${desktopWidth}px) and (max-width: ${lgDesktopWidth - 0.02}px) {
    max-width: ${desktopWidth * 0.96667}px;
  }
`;

export default Container;

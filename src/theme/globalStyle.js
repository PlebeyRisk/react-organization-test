import {
  createGlobalStyle
} from "styled-components"

export const fonts = {
  main: 'Verdana, sans-serif',
}

export const fontSize = {
  main: 14,
}

export const colors = {
  primary: '#F50634',
  light: '#fff',
  dark: '#000',
  gray: '#E5E5E5',
  grayTwo: '#F8F8F8',

  textPrimary: '#2B2829',
  textTwo: '#2B292A',
  textThree: '#777777',
  textFour: '#B9B9B9',
  textLight: '#fff',
  textRed: '#C31335',

  border: '#DFDFDF',
  borderFocus: '#FAE29F',
}

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const pxToRem = (size) => `${size / fontSize.main}rem`;

const placeholderStyle = `
  color: ${colors.textFour};
  font-family: ${fonts.main};
`;

const placeholder = `
  &::-webkit-input-placeholder {
    ${placeholderStyle}
  }

  &:-moz-placeholder { /* Firefox 18- */
    ${placeholderStyle}
  }

  &::-moz-placeholder {  /* Firefox 19+ */
    ${placeholderStyle}
  }

  &:-ms-input-placeholder {
    ${placeholderStyle}
  }
`;

const GlobalStyle = createGlobalStyle `
  /* Default */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* Links */
  a {
    text-decoration: none;
  }
  a:active, a:hover {
    outline: 0;
  }

  /* List */
  ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  /* Headlines */
  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
  }

  /* Default */
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }

  img, audio, video {
    max-width: 100%;
    height: auto;
  }
  audio, canvas, iframe, video, img, svg {
    vertical-align: middle;
  }
  iframe {
    border: 0;
  }

  /* From */
  textarea {
    resize: none;
    overflow: auto;
    vertical-align: top;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  input, textarea, select, button {
    outline: none;
    border: none;
    font-size: 100%;
    margin: 0;
  }
  button, input {
    line-height: normal;
  }

  /* Table */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td, th {
    padding: 0;
    text-align: left;
  }

  /* App style */
  html {
    font-size: ${fontSize.main * 0.6}px;

    @media ${device.tablet} {
      font-size: ${fontSize.main * 0.8}px;
    }
    @media ${device.laptop} {
      font-size: ${fontSize.main}px;
    }
  }

  body {
    font-family: ${fonts.main};
    background-color: ${colors.grayTwo};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.textPrimary};
  }

  input, textarea {
    font-family: ${fonts.main};
    ${placeholder};
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle;
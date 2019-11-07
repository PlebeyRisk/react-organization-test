import {
  createGlobalStyle
} from "styled-components"

export const fonts = {
  main: 'Verdana, sans-serif',
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
  textLigth: '#fff',
  textRed: '#C31335',

  border: '#DFDFDF',
  borderFocus: '#FAE29F',
}

export const displayKeyPoints = {
  lgDesktopWidth: 2035,
  desktopWidth: 1200,
  smDesktopWidth: 992,
  tableWidth: 768,
  phoneWidth: 576,
  smPhoneWidth: 480,
}

const placeholderStyle = `
  &::-webkit-input-placeholder {
    color: ${colors.textFour};
  }

  &:-moz-placeholder { /* Firefox 18- */
    color: ${colors.textFour};
  }

  &::-moz-placeholder {  /* Firefox 19+ */
    color: ${colors.textFour};
  }

  &:-ms-input-placeholder {
    color: ${colors.textFour};
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
  body {
    font-family: ${fonts.main};
    font-size: 14px;
    background-color: ${colors.grayTwo};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.textPrimary};
  }

  input, textarea {
    ${placeholderStyle};
  }
`

export default GlobalStyle;
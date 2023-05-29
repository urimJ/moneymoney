import { createGlobalStyle } from 'styled-components';

// 배경색, 글꼴 색
export const bgColor = 'white';
export const textColor = 'black';
export const primaryBoldColor = '#1F4174';
export const primaryColor = '#4178CB';
export const secondaryColor = '#fff';
// export const pointColor = "#603900";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  // 추가1. 모든 태그에 border-box 적용 (테두리와 안쪽 여백의 크기도 요소의 크기로 고려)
  * {
    box-sizing: border-box;
  }
  /* *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: ${bgColor};
  }

  *::-webkit-scrollbar-thumb {
    background: ${primaryColor};
  } */

  *::selection {
    color: ${bgColor};
    background: ${primaryColor};
  }
  // 추가2. 가져온 폰트를 body태그 안에 있으면 다 적용
  body{
    background-color: ${bgColor};
    color: ${textColor};
    font-family: "AppleSDGothicNeoM", 'Noto Sans KR Black';
  }
  // 추가3. 링크에 모든 밑줄 삭제
  a{
    text-decoration: none;
    color:inherit;  // 색을 부모로부터 상속 받음
  }

  /* Animation declaration, Font-face Setting */
  @font-face {
    font-family: 'Kaushan Script';
    src: url("./src/fonts/KaushanScript-Regular.ttf");
  }
  @font-face {
    font-family: "AppleSDGothicNeoM";
    src: url("./src/fonts/AppleSDGothicNeoM.ttf");
  }
  @font-face {
    font-family: "AppleSDGothicNeoL";
    src: url("./src/fonts/AppleSDGothicNeoL.ttf");
  }
  @font-face {
    font-family: "AppleSDGothicNeoB";
    src: url("./src/fonts/AppleSDGothicNeoB.ttf");
  }
  @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}   
  }
  @keyframes fadeOut {
    from {opacity: 1;}
    to {opacity: 0;}   
  }

  @-webkit-keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}   
  }
  @-webkit-keyframes fadeOut {
    from {opacity: 1;}
    to {opacity: 0;}   
  }
  .fadeIn{
    animation: fadeIn;
    animation-duration: 0.8s;
  }

  .fadeOut{
    animation: fadeOut;
    animation-duration: 0.8s;
  }
`;

export default GlobalStyle;

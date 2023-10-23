import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "@/styles/theme";
import { pretendard } from "@/styles/font";

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v5.0.2 | 20191019
   License: none (public domain)
*/

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
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: ${pretendard.style.fontFamily};
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
    line-height: 1.4;
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

  html,
  body{
    width: 100%;
    min-height: 100vh;
    //font-size: 62.5%;
    letter-spacing: -0.2px;
  }

  @media (prefers-color-scheme: light) {
    html {
      color: ${lightTheme.contrast};
      background-color: ${lightTheme.theme};
    }
  }

  @media (prefers-color-scheme: dark) {
    html {
      color: ${darkTheme.contrast};
      background-color: ${darkTheme.theme};
    }
  }

  html[data-theme='light'] {
    color: ${lightTheme.contrast};
    background-color: ${lightTheme.theme};
  }

  html[data-theme='dark'] {
    color: ${darkTheme.contrast};
    background-color: ${darkTheme.theme};
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }
  
  svg{
    display: block;
  }
  
  button{
    border: none;
    padding: 0;
    cursor: pointer;
  }
`
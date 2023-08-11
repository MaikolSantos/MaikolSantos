import { createGlobalStyle } from "styled-components";

export const GlobaStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Quicksand', sans-serif;
    line-height: 150%;
    text-decoration: none;
  }

  :root {
    --color-brand-50: #06559B;
    --color-brand-100: #0A6ABF;

    --color-black-100: #000000;
    --color-black-200: #050505;
    --color-black-300: #080808;

    --color-grey-100: #8FA6B2;
    --color-grey-200: #C1CBD3;
    --color-grey-300: #DDE4EB;
    --color-grey-400: #EDEDED;

    --color-white: #FFFFFF;

    --weight-light: 300;
    --weight-regular: 400;
    --weight-medium: 500;
    --weight-semibold: 600;
    --weight-bold: 700;
  }

  html, body, #root, main {
    height: 100%;
  }
  
  body {
    background-color: var(--color-black-200);
    color: var(--color-grey-200);
    overflow-x: hidden;
  }

  main {
    position: relative;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    height: 0.25rem;
    width: 0.25rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  } 

`;

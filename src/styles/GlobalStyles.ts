import {createGlobalStyle} from 'styled-components'

export const GlobaStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Quicksand', sans-serif;
  }

  :root {
    --color-brand-50: #06559B;
    --color-brand-100: #0A6ABF;

    --color-grey-100: #8FA6B2;
    --color-grey-200: #C1CBD3;
    --color-grey-300: ##DDE4EB;
    --color-grey-400: #EDEDED;

    --color-black-100: #000000;
    --color-black-200: #050505;
    
  }

  body {
    background-color: var(--color-black-200);
  }


`
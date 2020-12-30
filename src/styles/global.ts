import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }

  :root {
    --primary-color: #34CB79;
    --segundary-color: #0060bf;
    --title-color: #34CB79;
    --text-color: rgba(255,255,255,0.75);
    --background-color: #1B232E;
  }

  body{
     background: var(--background-color);
    -webkit-font-smoothing: antialiased;
     position: relative;
  }
  body , input , button{
    font: 16px ;
    font-family: 'Open Sans', sans-serif;
  }
  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
  }
  button{
    cursor: pointer;
  }
`;
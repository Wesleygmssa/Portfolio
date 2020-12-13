import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }

  :root{
    position: relative;
  }

  body{
     background: #1B232E;
    -webkit-font-smoothing: antialiased;
     position: relative;
  }
  body , input , button{
    font: 16px 'Roboto', serif;
  }
  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
  }
  button{
    cursor: pointer;
  }
`;
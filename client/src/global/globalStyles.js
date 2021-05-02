import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    position: relative;
    width: 100%;
    background: '#FFF';
    color: '#000000';
  }

  body, input, button, h1, h2, h3, p, textarea {
    font-family: 'Montserrat';
  }

  a {
    text-decoration: none;
    color: unset;
  }

  button {
    cursor: pointer,
  }

  #root {
    position: relative;
    min-height: calc(100vh - 75px);
    margin: 75px 0 0 0;
  }

  ::-webkit-scrollbar {
    width: .4rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #8E7AD6;
    border-radius: .3rem;
  }
`;
import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    font-family: 'League Spartan', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    position: relative;
    z-index: 5;
    color: hsl(221, 14%, 31%);
    background-color: hsl(30, 25%, 89%);
    border: none;
    border-radius: 4px;
    box-shadow: 0px 3.5px 1px hsl(28, 16%, 65%);
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;
  }

  button:active {
    background-color: hsl(30, 25%, 95%);
  }
  
  #root {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: hsl(222, 26%, 31%);
  }
`;
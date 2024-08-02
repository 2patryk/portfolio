import { createGlobalStyle, css } from "styled-components";

import resetCSS from "./reset";
import { darkColors, lightColors } from "./theme";

const style = css`
  :root {
    color-scheme: light;
    ${Object.entries(lightColors).map(([key, value]) => `--${key}: ${value};`)}
  }

  :root[data-theme="dark"] {
    color-scheme: dark;
    ${Object.entries(darkColors).map(([key, value]) => `--${key}: ${value};`)}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    user-select: text;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textInverted};
    text-shadow: none;
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textInverted};
    text-shadow: none;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 1.6px;
  }

  body {
    /* background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary}; */
    font-size: 20rem;
    background: linear-gradient(
      206deg,
      rgba(92, 34, 255, 0.7) -5%,
      rgba(0, 0, 0, 0) 52.121%
    );
    background-repeat: no-repeat;
    height: 1600px;
  }

  body[data-theme="dark"] {
    background: black;
  }

  button,
  input,
  textarea,
  select,
  dialog {
    -webkit-appearance: none;
    background: none;
    font-family: inherit;
    border: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
    outline: none;
    border-radius: 0;
  }

  svg {
    outline: none;
    display: block;
  }

  button,
  div,
  a,
  span {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default createGlobalStyle`
  ${resetCSS}
  ${style}
`;

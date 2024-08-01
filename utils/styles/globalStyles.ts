import { createGlobalStyle, css } from "styled-components";

import resetCSS from "./reset";

const style = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    user-select: text;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.inverted};
    text-shadow: none;
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.inverted};
    text-shadow: none;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    transition: background 0.3s, color 0.3s;

  }

  html {
    font-size: 1.6px;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 20rem;
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

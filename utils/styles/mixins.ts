import { css } from "styled-components";
import { MediaContent, mediaDesktop, mediaTablet } from "./responsive";
import { breakpointDesktop } from "../vars";
import { Typography } from "./theme";

export const layoutView = css`
  width: 100%;
  margin: 0 ${({ theme }) => theme.spacing(2)};
  max-width: calc(100vw - ${({ theme }) => theme.spacing(4)});

  ${mediaDesktop(css`
    margin-left: auto;
    margin-right: auto;
    max-width: calc(
      ${breakpointDesktop}px - ${({ theme }) => theme.spacing(4)}
    );
  `)}
`;

export const fluidView = css`
  width: 100vw;
  margin: 0 ${({ theme }) => theme.spacing(-2)};

  ${mediaDesktop(css`
    margin: 0
      calc(
        (100vw - (${breakpointDesktop}px - ${({ theme }) => theme.spacing(4)})) /
          -2
      );
  `)}
`;

export const processTypography = (typography: Typography) => css`
  font-family: ${typography.fontFamily};
  font-size: ${typography.size}rem;

  ${typography.fontWeight &&
  css`
    font-weight: ${typography.fontWeight};
  `};

  ${typography.lineHeight &&
  css`
    line-height: ${typography.lineHeight};
  `};
`;

export const outlineOnFocus = (offset: number = 5) => css`
  &:focus-visible {
    outline-offset: ${offset}px;
    outline: 5px auto ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const hover = (content: MediaContent, sameOnFocus = true) => css`
  &:active {
    ${content}
  }

  ${mediaTablet(css`
    &:hover {
      ${content}
    }

    ${sameOnFocus &&
    css`
      &:focus-visible {
        ${content}
      }
    `}
  `)}
`;

export const defaultHover = css`
  transition: opacity 0.4s ease-in-out;

  ${outlineOnFocus(3)}
  ${hover(css`
    opacity: 0.7;
  `)}
`;

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

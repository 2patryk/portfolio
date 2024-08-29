import { css } from "styled-components";
import { mediaDesktop } from "./responsive";
import { breakpointDesktop } from "../vars";
import { Typography } from "./theme";

export const layoutView = css`
  width: 100%;
  margin: 0 ${({ theme }) => theme.spacing(2)};
  max-width: calc(100vw - ${({ theme }) => theme.spacing(4)});

  ${mediaDesktop(css`
    margin: 0 auto;
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

export const outlineOnFocus = css`
  &:focus-visible {
    outline-offset: 5px;
    outline: 5px auto ${({ theme }) => theme.colors.textPrimary};
  }
`;

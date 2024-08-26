import { css } from "styled-components";
import { mediaDesktop, mediaTablet } from "./responsive";
import { breakpointDesktop, breakpointTablet } from "../vars";
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

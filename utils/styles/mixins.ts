import { css } from "styled-components";
import { mediaDesktop, mediaTablet } from "./responsive";
import { breakpointDesktop, breakpointTablet } from "../vars";

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

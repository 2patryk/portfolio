import { css, Interpolation } from "styled-components";

import * as VARS from "../vars";

export type MediaContent = string | Interpolation<object>[];

export const mqMobile = `(max-width: ${VARS.breakpointTablet - 1}px)`;
export const mediaMobile = (content: MediaContent) =>
  css`
    @media ${mqMobile} {
      ${content}
    }
  `;

export const mqTablet = `(min-width: ${VARS.breakpointTablet}px)`;
export const mediaTablet = (content: MediaContent) =>
  css`
    @media ${mqTablet} {
      ${content}
    }
  `;

export const mqDesktopSmall = `(min-width: ${VARS.breakpointDesktopSmall}px)`;
export const mediaDesktopSmall = (content: MediaContent) =>
  css`
    @media ${mqDesktopSmall} {
      ${content}
    }
  `;

export const mqDesktop = `(min-width: ${VARS.breakpointDesktop}px)`;
export const mediaDesktop = (content: MediaContent) =>
  css`
    @media ${mqDesktop} {
      ${content}
    }
  `;

const mqDesktopLarge = `(min-width: ${VARS.breakpointDesktopLarge}px)`;
export const mediaDesktopLarge = (content: MediaContent) =>
  css`
    @media ${mqDesktopLarge} {
      ${content}
    }
  `;

import styled, { css } from "styled-components";
import { rgba } from "polished";

import { mediaDesktop, mediaTablet } from "@/utils/styles/responsive";
import { layoutView } from "@/utils/styles/mixins";
import { ProjectCopy } from "@/utils/copy";

export const Wrapper = styled.div`
  position: relative;
`;

export const Background = styled.div<{
  $colors?: ProjectCopy["colors"] | null;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  transition: background-color 0.4s ease-in-out;
  pointer-events: none;

  ${({ $colors }) =>
    $colors &&
    css`
      background-color: ${rgba($colors.primary, 0.15)};
    `};

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectsContent = styled.div`
  ${layoutView};
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(7, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};

  & > a {
    aspect-ratio: 2 / 1;
  }

  ${mediaTablet(css`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(0, 1fr));

    & > a {
      aspect-ratio: 1 / 1;
    }

    & > a:nth-child(1),
    & > a:nth-child(4),
    & > a:nth-child(7) {
      grid-column: span 2;
      aspect-ratio: 2 / 0.969;
    }
  `)}

  ${mediaDesktop(css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));

    & > a:nth-child(7) {
      grid-column: unset;
    }
  `)}
`;

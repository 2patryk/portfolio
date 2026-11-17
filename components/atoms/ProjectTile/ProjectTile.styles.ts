import { ProjectCopy } from "@/utils/copy";
import Image from "next/image";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { ProjectTileProps } from "./ProjectTile";
import { hover, outlineOnFocus } from "@/utils/styles/mixins";

export const Background = styled(Image)`
  object-fit: cover;
  z-index: -1;
  transition: transform 0.4s ease-in-out;
`;

export const AboutBox = styled.div<{ $colors: ProjectCopy["colors"] }>`
  padding: ${({ theme }) =>
    `${theme.spacing(5)} ${theme.spacing(2)} ${theme.spacing(1.5)}`};
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    ${({ $colors }) => $colors?.primary} 100%
  );
  color: ${({ theme }) => theme.colors.light};
`;

export const Name = styled.h3`
  ${({ theme }) => theme.typography("h4")};
  white-space: pre-wrap;
  transition: font-weight 0.4s ease-in-out;
`;

export const Extra = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(0.5)};
  ${({ theme }) => theme.typography("body")};
`;

export const Company = styled.span``;

export const Date = styled.span``;

export const Mask = styled.div<{ $colors: ProjectCopy["colors"] }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
  /* mix-blend-mode: screen; */

  mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  background-color: ${({ $colors }) => $colors?.primary};
  background: linear-gradient(
    0deg,
    ${({ $colors }) => $colors?.primary} 0%,
    ${({ $colors }) => $colors?.secondary} 100%
  );

  transition: opacity 0.4s ease-in-out;
`;

const reveal = keyframes`
  from {
    opacity: 0;
    translate: 0 80px;
    scale: 0.9;
  }
  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
`;

export const Wrapper = styled(Link)<{
  $isInBackground: ProjectTileProps["isInBackground"];
}>`
  ${outlineOnFocus()};
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  transition: opacity 0.4s ease-in-out;

  /*
   * Scroll-triggered, time-based reveal. ProjectsGrid marks tiles below the
   * fold as data-reveal="pending" and flips them to "in" once they scroll
   * into view; the animation then runs for a fixed duration regardless of
   * scroll speed. --col (column within the grid row, set by ProjectsGrid)
   * staggers tiles in the same row.
   * fill-mode "backwards" so the animation stops overriding opacity
   * (isInBackground) once it has finished.
   */
  &[data-reveal="pending"] {
    opacity: 0;
  }

  &[data-reveal="in"] {
    animation: ${reveal} var(--reveal-duration, 1.2s)
      cubic-bezier(0.22, 0.61, 0.36, 1) backwards;
    animation-delay: calc(var(--col, 0) * var(--reveal-step, 150ms));
  }

  ${hover(css`
    ${Background} {
      transform: scale(1.1);
    }

    ${AboutBox} {
      ${Name} {
        font-weight: 760;
      }
    }

    ${Mask} {
      opacity: 0.5;
    }
  `)}

  ${({ $isInBackground }) =>
    $isInBackground &&
    css`
      opacity: 0.6;
    `}
`;

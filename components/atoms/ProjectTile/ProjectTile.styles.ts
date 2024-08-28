import { ProjectCopy } from "@/utils/copy";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import { ProjectTileProps } from "./ProjectTile";

export const Background = styled(Image)`
  object-fit: cover;
  z-index: -1;
  transition: transform 0.4s ease-in-out;
`;

export const AboutBox = styled.div`
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  /* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    ${({ theme }) => theme.colors.background} 100%
  ); */
  transition: font-weight 0.4s ease-in-out;
  // TODO: Add always white font
`;

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

export const Wrapper = styled(Link)<{
  $isInBackground: ProjectTileProps["isInBackground"];
}>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${({ theme }) => theme.typography("h4")};
  overflow: hidden;
  transition: opacity 0.4s ease-in-out;
  /* filter: grayscale(0.2); */

  &:hover {
    ${Background} {
      transform: scale(1.1);
    }

    ${AboutBox} {
      font-weight: 750;
    }

    ${Mask} {
      opacity: 0.5;
    }
  }

  ${({ $isInBackground }) =>
    $isInBackground &&
    css`
      opacity: 0.6;
    `}
`;

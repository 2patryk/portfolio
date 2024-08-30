import { ProjectCopy } from "@/utils/copy";
import { layoutView } from "@/utils/styles/mixins";
import { mediaTablet } from "@/utils/styles/responsive";
import { motion } from "framer-motion";
import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

export const BackgroundWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Cover = styled.div`
  height: 400rem;
  width: 100%;
  position: relative;
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );

  ${mediaTablet(css`
    height: 400rem;
  `)}
`;

export const Background = styled(Image)`
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
  /* object-position: 0 300rem; */
`;

export const Mask = styled.div<{ $colors: ProjectCopy["colors"] }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;

  mask-image: radial-gradient(
    circle at 50% 30%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  /* mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  ); */

  background-color: ${({ $colors }) => $colors?.primary};
  background: linear-gradient(
    0deg,
    ${({ $colors }) => $colors?.primary} 0%,
    ${({ $colors }) => $colors?.secondary} 100%
  );

  transition: opacity 0.4s ease-in-out;
`;

export const Content = styled.div`
  position: relative;
  ${layoutView};
  margin-top: -60rem;
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  z-index: 0;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography("h1Extra")};
  font-weight: 740;

  ${mediaTablet(css`
    ${({ theme }) => theme.typography("h1")};
    font-weight: 740;
  `)}
`;

import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{
  $hasMask?: boolean;
  $hasFluidSize?: boolean;
}>`
  position: relative;
  width: 100rem;
  height: 74rem;
  color: inherit;

  ${({ $hasMask }) =>
    $hasMask &&
    css`
      mask-image: url("/images/logo.svg");
      mask-position: center center;
      mask-repeat: no-repeat;
    `};

  ${({ $hasFluidSize }) =>
    $hasFluidSize &&
    css`
      width: 100%;
      height: 100%;
    `};
`;

export const Progress = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: currentColor;
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
`;

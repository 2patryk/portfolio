import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  width: 100dvw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundExtra};
`;

Wrapper.defaultProps = {
  exit: {
    y: "-100%",
    transition: {
      delay: 0.4,
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

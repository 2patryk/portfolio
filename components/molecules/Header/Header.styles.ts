import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
  pointer-events: none;
`;

export const Wrapper = styled.div`
  ${layoutView};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rem 0 60rem;

  a,
  label,
  button {
    pointer-events: all;
  }
`;

export const LogoWrapper = styled.div`
  margin-left: -10rem;
  padding: 10rem;
  width: 60rem;
`;

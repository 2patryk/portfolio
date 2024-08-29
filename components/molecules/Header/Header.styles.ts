import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  pointer-events: none;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  z-index: -1;
`;

export const Wrapper = styled.div`
  ${layoutView};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rem 0;

  a,
  label,
  button {
    pointer-events: all;
  }
`;

export const LogoWrapper = styled.div`
  margin-left: -10rem;
  padding: 10rem;
  width: 50rem;
`;

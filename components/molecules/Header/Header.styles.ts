import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500rem;
  position: relative;
`;

export const Wrapper = styled.div`
  ${layoutView};
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(2)};
  position: relative;
`;

export const PreTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 12rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 50rem;
  margin: ${({ theme }) => `${theme.spacing(-0.6)} 0 ${theme.spacing(0.2)}`};
  font-weight: 550;
  margin-left: ${({ theme }) => theme.spacing(-0.2)};
  transform: scaleX(0.9);
  transform-origin: left center;
`;

export const PostTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 12rem;
  /* font-weight: 600; */
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(20)};
`;

export const MaskBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: -1;
  opacity: 0.05;
  pointer-events: none;
  overflow: hidden;
  mask-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  div {
    top: -270rem;
    left: 170rem;
    width: 1770rem;
    height: auto;
    flex-shrink: 0;
  }
`;

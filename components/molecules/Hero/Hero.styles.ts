import { layoutView } from "@/utils/styles/mixins";
import { mediaTablet } from "@/utils/styles/responsive";
import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600rem;

  ${mediaTablet(css`
    height: 500rem;
  `)}
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

export const Title = styled.h1`
  ${({ theme }) => theme.typography("h1")};
  transform-origin: left center;
`;

export const Position = styled.h2`
  ${({ theme }) => theme.typography("h3")};
  white-space: pre-wrap;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography("body")};
  max-width: 230rem;
`;

export const Bold = styled.b`
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ theme }) => theme.spacing(24)};
  margin-bottom: ${({ theme }) => theme.spacing(15)};
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
  mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);

  > div {
    bottom: -100rem;
    width: 550rem;
    height: auto;
    flex-shrink: 0;

    ${mediaTablet(css`
      bottom: -70rem;
    `)}
  }
`;

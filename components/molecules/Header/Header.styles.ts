import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500rem;
`;

export const Wrapper = styled.div`
  ${layoutView};
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(2)};
  position: relative;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 40rem;
  margin-bottom: ${({ theme }) => theme.spacing(0.2)};
  font-weight: 700;
  margin-left: ${({ theme }) => theme.spacing(-0.2)};
`;

export const PreTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 12rem;
`;

export const PostTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 15rem;
  font-weight: 400;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(15)};
`;

export const MaskBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: lighten;
  image-rendering: pixelated;
  z-index: -1;
`;

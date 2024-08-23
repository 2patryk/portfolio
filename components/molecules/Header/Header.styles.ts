import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.header`
  ${layoutView};
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(2)};
  height: 500rem;
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

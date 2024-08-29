import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${layoutView};
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography("h1")};
  font-weight: 720;
`;

import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.header`
  ${layoutView};
  height: 200px;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.h1`
  font-size: 30rem;
`;

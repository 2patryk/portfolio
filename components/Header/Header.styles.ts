import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.header`
  ${layoutView};
  height: 200px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Title = styled.h1`
  font-size: 30rem;
`;

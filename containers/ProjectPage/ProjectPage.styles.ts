import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${layoutView};
  padding-top: 80rem;
  ${({ theme }) => theme.typography("h1")};
  font-weight: 750;
`;

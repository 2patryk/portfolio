import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.section`
  ${layoutView};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

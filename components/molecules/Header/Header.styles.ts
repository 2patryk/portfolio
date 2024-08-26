import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const Wrapper = styled.div`
  ${layoutView};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20rem;
`;

export const LogoWrapper = styled.div`
  width: 40rem;
`;

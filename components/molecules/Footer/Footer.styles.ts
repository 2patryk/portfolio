import { layoutView } from "@/utils/styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.footer`
  ${layoutView};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(7)} 0
    ${({ theme }) => theme.spacing(4)};
`;

export const LogoWrapper = styled.div`
  width: 12rem;
  display: inline-block;
  margin: 0 2rem;
  margin-bottom: -1.4rem;
`;

export const Copyrights = styled.span``;

export const LastUpdate = styled.span``;

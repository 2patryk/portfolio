import { mediaTablet } from "@/utils/styles/responsive";
import styled, { css } from "styled-components";

export const Wrapper = styled.h2`
  ${({ theme }) => theme.typography("h2")};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  &::before {
    content: "";
    flex: 1;
    flex-basis: 1;
    height: 2rem;
    background: ${({ theme }) => theme.colors.textPrimary};

    ${mediaTablet(css`
      flex: unset;
      flex-basis: 30rem;
    `)}
  }

  &::after {
    content: "";
    flex: 1;
    height: 2rem;
    background: ${({ theme }) => theme.colors.textPrimary};
  }
`;

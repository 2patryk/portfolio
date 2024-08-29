import {
  layoutView,
  hover,
  outlineOnFocus,
  defaultHover,
} from "@/utils/styles/mixins";
import { mediaTablet } from "@/utils/styles/responsive";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  ${layoutView};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(7)} 0
    ${({ theme }) => theme.spacing(7)};
  gap: ${({ theme }) => theme.spacing(1.5)};

  ${mediaTablet(css`
    padding: ${({ theme }) => theme.spacing(7)} 0
      ${({ theme }) => theme.spacing(4)};
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  `)}
`;

export const LogoWrapper = styled(Link)`
  ${defaultHover};
  width: 16rem;
  padding: 2rem;
  display: inline-block;
  margin-bottom: -3.4rem;
`;

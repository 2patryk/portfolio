import {
  layoutView,
  hover,
  outlineOnFocus,
  defaultHover,
} from "@/utils/styles/mixins";
import { mediaTablet } from "@/utils/styles/responsive";
import Link from "next/link";
import styled, { css } from "styled-components";

import SvgGithub from "@/public/images/github.svg";
import SvgLinkedin from "@/public/images/linkedin.svg";

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

  a {
    ${defaultHover};
  }
`;

export const LogoWrapper = styled(Link)`
  width: 12rem;
  display: inline-block;
  margin-bottom: -1.5rem;
  margin-left: 6rem;
`;

export const GithubIcon = styled(SvgGithub)`
  width: 12rem;
  display: inline-block;
  margin-bottom: -1.4rem;
`;

export const LinkedinIcon = styled(SvgLinkedin)`
  width: 10rem;
  display: inline-block;
`;

export const Anchor = styled.a`
  margin: 0 6rem 0;
`;

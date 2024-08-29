import Link from "next/link";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
import { hover, outlineOnFocus } from "@/utils/styles/mixins";

export const Wrapper = styled(Link)<{ $variant: ButtonProps["variant"] }>`
  ${({ theme }) => theme.typography("cta")};
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.background};
  transition: font-weight 0.4s ease-in-out;

  ${outlineOnFocus()};
  ${hover(css`
    font-weight: 750;
  `)}
`;

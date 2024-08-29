import { layoutView } from "@/utils/styles/mixins";
import styled, { css } from "styled-components";
import { HeaderProps } from "./Header";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  z-index: -1;
`;

export const Container = styled.header<{
  $overrideTheme?: HeaderProps["overrideTheme"];
}>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  pointer-events: none;

  ${({ $overrideTheme, theme }) =>
    $overrideTheme === "dark" &&
    css`
      color: ${theme.colors.light};

      ${Background} {
        background-color: ${theme.colors.dark};
      }
    `};

  ${({ $overrideTheme, theme }) =>
    $overrideTheme === "light" &&
    css`
      color: ${theme.colors.dark};

      ${Background} {
        background-color: ${theme.colors.light};
      }
    `};
`;

export const Wrapper = styled.div`
  ${layoutView};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rem 0;

  a,
  label,
  button {
    pointer-events: all;
  }
`;

export const LogoWrapper = styled.div`
  margin-left: -10rem;
  padding: 10rem;
  width: 50rem;
`;

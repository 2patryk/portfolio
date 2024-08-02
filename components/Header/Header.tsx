"use client";

import { FC } from "react";

import * as Styled from "./Header.styles";
import ColorSchemeSwitch from "../ColorSchemeSwitch/ColorSchemeSwitch";
import dynamic from "next/dynamic";

type HeaderProps = {};

const SetTheme = dynamic(
  () => import("../ColorSchemeSwitch/ColorSchemeSwitch"),
  {
    ssr: false,
  }
);

const Header: FC<HeaderProps> = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Patryk</Styled.Title>
      <ColorSchemeSwitch />
    </Styled.Wrapper>
  );
};

export default Header;

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
      <Styled.TextBox>
        <Styled.PreTitle>Hi there, I'm</Styled.PreTitle>
        <Styled.Title>Patryk Ordon</Styled.Title>
        <Styled.PostTitle>Frontend & Creative Developer</Styled.PostTitle>
      </Styled.TextBox>
      <ColorSchemeSwitch />
    </Styled.Wrapper>
  );
};

export default Header;

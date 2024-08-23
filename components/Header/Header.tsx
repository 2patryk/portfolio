"use client";

import { FC } from "react";

import * as Styled from "./Header.styles";
import ColorSchemeSwitch from "../ColorSchemeSwitch/ColorSchemeSwitch";
import dynamic from "next/dynamic";
import { globalCopy } from "@/utils/copy";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const copy = globalCopy.header;

  return (
    <Styled.Wrapper>
      <Styled.TextBox>
        <Styled.PreTitle>{copy.preTitle}</Styled.PreTitle>
        <Styled.Title>{copy.title}</Styled.Title>
        <Styled.PostTitle>{copy.postTitle}</Styled.PostTitle>
      </Styled.TextBox>
      <ColorSchemeSwitch />
    </Styled.Wrapper>
  );
};

export default Header;

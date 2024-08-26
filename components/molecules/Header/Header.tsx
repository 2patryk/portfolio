"use client";

import { FC } from "react";

import * as Styled from "./Header.styles";
import ColorSchemeSwitch from "../../atoms/ColorSchemeSwitch/ColorSchemeSwitch";
import { globalCopy } from "@/utils/copy";
import Logo from "@/components/atoms/Logo/Logo";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const copy = globalCopy.header;

  return (
    <Styled.Container>
      <Styled.MaskBackground>
        <Logo onlyShape />
      </Styled.MaskBackground>
      <Styled.Wrapper>
        <Styled.TextBox>
          <Styled.PreTitle>{copy.preTitle}</Styled.PreTitle>
          <Styled.Title>{copy.title}</Styled.Title>
          <Styled.PostTitle>{copy.postTitle}</Styled.PostTitle>
        </Styled.TextBox>
        <ColorSchemeSwitch />
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Header;

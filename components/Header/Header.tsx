import { FC } from "react";

import * as Styled from "./Header.styles";
import ColorSchemeSwitch from "../ColorSchemeSwitch/ColorSchemeSwitch";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Patryk</Styled.Title>
      <ColorSchemeSwitch />
    </Styled.Wrapper>
  );
};

export default Header;

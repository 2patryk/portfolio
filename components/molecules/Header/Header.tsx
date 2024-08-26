import { FC } from "react";

import * as Styled from "./Header.styles";
import ColorSchemeSwitch from "@/components/atoms/ColorSchemeSwitch/ColorSchemeSwitch";
import Logo from "@/components/atoms/Logo/Logo";

type HeaderProps = {};

const Header: FC = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.LogoWrapper>
          <Logo hasFluidSize />
        </Styled.LogoWrapper>
        <ColorSchemeSwitch />
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Header;

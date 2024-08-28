import { FC } from "react";

import * as Styled from "./Header.styles";
import ColorSchemeSwitch from "@/components/atoms/ColorSchemeSwitch/ColorSchemeSwitch";
import Logo from "@/components/atoms/Logo/Logo";
import Link from "next/link";

type HeaderProps = {};

const Header: FC = () => {
  return (
    <Styled.Container>
      <Styled.Background />
      <Styled.Wrapper>
        <Link href="/">
          <Styled.LogoWrapper>
            <Logo hasFluidSize />
          </Styled.LogoWrapper>
        </Link>
        <ColorSchemeSwitch />
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Header;

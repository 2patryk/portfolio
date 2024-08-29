import { FC } from "react";

import * as Styled from "./Footer.styles";
import Logo from "@/components/atoms/Logo/Logo";
import { globalCopy } from "@/utils/copy";

export type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <Styled.Wrapper>
      <span>
        © {new Date().getFullYear()}{" "}
        <Styled.LogoWrapper href="/">
          <Logo hasFluidSize />
        </Styled.LogoWrapper>{" "}
        {globalCopy.global.name}
      </span>

      <span>
        {globalCopy.footer.lastUpdate}: {globalCopy.global.lastUpdate}
      </span>
    </Styled.Wrapper>
  );
};

export default Footer;

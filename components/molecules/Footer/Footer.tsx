import { FC } from "react";

import * as Styled from "./Footer.styles";
import Logo from "@/components/atoms/Logo/Logo";
import { globalCopy } from "@/utils/copy";

export type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <Styled.Wrapper>
      <Styled.Copyrights>
        © {new Date().getFullYear()}{" "}
        <Styled.LogoWrapper>
          <Logo hasFluidSize />
        </Styled.LogoWrapper>{" "}
        {globalCopy.global.name}
      </Styled.Copyrights>

      <Styled.LastUpdate>
        {globalCopy.footer.lastUpdate}: {globalCopy.global.lastUpdate}
      </Styled.LastUpdate>
    </Styled.Wrapper>
  );
};

export default Footer;

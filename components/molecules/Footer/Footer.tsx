import { FC } from "react";

import * as Styled from "./Footer.styles";
import Logo from "@/components/atoms/Logo/Logo";
import { globalCopy } from "@/utils/copy";

export type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <Styled.Wrapper>
      <span>
        © {new Date().getFullYear()} {globalCopy.global.name}
        {" / "}
        <Styled.LogoWrapper href="/">
          <Logo hasFluidSize />
        </Styled.LogoWrapper>{" "}
        <a target="_blank" href={globalCopy.global.linkedin}>
          <Styled.LinkedinIcon />
        </a>{" "}
        <a target="_blank" href={globalCopy.global.github}>
          <Styled.GithubIcon />
        </a>
      </span>

      <span>
        {globalCopy.footer.lastUpdate}: {globalCopy.global.lastUpdate}
      </span>
    </Styled.Wrapper>
  );
};

export default Footer;

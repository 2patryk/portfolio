import { FC } from "react";
import * as Styled from "./Logo.styles";

import SvgLogo from "@/public/images/logo.svg";
import SvgLogoShape from "@/public/images/logo-shape.svg";

export type LogoProps = {
  progress?: number; // [0-1]
};

const Logo: FC<LogoProps> = ({ progress }) => {
  const logoProgress = progress !== undefined ? 1 - progress : undefined;

  return (
    <Styled.Wrapper>
      {progress !== undefined && (
        <Styled.LogoWrapper>
          <SvgLogoShape />
        </Styled.LogoWrapper>
      )}
      <Styled.LogoWrapper $progress={logoProgress}>
        <SvgLogo />
      </Styled.LogoWrapper>
    </Styled.Wrapper>
  );
};

export default Logo;

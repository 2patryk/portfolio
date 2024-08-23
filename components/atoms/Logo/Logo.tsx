import { FC, useEffect, useRef, useState } from "react";
import * as Styled from "./Logo.styles";

import SvgLogoShape from "@/public/images/logo-shape.svg";
import SvgLogo from "@/public/images/logo.svg";
import { useAnimation } from "framer-motion";
import { logoAnimationsVariants } from "./Logo.utils";

export type LogoProps = {
  isLoading?: boolean;
  onlyShape?: boolean;
};

const Logo: FC<LogoProps> = ({ isLoading, onlyShape }) => {
  const isStatic = isLoading === undefined;
  const animationInProgress = useRef(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!isStatic) {
      if (isLoading) {
        animationInProgress.current = true;
        controls.start("loading");
      } else {
        if (!animationInProgress.current) {
          controls.start("finished");
        }
      }
    }
  }, [controls, isLoading, isStatic]);

  return (
    <>
      <Styled.Wrapper $hasMask={!isStatic}>
        {isStatic && !onlyShape ? <SvgLogo /> : <SvgLogoShape />}
        {!isStatic && (
          <Styled.Progress
            variants={logoAnimationsVariants}
            animate={controls}
            onAnimationComplete={(anim) => {
              if (anim === "loading") {
                if (!isLoading) {
                  animationInProgress.current = false;
                  return controls.start("finished");
                }
                return controls.start("loading");
              }
            }}
          />
        )}
      </Styled.Wrapper>
    </>
  );
};

export default Logo;

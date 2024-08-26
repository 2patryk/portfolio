import { FC, useEffect, useRef, useState } from "react";
import * as Styled from "./Logo.styles";

import SvgLogoShape from "@/public/images/logo-shape.svg";
import SvgLogo from "@/public/images/logo.svg";
import { useAnimation } from "framer-motion";
import { logoAnimationsVariants } from "./Logo.utils";

export type LogoProps = {
  isLoading?: boolean;
  onlyShape?: boolean;
  onFinish?: () => void;
  hasFluidSize?: boolean;
};

const Logo: FC<LogoProps> = ({
  isLoading,
  onlyShape,
  hasFluidSize,
  onFinish,
}) => {
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
      <Styled.Wrapper $hasMask={!isStatic} $hasFluidSize={hasFluidSize}>
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
              if (anim === "finished") {
                onFinish && onFinish();
              }
            }}
          />
        )}
      </Styled.Wrapper>
    </>
  );
};

export default Logo;

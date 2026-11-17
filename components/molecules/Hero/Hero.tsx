"use client";

import { FC } from "react";

import *  as Styled from "./Hero.styles";
import { globalCopy } from "@/utils/copy";
import Logo from "@/components/atoms/Logo/Logo";

type HeroProps = {
  /**
   * The background logo zooms out on mount. Keep it paused (held zoomed in)
   * while something covers the hero, e.g. the loading overlay.
   */
  isIntroPaused?: boolean;
};

const Hero: FC<HeroProps> = ({ isIntroPaused }) => {
  const copy = globalCopy.pages.home.hero;

  return (
    <Styled.Container>
      <Styled.MaskBackground $isZoomPaused={isIntroPaused}>
        <Logo onlyShape />
      </Styled.MaskBackground>
      <Styled.Wrapper>
        <Styled.Content>
          <Styled.Title>
            {copy.preName} <Styled.Bold>{copy.name}</Styled.Bold>,
          </Styled.Title>
          <Styled.Position>
            {copy.prePosition} <Styled.Bold>{copy.position}</Styled.Bold>.
          </Styled.Position>
          <Styled.Description>{copy.description}.</Styled.Description>
        </Styled.Content>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Hero;

"use client";

import { FC } from "react";

import *  as Styled from "./Hero.styles";
import { globalCopy } from "@/utils/copy";
import Logo from "@/components/atoms/Logo/Logo";

type HeroProps = {};

const Hero: FC<HeroProps> = () => {
  const copy = globalCopy.pages.home.hero;

  return (
    <Styled.Container>
      <Styled.MaskBackground>
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

"use client";

import { FC } from "react";

import Hero from "@/components/molecules/Hero/Hero";

import * as Styled from "./HomePage.styles";
import Section from "@/components/atoms/Section/Section";
import { globalCopy } from "@/utils/copy";

const HomePage: FC = () => {
  const copy = globalCopy.pages.home;

  return (
    <Styled.Wrapper>
      <Hero />
      {/* <Section heading={copy.about.label}>TEST</Section> */}
    </Styled.Wrapper>
  );
};

export default HomePage;

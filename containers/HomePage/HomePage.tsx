"use client";

import { FC } from "react";

import Hero from "@/components/molecules/Hero/Hero";

import * as Styled from "./HomePage.styles";
import Section from "@/components/atoms/Section/Section";

const HomePage: FC = () => {
  return (
    <Styled.Wrapper>
      <Hero />
      {/* <Section heading="About me">TEST</Section> */}
    </Styled.Wrapper>
  );
};

export default HomePage;

"use client";

import { FC } from "react";

import Hero from "@/components/molecules/Hero/Hero";

import * as Styled from "./HomePage.styles";

const HomePage: FC = () => {
  return (
    <Styled.Wrapper>
      <Hero />
    </Styled.Wrapper>
  );
};

export default HomePage;

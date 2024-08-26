"use client";

import { FC } from "react";

import Header from "@/components/molecules/Header/Header";

import * as Styled from "./HomePage.styles";

const HomePage: FC = () => {
  return (
    <Styled.Wrapper>
      <Header />
    </Styled.Wrapper>
  );
};

export default HomePage;

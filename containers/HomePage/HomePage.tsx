"use client";

import { FC } from "react";

import Hero from "@/components/molecules/Hero/Hero";

import * as Styled from "./HomePage.styles";
import Section from "@/components/atoms/Section/Section";
import { globalCopy } from "@/utils/copy";
import Counter from "@/components/atoms/Counter/Counter";
import Highlight from "@/components/atoms/Highlight/Highlight";

const HomePage: FC = () => {
  const copy = globalCopy.pages.home;

  return (
    <Styled.Wrapper>
      <Hero />
      <Section heading={copy.about.label}>
        <Styled.AboutWrapper>
          <Styled.Summary>{copy.about.summary}</Styled.Summary>
          <Styled.NumbersWrapper>
            {copy.about.numbers.map(({ count, label }) => (
              <Counter key={label} count={count} label={label} plus />
            ))}
          </Styled.NumbersWrapper>
        </Styled.AboutWrapper>
      </Section>
      {/* <Section heading={copy.projects.label}>
        <></>
      </Section> */}
      <Section heading={copy.contact.label}>
        <Styled.Contact>
          {copy.contact.contact.pre}{" "}
          <a target="_blank" href={globalCopy.global.linkedin}>
            {copy.contact.contact.linkedin}
          </a>{" "}
          {copy.contact.contact.or}{" "}
          <a target="_blank" href={`mailto:${globalCopy.global.email}`}>
            {copy.contact.contact.email}
          </a>
          .
        </Styled.Contact>
      </Section>
    </Styled.Wrapper>
  );
};

export default HomePage;

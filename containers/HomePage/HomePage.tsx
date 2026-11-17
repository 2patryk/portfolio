"use client";

import { FC, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import Hero from "@/components/molecules/Hero/Hero";

import * as Styled from "./HomePage.styles";
import Section from "@/components/atoms/Section/Section";
import { globalCopy } from "@/utils/copy";
import Counter from "@/components/atoms/Counter/Counter";
import ProjectsGrid from "@/components/organisms/ProjectsGrid/ProjectsGrid";
import { projectsOrder } from "@/utils/config";
import Footer from "@/components/molecules/Footer/Footer";
import { useGlobalStore } from "@/utils/global.store";
import { pageTransition } from "@/utils/styles/mixins";

const HomePage: FC = () => {
  const shouldReduceMotion = useReducedMotion();
  // On a full page load the Loading overlay is still up (isLoading) and
  // handles the intro; only client-side navigations to the landing fade in.
  const [isClientNavigation] = useState(
    () => !useGlobalStore.getState().isLoading
  );
  const shouldFadeIn = isClientNavigation && !shouldReduceMotion;
  const isLoaderVisible = useGlobalStore((s) => s.isLoaderVisible);

  const copy = globalCopy.pages.home;
  const projects = useMemo(
    () => projectsOrder.map((project) => globalCopy.projects[project]),
    []
  );

  return (
    <motion.div
      initial={shouldFadeIn ? pageTransition.initial : false}
      animate={pageTransition.animate}
      transition={pageTransition.transition}
    >
      <Styled.Wrapper>
        <Hero isIntroPaused={isLoaderVisible} />
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
        <Section heading={copy.projects.label}>
          <Styled.ProjectsGridWrapper>
            <ProjectsGrid projects={projects} />
          </Styled.ProjectsGridWrapper>
        </Section>
        <Section heading={copy.contact.label}>
          <Styled.Contact>
            {copy.contact.contact.pre}{" "}
            <a target="_blank" rel="noreferrer" href={globalCopy.global.linkedin}>
              {copy.contact.contact.linkedin}
            </a>{" "}
            {copy.contact.contact.or}{" "}
            <a target="_blank" rel="noreferrer" href={`mailto:${globalCopy.global.email}`}>
              {copy.contact.contact.email}
            </a>
            .
          </Styled.Contact>
        </Section>
      </Styled.Wrapper>
      <Footer />
    </motion.div>
  );
};

export default HomePage;

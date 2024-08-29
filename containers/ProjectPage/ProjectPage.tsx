"use client";

import { FC } from "react";

import * as Styled from "./ProjectPage.styles";
import { ProjectCopy } from "@/utils/copy";
import ProjectHero from "@/components/molecules/ProjectHero/ProjectHero";

export type ProjectPageProps = {
  projectCopy: ProjectCopy;
};

const ProjectPage: FC<ProjectPageProps> = ({ projectCopy }) => {
  return (
    <Styled.Wrapper>
      <ProjectHero projectCopy={projectCopy} />
    </Styled.Wrapper>
  );
};

export default ProjectPage;

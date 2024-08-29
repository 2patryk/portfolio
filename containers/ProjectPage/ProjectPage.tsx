"use client";

import { FC } from "react";

import * as Styled from "./ProjectPage.styles";
import { ProjectCopy } from "@/utils/copy";

export type ProjectPageProps = {
  projectCopy: ProjectCopy;
};

const ProjectPage: FC<ProjectPageProps> = ({ projectCopy }) => {
  return <Styled.Wrapper>{projectCopy.name}</Styled.Wrapper>;
};

export default ProjectPage;

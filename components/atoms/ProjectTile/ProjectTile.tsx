import { FC } from "react";

import * as Styled from "./ProjectTile.styles";

import { Project } from "@/utils/copy";

export type ProjectTileProps = {
  project: Project;
};

const ProjectTile: FC<ProjectTileProps> = ({ project }) => {
  return (
    <Styled.Wrapper href="#">
      <Styled.Background
        fill
        alt={project.alts.background}
        src={project.background}
      />
      <Styled.AboutBox>{project.shortname || project.name}</Styled.AboutBox>
    </Styled.Wrapper>
  );
};

export default ProjectTile;

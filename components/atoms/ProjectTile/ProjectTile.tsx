import { FC } from "react";

import * as Styled from "./ProjectTile.styles";

import { Project } from "@/utils/copy";

export type ProjectTileProps = {
  project?: Project; // TODO: Remove ?
};

const ProjectTile: FC<ProjectTileProps> = ({ project }) => {
  return <Styled.Wrapper>{project?.shortname}</Styled.Wrapper>;
};

export default ProjectTile;

import { FC } from "react";

import * as Styled from "./ProjectTile.styles";

import { ProjectCopy } from "@/utils/copy";

export type ProjectTileProps = {
  project: ProjectCopy;
  onHover?: (hovered: boolean) => void;
  isInBackground?: boolean;
};

const ProjectTile: FC<ProjectTileProps> = ({
  project,
  onHover,
  isInBackground,
}) => {
  return (
    <Styled.Wrapper
      href="#"
      onMouseEnter={onHover ? () => onHover(true) : undefined}
      onMouseLeave={onHover ? () => onHover(false) : undefined}
      $isInBackground={isInBackground}
    >
      <Styled.Background
        fill
        alt={project.alts.background}
        src={project.background}
      />
      <Styled.Mask $colors={project.colors} />
      <Styled.AboutBox>{project.shortname || project.name}</Styled.AboutBox>
    </Styled.Wrapper>
  );
};

export default ProjectTile;

import { FC } from "react";

import { format } from "date-fns";

import * as Styled from "./ProjectTile.styles";

import { globalCopy, ProjectCopy } from "@/utils/copy";

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
      target="_blank"
      href="https://www.linkedin.com/in/patrykordon/details/projects/" // TODO: Temp solution
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
      <Styled.AboutBox $colors={project.colors}>
        <Styled.Name>{project.shortname || project.name}</Styled.Name>
        <Styled.Extra>
          <Styled.Company>{project.company}</Styled.Company>/
          <Styled.Date>
            {format(new Date(project.dates.to), "LLL yyyy")}
          </Styled.Date>
        </Styled.Extra>
      </Styled.AboutBox>
    </Styled.Wrapper>
  );
};

export default ProjectTile;

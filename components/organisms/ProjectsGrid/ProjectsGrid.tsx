import { FC, useRef, useState } from "react";

import * as Styled from "./ProjectsGrid.styles";
import { ProjectCopy } from "@/utils/copy";
import ProjectTile from "@/components/atoms/ProjectTile/ProjectTile";
import { useInView } from "framer-motion";

export type ProjectsGridProps = {
  projects: Array<ProjectCopy>;
};

const ProjectsGrid: FC<ProjectsGridProps> = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [activeProject, setActiveProject] = useState<ProjectCopy | null>(null);

  return (
    <Styled.Wrapper ref={ref}>
      <Styled.Background $colors={isInView ? activeProject?.colors : null} />
      <Styled.ProjectsContent>
        {projects.map((project) => (
          <ProjectTile
            key={project.name}
            project={project}
            onHover={(hovered) => {
              setActiveProject(hovered ? project : null);
            }}
            isInBackground={
              isInView && activeProject
                ? activeProject?.name !== project.name
                : false
            }
          />
        ))}
      </Styled.ProjectsContent>
    </Styled.Wrapper>
  );
};

export default ProjectsGrid;

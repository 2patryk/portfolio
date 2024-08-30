import { FC, useRef, useState } from "react";

import * as Styled from "./ProjectsGrid.styles";
import { ProjectCopy } from "@/utils/copy";
import ProjectTile from "@/components/atoms/ProjectTile/ProjectTile";
import { useInView } from "framer-motion";
import { useGlobalStore } from "@/utils/global.store";

export type ProjectsGridProps = {
  projects: Array<ProjectCopy>;
  hasBackgroundEffect?: boolean;
};

const ProjectsGrid: FC<ProjectsGridProps> = ({
  projects,
  hasBackgroundEffect = true,
}) => {
  const { isDesktop } = useGlobalStore();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [activeProject, setActiveProject] = useState<ProjectCopy | null>(null);

  return (
    <Styled.Wrapper ref={ref}>
      {isDesktop && hasBackgroundEffect && (
        <Styled.Background $colors={isInView ? activeProject?.colors : null} />
      )}
      <Styled.ProjectsContent $count={projects.length}>
        {projects.map((project) => (
          <ProjectTile
            key={project.name}
            project={project}
            onHover={
              isDesktop
                ? (hovered) => {
                    setActiveProject(hovered ? project : null);
                  }
                : undefined
            }
            isInBackground={
              isDesktop && isInView && activeProject
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

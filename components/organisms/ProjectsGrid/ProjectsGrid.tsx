import { FC, useEffect, useRef, useState } from "react";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<ProjectCopy | null>(null);

  // Expose each tile's column within its grid row as --col, used to stagger
  // the scroll-driven reveal. Measured from layout because spans and
  // breakpoints make the column impossible to derive from the child index.
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const update = () => {
      const nextColInRow = new Map<number, number>();
      Array.from(content.children).forEach((child) => {
        const tile = child as HTMLElement;
        const col = nextColInRow.get(tile.offsetTop) ?? 0;
        tile.style.setProperty("--col", String(col));
        nextColInRow.set(tile.offsetTop, col + 1);
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(content);
    return () => observer.disconnect();
  }, [projects]);

  // Scroll only triggers the reveal; its duration is fixed in CSS.
  // Tiles already on screen at mount stay as rendered to avoid a flash.
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.reveal = "in";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    Array.from(content.children).forEach((child) => {
      const tile = child as HTMLElement;
      if (tile.dataset.reveal === "in") return;
      if (tile.getBoundingClientRect().top < window.innerHeight) return;
      tile.dataset.reveal = "pending";
      observer.observe(tile);
    });

    return () => observer.disconnect();
  }, [projects]);

  return (
    <Styled.Wrapper ref={ref}>
      {isDesktop && hasBackgroundEffect && (
        <Styled.Background $colors={isInView ? activeProject?.colors : null} />
      )}
      <Styled.ProjectsContent ref={contentRef} $count={projects.length}>
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

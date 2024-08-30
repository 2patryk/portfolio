"use client";

import { FC, useMemo } from "react";

import * as Styled from "./ProjectPage.styles";
import { globalCopy, ProjectCopy } from "@/utils/copy";
import ProjectHero from "@/components/molecules/ProjectHero/ProjectHero";
import Highlight from "@/components/atoms/Highlight/Highlight";
import { formatDate } from "date-fns";
import Footer from "@/components/molecules/Footer/Footer";
import Asset from "@/components/atoms/Asset/Asset";
import Heading from "@/components/atoms/Heading/Heading";
import ProjectsGrid from "@/components/organisms/ProjectsGrid/ProjectsGrid";
import { Project, projectsOrder } from "@/utils/config";

const getRelatedProjects = (_project: Project) => {
  return projectsOrder
    .filter((project) => project !== (_project as Project))
    .map((project) => globalCopy.projects[project])
    .slice(0, 3);
};

export type ProjectPageProps = {
  projectCopy: ProjectCopy;
};

const ProjectPage: FC<ProjectPageProps> = ({ projectCopy }) => {
  const copy = globalCopy.pages.projects;
  const assets = useMemo(() => {
    if (!projectCopy.assets || projectCopy?.assets?.length === 0) return null;

    return {
      normal: projectCopy.assets.filter((asset) => asset.size !== "wide"),
      wide: projectCopy.assets.filter((asset) => asset.size === "wide"),
    };
  }, [projectCopy.assets]);

  const relatedProjects = useMemo(
    () => getRelatedProjects(projectCopy.id as Project),
    []
  );

  return (
    <Styled.Wrapper>
      <ProjectHero projectCopy={projectCopy} />
      <Styled.Content>
        <Styled.Description>
          <p>{projectCopy.description}</p>
          <Heading label="Responsibilities" />
          <p>{projectCopy.responsibilities}</p>
        </Styled.Description>
        <Styled.Highlights>
          <Highlight
            label={copy.highlights.company}
            content={projectCopy.company}
          />
          <Highlight
            label={copy.highlights.category}
            content={projectCopy.categories.join(", ")}
          />
          <Highlight
            label={copy.highlights.brand}
            content={projectCopy.highlights.brand.join(", ")}
          />
          <Highlight
            label={copy.highlights.platform}
            content={projectCopy.highlights.platforms.join(", ")}
          />
          <Highlight
            label={copy.highlights.release}
            content={formatDate(
              new Date(new Date(projectCopy.dates.to)),
              "LLL yyyy"
            )}
          />
          {projectCopy.highlights?.awards &&
            projectCopy.highlights?.awards?.length > 0 && (
              <Highlight
                label={copy.highlights.awards}
                content={projectCopy.highlights.awards.join(", ")}
              />
            )}
        </Styled.Highlights>
      </Styled.Content>
      <Styled.Assets $count={assets?.normal?.length}>
        {assets?.normal?.map((asset) => (
          <Asset
            key={asset.src}
            src={asset.src}
            alt={asset.alt as string}
            type={asset.type}
          />
        ))}
      </Styled.Assets>
      {assets?.wide && assets?.wide.length > 0 && (
        <Styled.WideAsset>
          <Asset
            src={assets.wide[0].src}
            type={assets.wide[0].type}
            alt={assets.wide[0].alt as string}
          />
        </Styled.WideAsset>
      )}
      <Styled.RelatedWrapper>
        <Heading label={copy.related} />
      </Styled.RelatedWrapper>
      <ProjectsGrid projects={relatedProjects} hasBackgroundEffect={false} />
      <Footer />
    </Styled.Wrapper>
  );
};

export default ProjectPage;

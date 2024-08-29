import NotFoundPage from "@/containers/NotFoundPage/NotFoundPage";
import ProjectPage from "@/containers/ProjectPage/ProjectPage";
import { globalCopy } from "@/utils/copy";
import { getSlug } from "@/utils/routes";
import { notFound } from "next/navigation";
import slugify from "slugify";

type PageParams = {
  slug: string;
};

type PageProps = {
  params: PageParams;
};

export function generateStaticParams() {
  const projects = Object.values(globalCopy.projects);

  return projects.map((project) => ({
    slug: slugify(project.name),
  }));
}

export default function Page({ params: { slug } }: PageProps) {
  const project = Object.entries(globalCopy.projects).find(
    ([, value]) => getSlug(value.name) === slug
  );
  const projectCopy = project ? project[1] : null;

  return projectCopy ? (
    <ProjectPage projectCopy={projectCopy} />
  ) : (
    <NotFoundPage />
  );
}

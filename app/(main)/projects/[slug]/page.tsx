import NotFoundPage from "@/containers/NotFoundPage/NotFoundPage";
import ProjectPage from "@/containers/ProjectPage/ProjectPage";
import { globalCopy } from "@/utils/copy";
import { getSlug } from "@/utils/routes";
import slugify from "slugify";

type PageParams = {
  slug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const getProject = (slug: string) => {
  const project = Object.entries(globalCopy.projects).find(
    ([key, value]) => getSlug(value.name) === slug
  );

  return project ? { id: project?.[0], ...project?.[1] } : null;
};

export function generateStaticParams() {
  const projects = Object.values(globalCopy.projects);

  return projects.map((project) => ({
    slug: slugify(project.name),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const projectCopy = getProject(slug);
  const metaCopy = globalCopy.meta;

  return {
    title: `${projectCopy?.name} – ${metaCopy.index.title}`,
    description: projectCopy?.description,
    openGraph: {
      images: [projectCopy?.background],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const projectCopy = getProject(slug);

  return projectCopy ? (
    <ProjectPage projectCopy={projectCopy} />
  ) : (
    <NotFoundPage />
  );
}

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ProjectHero from "./ProjectHero";
import { globalCopy } from "@/utils/copy";

const meta: Meta<typeof ProjectHero> = {
  component: ProjectHero,
};

export default meta;

export const Default: StoryObj<typeof ProjectHero> = {
  args: {
    projectCopy: globalCopy.projects.ask,
  },
};

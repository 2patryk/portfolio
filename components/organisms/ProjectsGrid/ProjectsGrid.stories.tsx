import type { Meta, StoryObj } from "@storybook/react";
import ProjectsGrid from "./ProjectsGrid";
import { projectsOrder } from "@/utils/config";
import { globalCopy } from "@/utils/copy";

const meta: Meta<typeof ProjectsGrid> = {
  component: ProjectsGrid,
  decorators: (Story) => (
    <div style={{ width: "min(800rem, 90vw)", padding: "50rem" }}>
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ProjectsGrid>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    projects: projectsOrder.map((project) => globalCopy.projects[project]),
  },
};

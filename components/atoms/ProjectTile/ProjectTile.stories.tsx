import type { Meta, StoryObj } from "@storybook/react";
import ProjectTile from "./ProjectTile";
import { globalCopy } from "@/utils/copy";

const meta: Meta<typeof ProjectTile> = {
  component: ProjectTile,
  decorators: (Story) => (
    <div style={{ width: "500rem", height: "200rem" }}>
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ProjectTile>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    project: globalCopy.projects.ask,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
  decorators: (Story) => (
    <div style={{ width: "100vw" }}>
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    label: "ABOUT ME",
  },
};

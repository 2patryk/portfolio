import type { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

const meta: Meta<typeof Counter> = {
  component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    count: 4,
    plus: true,
    label: "YEARS OF EXPERIENCE",
  },
};

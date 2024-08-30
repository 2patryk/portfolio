import type { Meta, StoryObj } from "@storybook/react";
import Asset from "./Asset";

const meta: Meta<typeof Asset> = {
  component: Asset,
};

export default meta;
type Story = StoryObj<typeof Asset>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    src: "/images/projects/ask/ask-wide.png",
    alt: "Alt ask",
    type: "image",
  },
};

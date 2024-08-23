import type { Meta, StoryObj } from "@storybook/react";
import ColorSchemeSwitch from "./ColorSchemeSwitch";

const meta: Meta<typeof ColorSchemeSwitch> = {
  component: ColorSchemeSwitch,
};

export default meta;
type Story = StoryObj<typeof ColorSchemeSwitch>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
};

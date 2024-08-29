import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonVariant } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    href: "https://www.google.com",
    label: "Click me",
    variant: ButtonVariant.PRIMARY,
  },
  parameters: {
    layout: "centered",
  },
};

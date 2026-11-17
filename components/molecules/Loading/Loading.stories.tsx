import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Loading from "./Loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    isLoading: true,
  },
};

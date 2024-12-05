import { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
  title: "components/Typography",
  component: Typography,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello, World!",
  },
};

export const Bold: Story = {
  args: {
    text: "Hello, World!",
    bold: true,
  },
};

export const Color: Story = {
  args: {
    text: "Hello, World!",
    color: "success",
  },
};

export const LongText: Story = {
  args: {
    text: "Hello, World! ".repeat(10),
  },
};

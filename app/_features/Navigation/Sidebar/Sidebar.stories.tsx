import { Meta, StoryObj } from "@storybook/react";

import { SidebarView } from "./SidebarView";

const meta = {
  title: "features/Navigation/Sidebar",
  component: SidebarView,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SidebarView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

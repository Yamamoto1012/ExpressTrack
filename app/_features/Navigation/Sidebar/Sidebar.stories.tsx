import { SidebarView } from "./SidebarView";
import { Meta, StoryObj } from "@storybook/react";

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
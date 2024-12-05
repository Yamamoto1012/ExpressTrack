import React from "react";
import { Noto_Sans_JP } from "next/font/google";
import "../app/globals.css";
import type { Preview, StoryFn } from "@storybook/react";

const NotoSansJP = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const decorators = [
  (Story: StoryFn) => (
    <div className={`${NotoSansJP.variable} font-noto-sans-jp`}>
      <Story />
    </div>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

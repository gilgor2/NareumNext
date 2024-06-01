import type { Preview } from "@storybook/react";
import '../src/app/globals.css'; // tailwind 적용
import { initialize, mswLoader } from 'msw-storybook-addon';//MSW적용

initialize();

const preview: Preview = {
  loaders:[mswLoader],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

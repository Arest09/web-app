import type { Preview } from "@storybook/react";
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme } from '../../src/app/provider/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  //ThemeDecorator(Theme.LIGHT)
  decorators: [StyleDecorator,] //каждый story будет обернута в данные декораторы
};
export default preview;

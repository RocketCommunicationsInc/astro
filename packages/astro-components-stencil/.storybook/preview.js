import { addDecorator } from '@storybook/web-components';
import { addReadme } from 'storybook-readme/html';

addDecorator(addReadme);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

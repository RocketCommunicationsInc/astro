import remarkGfm from 'remark-gfm';

module.exports = {
  stories: ['../src/stories/astro-uxds/StartHere.mdx', '../src/stories/**/*.mdx', '../src/stories/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-a11y',
      'storybook-addon-themes',
      '@astrouxds/storybook-addon-docs-stencil',
      {
        name: '@storybook/addon-docs',
      },
  ],

  staticDirs: ['../dist'],

  features: {
    postcss: false,
  },

  framework: {
      name: '@storybook/web-components-webpack5',
      options: {}
  },

  docs: {}
}

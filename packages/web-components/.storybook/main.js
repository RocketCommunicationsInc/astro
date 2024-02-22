module.exports = {
    stories: [
        '../src/stories/**/*.mdx',
        '../src/stories/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@astrouxds/storybook-addon-docs-stencil',
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-mdx-gfm',
    ],

    staticDirs: ['../dist'],

    framework: {
        name: '@storybook/web-components-webpack5',
        options: {},
    },

    docs: {
        autodocs: true,
    },
}

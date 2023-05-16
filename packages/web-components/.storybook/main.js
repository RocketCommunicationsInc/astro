module.exports = {
    stories: [
        '../src/stories/astro-uxds/welcome/StartHere.stories.mdx',
        '../src/stories/**/*.stories.mdx',
        '../src/stories/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        'storybook-addon-themes',
        '@astrouxds/storybook-addon-docs-stencil',
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

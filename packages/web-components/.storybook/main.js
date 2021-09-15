module.exports = {
    stories: [
        '../src/stories/welcome/StartHere.stories.mdx',
        '../src/stories/**/*.stories.mdx',
        '../src/stories/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        'storybook-addon-themes',
        '@astrouxds/storybook-addon-docs-stencil',
    ],
}

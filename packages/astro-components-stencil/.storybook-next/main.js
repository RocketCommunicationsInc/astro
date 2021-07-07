module.exports = {
    stories: [
        '../src/stories-next/welcome/StartHere.stories.mdx',
        '../src/stories-next/**/*.stories.mdx',
        '../src/stories-next/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        'storybook-addon-themes',
        '@astrouxds/storybook-addon-docs-stencil',
    ],
}

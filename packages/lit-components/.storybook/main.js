module.exports = {
    stories: ['../src/stories/astro-uxds/StartHere.mdx', '../src/stories/**/*.mdx', '../src/stories/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        'storybook-addon-themes',
        {
            name: '@storybook/addon-docs',
        },
    ],

    // For Lit components, we don't need a static dist directory
    // Components are loaded directly from source
    staticDirs: ['../public'],

    features: {
        postcss: false,
    },

    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },

    docs: {},
}

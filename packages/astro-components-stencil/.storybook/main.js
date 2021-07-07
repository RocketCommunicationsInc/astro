module.exports = {
    stories: [
        '../src/stories/welcome/StartHere.stories.mdx', // Set as first default page
        '../src/stories/*.stories.mdx',
        '../src/stories/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y',
        'storybook-readme',
        'storybook-addon-themes',
    ],
}

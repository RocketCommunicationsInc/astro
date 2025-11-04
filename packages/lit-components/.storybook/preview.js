import themes from './theme'
import './preview.css'

export const parameters = {
    options: {
        storySort: {
            order: ['Astro UXDS', 'Frameworks', 'Components', 'Beta', 'Forms', 'Utilities', 'Patterns', 'Themes'],
        },
    },
    viewport: {
        disable: true,
    },
    docs: {
        theme: themes.dark,
    },
    backgrounds: {
        grid: {
            disable: true,
        },
        disable: true,
    },
    controls: {
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    a11y: {
        element: '#storybook-root',
    },
}

export const tags = ['autodocs']

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'dark',
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: 'light', icon: 'sun', title: 'Light Theme' },
                { value: 'dark', icon: 'moon', title: 'Dark Theme' },
            ],
            showName: true,
        },
    },
}

// Add a decorator to apply the theme class
export const decorators = [
    (Story, context) => {
        // Apply the selected theme class
        const theme = context.globals.theme
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme'
        return Story()
    },
]

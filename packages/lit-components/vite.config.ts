import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    optimizeDeps: { exclude: ['fsevents'] },
    test: {
        browser: {
            enabled: true,
            provider: 'playwright',
            instances: [
                {
                    browser: 'firefox',
                },
            ],
        },
    },
})

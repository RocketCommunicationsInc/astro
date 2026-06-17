// vitest.config.ts
import { defineVitestConfig } from '@stencil/vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineVitestConfig({
    stencilConfig: './stencil.config.ts',
    test: {
        projects: [
            {
                test: {
                    name: 'spec',
                    include: ['src/**/*.spec.{ts,tsx}'],
                    environment: 'stencil',
                    setupFiles: ['./vitest-setup.ts'],
                },
            },
            {
                test: {
                    name: 'browser',
                    include: ['src/**/*.e2e.{ts,tsx}'],
                    setupFiles: ['./vitest-setup.ts'],
                    browser: {
                        enabled: true,
                        provider: playwright(),
                        headless: true,
                        instances: [{ browser: 'chromium' }],
                    },
                },
            },
        ],
    },
})

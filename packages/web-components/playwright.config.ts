import { PlaywrightTestConfig, expect } from '@playwright/test'

import { TestOptions } from './tests/utils/_astro-fixtures'
import { devices } from '@playwright/test'
import { matchers } from '@astrouxds/stencil-playwright'

expect.extend(matchers)

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig<TestOptions> = {
    testDir: './src/components',
    testMatch: '*.spec.ts',
    // testDir: './tests',
    /* Maximum time one test can run for. */
    timeout: 30 * 1000,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 5000,
        toMatchSnapshot: {
            /**
             * Increases the maximum allowed pixel difference to account
             * for slight browser rendering inconsistencies.
             */
            maxDiffPixelRatio: 0.02,
        },
        toHaveScreenshot: {
            maxDiffPixelRatio: 0.02,
        },
    },
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['html', { open: 'never' }],
        [process.env.CI ? 'github' : 'list'],
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 0,
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'http://localhost:3334',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium-vrt-dark',
            use: {
                ...devices['Desktop Chrome'],
                viewport: {
                    width: 1920,
                    height: 2080,
                },
                theme: 'dark',
            },
            grep: /@vrt/,
            snapshotDir: 'vrt-snaps',
        },
        {
            name: 'chromium-vrt-light',
            grep: /@vrt/,
            use: {
                ...devices['Desktop Chrome'],
                viewport: {
                    width: 1920,
                    height: 2080,
                },
                theme: 'light',
            },
            snapshotDir: 'vrt-snaps',
        },
        {
            name: 'chromium-e2e',
            grepInvert: /@vrt/,
            use: {
                ...devices['Desktop Chrome'],
                viewport: {
                    width: 1920,
                    height: 2080,
                },
            },
        },

        // {
        //     name: 'firefox',
        //     use: {
        //         ...devices['Desktop Firefox'],
        //     },
        // },

        // {
        //     name: 'webkit',
        //     use: {
        //         ...devices['Desktop Safari'],
        //     },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: {
        //     ...devices['Pixel 5'],
        //   },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: {
        //     ...devices['iPhone 12'],
        //   },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: {
        //     channel: 'msedge',
        //   },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: {
        //     channel: 'chrome',
        //   },
        // },
    ],

    /* Folder for test artifacts such as screenshots, videos, traces, etc. */
    // outputDir: 'test-results/',

    /* Run your local dev server before starting the tests */
    // webServer: {
    //     command: 'npm run start.stencil',
    //     url: 'http://localhost:3333/',
    //     reuseExistingServer: true,
    //     timeout: 90000,
    // },
    webServer: {
        command: 'serve -p 3334',
        port: 3334,
        reuseExistingServer: !process.env.CI,
    },
}

export default config

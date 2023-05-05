import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Clock', () => {
    test.beforeEach(async ({ page }) => {
        const fakeNow = new Date('December 31 2020 20:02:03Z').valueOf()

        await page.addInitScript(`{
          // Extend Date constructor to default to fakeNow
          Date = class extends Date {
            constructor(...args) {
              if (args.length === 0) {
                super(${fakeNow});
              } else {
                super(...args);
              }
            }
          }
          // Override Date.now() to start from fakeNow
          const __DateNowOffset = ${fakeNow} - Date.now();
          const __DateNow = Date.now;
          Date.now = () => __DateNow() + __DateNowOffset;
        }`)
    })

    test.use({ component: 'rux-clock' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})

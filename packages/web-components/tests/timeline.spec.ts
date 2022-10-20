import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Timeline', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <rux-timeline
                data-test-id="timeline"
                start="2021-02-01T00:00:00Z"
                end="2021-02-05T12:00:00Z"
                position="2021-02-01T04:00:00Z"
                interval="hour"
                zoom="1"
                timezone="America/New_York"
            >
                <rux-track data-test-id="track1">
                    <div slot="label">Track 1</div>
                </rux-track>
                <rux-track data-test-id="track2">
                    <div slot="label">Track 2</div>
                    <rux-time-region
                        data-test-id="editEvent"
                        start="2021-02-01T01:00Z"
                        end="2021-02-01T04:00Z"
                        >Existing Event</rux-time-region
                    >
                </rux-track>
                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
            </rux-timeline>
        `
        )
    })

    test('it renders', async ({ page }) => {
        const el = page.locator('rux-timeline').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})

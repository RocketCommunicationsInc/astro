import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Segmented-button', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
        <body>
        <div style="padding: 2.5% 5%">
            <rux-segmented-button></rux-segmented-button>
        </div>
        <div style="padding: 2.5% 5%">
            <rux-segmented-button size="small"></rux-segmented-button>
        </div>
        <div style="padding: 2.5% 5%">
            <rux-segmented-button size="medium"></rux-segmented-button>
        </div>
        <div style="padding: 2.5% 5%">
            <rux-segmented-button size="large"></rux-segmented-button>
        </div>
        <div style="padding: 2.5% 5%">
            <rux-segmented-button id="disabled" disabled></rux-segmented-button>
        </div>
        <script>
            const segs = document.querySelectorAll('rux-segmented-button')
            const disabled = document.getElementById('disabled')
            const data = [
                { label: 'First segment' },
                { label: 'Second segment', selected: true },
                { label: 'Third segment' },
            ]

            for (let seg of segs) {
                seg.data = data
                seg.addEventListener('click', () => {
                    console.log('heard click')
                })
                seg.addEventListener('ruxchange', () => {
                    console.log('heard change')
                })
            }

            disabled.data = data
            disabled.addEventListener('click', () => {
                console.log('Disabled --- heard click')
            })
            disabled.addEventListener('ruxchange', () => {
                console.log('disabled --- heard change')
            })
        </script>
    </body>
    `)
        const el = page.locator('rux-segmented-button').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -has props data, selected, size, disabled
*/

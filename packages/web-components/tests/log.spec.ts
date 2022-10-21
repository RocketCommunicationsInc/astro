import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'
//import { RuxLog } from '../src/components/rux-log/rux-log'
//import { LogRow } from '../src/components/rux-log/rux-log.model'

test.describe('Log', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-log id="testing"></rux-log>
            `
        )
        await page.addScriptTag({
            content: `
            const log = document.getElementById('testing')
            const data = [
                {
                    timestamp: new Date(1663804800000),
                    status: 'normal',
                    message: 'Quisque in arcu quis metus gravida bibendum',
                },
                {
                    timestamp: new Date(1663808844000),
                    status: 'critical',
                    message:
                        'Nullam non felis felis. Donec tempus faucibus gravida',
                },
                {
                    timestamp: new Date(1663839915000),
                    status: 'normal',
                    message: 'Aenean venenatis fringilla lorem non posuere',
                },
                {
                    timestamp: new Date(1663886320000),
                    status: 'standby',
                    message:
                        'Phasellus vulputate dolor non elit rutrum, in imperdiet augue tristique',
                },
                {
                    timestamp: new Date(1663885342000),
                    status: 'caution',
                    message: 'Nullam faucibus euismod facilisis',
                },
                {
                    timestamp: new Date(1663856520000),
                    status: 'serious',
                    message:
                        'Nam sed erat et nunc dictum lacinia id non libero',
                },
                {
                    timestamp: new Date(1663888271000),
                    status: 'normal',
                    message:
                        'Aliquam at fringilla turpis. Donec pharetra molestie ultrices',
                },
                {
                    timestamp: new Date(1663855620000),
                    status: 'off',
                    message:
                        'Vivamus interdum condimentum dolor et sollicitudin',
                },
                {
                    timestamp: new Date(1663889640000),
                    status: 'normal',
                    message: 'Curabitur vel viverra arcu, eu viverro odio',
                },
                {
                    timestamp: new Date(1557503698781),
                    status: 'standby',
                    message:
                        'In feugiat dui magna, a sodales lectus vestibulum in ',
                },
            ]

            log.data = data
            `,
        })

        const el = page.locator('rux-log').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
        const tableBody = el.locator('rux-table-body')
        await expect(el).toHaveClass('hydrated')
        await expect(tableBody).toHaveClass('hydrated')
    })
    test('it sets filter', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-log id="testing"></rux-log>
            `
        )
        await page.addScriptTag({
            content: `
            const log = document.getElementById('testing')
            const data = [
                {
                    timestamp: new Date(1557503698781),
                    status: 'off',
                    message: 'Antenna DGS 1 went offline.',
                },
                {
                    timestamp: new Date(1557503698781),
                    status: 'serious',
                    message: 'USA-177 experienced solar panel misalignment.',
                },
                {
                    timestamp: new Date(1557503698781),
                    status: 'caution',
                    message: 'USA-168 suffered power degradation.',
                }
            ]

            log.data = data
            `,
        })

        const input = page.locator('rux-input')
        //Specific positioning is required for the switch click due to the nature of the element
        await input.click()
        //await input.click({ position: { x: 10, y: 10 } })
        await input.type('USA')
        await page.keyboard.press('Enter')

        const filterNotification = page.locator('.rux-log__notification')

        await expect(filterNotification).toContainText(
            'A filter with USA is enabled. 1 of 3 records are currently hidden.'
        )
    })
})
/*
    Need to test: 
    -has attribute icon (necessary for the right SVG to render)
*/

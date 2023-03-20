// import { test, expect } from '../../../../tests/utils/_astro-fixtures'
// test.describe('Button reflection', () => {
//     test.beforeEach(async ({ page }) => {
//         const template = `
// 			<rux-button>Submit</rux-button>
// 		`
//         await page.setContent(template)
//     })

//     test('the icon property reflects to an attribute', async ({ page }) => {
//         const el = page.locator('rux-button')
//         await el.evaluate((buttonEl) => {
//             ;(buttonEl as HTMLRuxButtonElement).icon = 'apps'
//         })

//         await page.waitForChanges()

//         const attr = await el.evaluate((buttonEl) => {
//             return buttonEl.getAttribute('icon')
//         })
//         expect(attr).toBe('apps')
//     })

//     test('the iconOnly property reflects to an attribute', async ({ page }) => {
//         const el = page.locator('rux-button')
//         await el.evaluate((buttonEl) => {
//             ;(buttonEl as HTMLRuxButtonElement).iconOnly = true
//         })

//         await page.waitForChanges()

//         const attr = await el.evaluate((buttonEl) => {
//             return buttonEl.getAttribute('icon-only')
//         })
//         expect(attr).not.toBeNull()
//     })

//     test('the secondary property reflects to an attribute', async ({
//         page,
//     }) => {
//         const el = page.locator('rux-button')
//         await el.evaluate((buttonEl) => {
//             ;(buttonEl as HTMLRuxButtonElement).secondary = true
//         })

//         await page.waitForChanges()

//         const attr = await el.evaluate((buttonEl) => {
//             return buttonEl.getAttribute('secondary')
//         })
//         expect(attr).not.toBeNull()
//     })

//     test('the disabled property reflects to an attribute', async ({ page }) => {
//         const el = page.locator('rux-button')
//         await el.evaluate((buttonEl) => {
//             ;(buttonEl as HTMLRuxButtonElement).disabled = true
//         })

//         await page.waitForChanges()

//         const attr = await el.evaluate((buttonEl) => {
//             return buttonEl.getAttribute('disabled')
//         })
//         expect(attr).not.toBeNull()
//     })

//     test('the borderless property reflects to an attribute', async ({
//         page,
//     }) => {
//         const el = page.locator('rux-button')
//         await el.evaluate((buttonEl) => {
//             ;(buttonEl as HTMLRuxButtonElement).borderless = true
//         })

//         await page.waitForChanges()

//         const attr = await el.evaluate((buttonEl) => {
//             return buttonEl.getAttribute('borderless')
//         })
//         expect(attr).not.toBeNull()
//     })

//     test('the size property reflects to an attribute', async ({ page }) => {
//         const el = page.locator('rux-button')
//         await el.evaluate((buttonEl) => {
//             ;(buttonEl as HTMLRuxButtonElement).size = 'small'
//         })

//         await page.waitForChanges()

//         const attr = await el.evaluate((buttonEl) => {
//             return buttonEl.getAttribute('size')
//         })
//         expect(attr).toBe('small')
//     })

//     test('the type property reflects to an attribute', async ({ page }) => {
//         const el = page.locator('rux-button')
//         await el.evaluate((buttonEl) => {
//             ;(buttonEl as HTMLRuxButtonElement).type = 'submit'
//         })

//         await page.waitForChanges()

//         const attr = await el.evaluate((buttonEl) => {
//             return buttonEl.getAttribute('type')
//         })
//         expect(attr).toBe('submit')
//     })
// })

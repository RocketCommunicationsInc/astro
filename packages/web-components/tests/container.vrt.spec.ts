import { test, expect } from './utils/_astro-fixtures'

test.describe('Container', () => {
test('has no visual regression @vrt', async ({astroVRTPage, page}) => {
	await astroVRTPage.goto('components/rux-container/test/basic')
	await expect(page).toHaveScreenshot()
})
})
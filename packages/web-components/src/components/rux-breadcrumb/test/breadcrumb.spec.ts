import { test, expect } from '../../../../tests/utils/_astro-fixtures'
test.describe('Breadcrumb', () => {
    test('items with href are links without are not', async ({ page }) => {
        const template = `
        <rux-breadcrumb>
            <rux-breadcrumb-item href="#" data-id="first">First</rux-breadcrumb-item>
            <rux-breadcrumb-item href="#">Second</rux-breadcrumb-item>
            <rux-breadcrumb-item data-id="last">Third</rux-breadcrumb-item>
        </rux-breadcrumb>
        `
        await page.setContent(template)
        const el = await page.locator('rux-breadcrumb')
        const firstItem = await el.locator(
            `rux-breadcrumb-item[data-id='first']`
        )
        const lastItem = await el.locator(`rux-breadcrumb-item[data-id='last']`)
        const firstLink = await firstItem.locator('a')
        const lastLinkHREF = await lastItem.locator('a').getAttribute('href') //verifying it doesn't exist in assertion belowß

        //assert
        await expect(firstLink).toHaveAttribute('href', '#')
        await expect(lastLinkHREF).toBeNull() //verifying href doesn't exist on the link
    })
    test('new crumbs can be added', async ({ page }) => {
        const template = `
        <rux-breadcrumb>
            <rux-breadcrumb-item href="#">First</rux-breadcrumb-item>
            <rux-breadcrumb-item href="#">Second</rux-breadcrumb-item>
        </rux-breadcrumb>
        <button>add item</button>
        <script>
            const breadcrumb = document.querySelector('rux-breadcrumb')
            const addCrumb = document.querySelector('button')

            addCrumb.addEventListener('click', (e) => {
                const newItem = document.createElement('rux-breadcrumb-item')
                newItem.innerHTML = 'Third'
                breadcrumb.appendChild(newItem)
            })
        </script>
        `
        await page.setContent(template)
        const el = await page.locator('rux-breadcrumb')
        const ol = await el.locator('ol')
        const button = await page.locator('button')

        //assert
        await expect(ol.getByRole('listitem')).toHaveCount(2)

        //act - activate the button that adds a breadcrumb item
        await button.click()

        //assert
        await expect(ol.getByRole('listitem')).toHaveCount(3)
    })
})

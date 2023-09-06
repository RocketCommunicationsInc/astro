import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Tabs', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <div style="display: flex; flex-flow: column">
                <rux-tabs id="tab-set-id-1">
                    <rux-tab id="tab-id-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-2">Tab 2</rux-tab>
                    <rux-tab id="tab-id-3">Tab 3</rux-tab>
                </rux-tabs>
                <rux-tab-panels aria-labelledby="tab-set-id-1">
                    <rux-tab-panel aria-labelledby="tab-id-1">
                    Content 1
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-2">
                    Content 2
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-3">
                    Content 3
                    </rux-tab-panel>
                </rux-tab-panels>
            </div>
            <rux-button>Select Tab</rux-button>
        `

        await page.setContent(template)
    })

    test('it can properly show tab content after being removed/added', async ({
        page,
    }) => {
        // Add New Panel
        await page.evaluate(() => {
            const newTabEl = document.createElement('rux-tab')
            newTabEl.innerHTML = 'Tab 4 Title'
            newTabEl.setAttribute('id', 'tab-id-4')

            const newTabPanel = document.createElement('rux-tab-panel')
            newTabPanel.innerHTML = 'New Panel Content'
            newTabPanel.setAttribute('aria-labelledby', 'tab-id-4')
            newTabPanel.setAttribute('id', 'tab-panel-4')

            const tabsEl = document.querySelector('rux-tabs')
            const tabPanelsEl = document.querySelector('rux-tab-panels')

            tabsEl?.appendChild(newTabEl)
            tabPanelsEl?.appendChild(newTabPanel)
        })

        const newTabEl = page.locator('#tab-id-4')
        await newTabEl.click()

        const newTabPanel = page.locator('#tab-panel-4')
        await expect(newTabPanel).not.toHaveClass('hidden hydrated')
        await expect(newTabPanel).toBeVisible()

        // Remove Panel
        await page.evaluate(() => {
            const newTabEl = document.getElementById('tab-id-4')
            newTabEl?.remove()

            const newTabPanel = document.getElementById('tab-panel-4')
            newTabPanel?.remove()
        })

        // Add Panel Back
        await page.evaluate(() => {
            const newTabEl = document.createElement('rux-tab')
            newTabEl.innerHTML = 'Tab 4 Title'
            newTabEl.setAttribute('id', 'tab-id-4')

            const newTabPanel = document.createElement('rux-tab-panel')
            newTabPanel.innerHTML = 'New Panel Content'
            newTabPanel.setAttribute('aria-labelledby', 'tab-id-4')
            newTabPanel.setAttribute('id', 'tab-panel-4')

            const tabsEl = document.querySelector('rux-tabs')
            const tabPanelsEl = document.querySelector('rux-tab-panels')

            tabsEl?.appendChild(newTabEl)
            tabPanelsEl?.appendChild(newTabPanel)
        })

        const newTabEl2 = page.locator('#tab-id-4')
        await newTabEl2.click()

        const newTabPanel2 = page.locator('#tab-panel-4')
        await expect(newTabPanel2).toBeVisible()
    })

    test('first tab is selected by default', async ({ page }) => {
        //Arrange
        const tab1 = await page.locator('#tab-id-1')
        const tab2 = await page.locator('#tab-id-2')

        // Assert
        await expect(tab1).toHaveAttribute('selected', '')
        await expect(tab2).not.toHaveAttribute('selected', '')
    })

    test('selects tab when user clicks', async ({ page }) => {
        //Arrange
        const tab1 = await page.locator('#tab-id-1')
        const tab2 = await page.locator('#tab-id-2')
        const tab1Child = tab1.locator('.rux-tab')
        const tab2Child = tab2.locator('.rux-tab')

        //Act
        await tab2Child.click({ force: true })

        //Assert
        await expect(tab2).toHaveAttribute('selected', '')
        await expect(tab1).not.toHaveAttribute('selected', '')

        //Act
        await tab1Child.click({ force: true })

        //Assert
        await expect(tab1).toHaveAttribute('selected', '')
    })
    test('shows correct panel when its tab is clicked', async ({ page }) => {
        //Arrange
        const ruxTabPanel1 = await page.locator('rux-tab-panel').nth(0)
        const ruxTabPanel2 = await page.locator('rux-tab-panel').nth(1)
        const ruxTabPanel3 = await page.locator('rux-tab-panel').nth(2)
        const tabId2 = await page.locator('#tab-id-2')
        const tab2Child = tabId2.locator('.rux-tab')

        await ruxTabPanel1.evaluate(async (el) => {
            //@ts-ignore
            await el.componentOnReady()
        })
        //Assert

        await expect(ruxTabPanel1).not.toHaveClass('hydrated hidden')
        // await expect(ruxTabPanel2).toHaveClass('hydrated hidden')
        await ruxTabPanel2.evaluate((page) => {
            return (
                page.classList.contains('hydrated') &&
                page.classList.contains('hidden')
            )
        })

        await ruxTabPanel3.evaluate((page) => {
            return (
                page.classList.contains('hydrated') &&
                page.classList.contains('hidden')
            )
        })

        //Act
        await tab2Child.click({ force: true })

        //Assert
        await ruxTabPanel3.evaluate((page) => {
            return (
                page.classList.contains('hydrated') &&
                page.classList.contains('hidden')
            )
        })

        // await expect(ruxTabPanel3).toHaveClass('hydrated hidden')

        await ruxTabPanel1.evaluate((page) => {
            return (
                page.classList.contains('hydrated') &&
                page.classList.contains('hidden')
            )
        })
        await expect(ruxTabPanel1).toHaveClass('hydrated hidden')

        // await expect(ruxTabPanel2).not.toHaveClass('hydrated hidden')

        await ruxTabPanel3.evaluate((page) => {
            return (
                page.classList.contains('hydrated') &&
                page.classList.contains('hidden')
            )
        })
        // await expect(ruxTabPanel3).toHaveClass('hydrated hidden')
    })
    test('it emits ruxselected event', async ({ page }) => {
        const tabs = page.locator('rux-tabs').first()
        const tab = tabs.locator('rux-tab').last()
        const selectedEvent = await page.spyOnEvent('ruxselected')
        await tab.click()
        expect(selectedEvent).toHaveReceivedEventTimes(1)
    })
    test('Individual tab can be programatically selected', async ({ page }) => {
        await page.setContent(`
      <rux-tabs id="tab-set-id-1">
      <rux-tab id="tab-id-1">Tab 1 title</rux-tab>
      <rux-tab id="tab-id-2">Tab 2 title</rux-tab>
  </rux-tabs>

  <rux-tab-panels aria-labelledby="tab-set-id-1">
      <rux-tab-panel aria-labelledby="tab-id-1"
          >Tab 1 HTML content</rux-tab-panel
      >
      <rux-tab-panel aria-labelledby="tab-id-2"
          >Tab 2 HTML content</rux-tab-panel
      >
  </rux-tab-panels>
  <rux-button>Swap Selected</rux-button>
      `)
        await page.addScriptTag({
            content: `
            const btn = document.querySelector('rux-button')
            const tab1 = document.getElementById('tab-id-1')
            const tab2 = document.getElementById('tab-id-2')
            btn.addEventListener('click', () => {
                if (tab1.selected) {
                    tab1.selected = false
                    tab2.selected = true
                } else {
                    tab2.selected = false
                    tab1.selected = true
                }
            })
          `,
        })
        const ruxBtn = page.locator('rux-button')
        const tabs = page.locator('rux-tab')
        await expect(tabs.first()).toHaveAttribute('selected', '')
        const tab1Content = page.getByText('Tab 1 HTML content')
        await expect(tab1Content).toBeTruthy()
        await ruxBtn.click()
        await expect(tabs.first()).not.toHaveAttribute('selected', '')
        await expect(tabs.last()).toHaveAttribute('selected', '')
        const tab2Content = page.getByText('Tab 2 HTML content')
        await expect(tab2Content).toBeTruthy()
    })
})
test.describe('Multiple tabs on same page', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <div class="mydiv">
                <rux-tabs id="tab-set-id-1">
                    <rux-tab id="tab-id-1">Top 1 title</rux-tab>
                    <rux-tab id="tab-id-2">Top 2 title</rux-tab>
                    <rux-tab id="tab-id-3">Top 3 title</rux-tab>
                </rux-tabs>

                <rux-tab-panels aria-labelledby="tab-set-id-1">
                    <rux-tab-panel id="t1content" aria-labelledby="tab-id-1">Top Tab 1 content</rux-tab-panel>
                    <rux-tab-panel id="t2content" aria-labelledby="tab-id-2">Top Tab 2 content</rux-tab-panel>
                    <rux-tab-panel id="t3content" aria-labelledby="tab-id-3">Top Tab 3 content</rux-tab-panel>
                </rux-tab-panels>
            </div>

            <div class="mydiv">
                <rux-tabs id="tab-set-id-2">
                    <rux-tab id="tab-id-11">Middle 1 title</rux-tab>
                    <rux-tab id="tab-id-22">Middle 2 title</rux-tab>
                    <rux-tab id="tab-id-33">Middle 3 title</rux-tab>
                </rux-tabs>

                <rux-tab-panels aria-labelledby="tab-set-id-2">
                    <rux-tab-panel id="b1content" aria-labelledby="tab-id-11">Middle Tab 1 content</rux-tab-panel>
                    <rux-tab-panel id="b2content" aria-labelledby="tab-id-22">Middle Tab 2 content</rux-tab-panel>
                    <rux-tab-panel id="b3content" aria-labelledby="tab-id-33">Middle Tab 3 content</rux-tab-panel>
                </rux-tab-panels>
            </div>
            <div class="mydiv">
                <rux-tabs id="tab-set-id-3">
                    <rux-tab id="tab-id-111">Bottom 1 title</rux-tab>
                    <rux-tab id="tab-id-222">Bottom 2 title</rux-tab>
                    <rux-tab id="tab-id-333">Bottom 3 title</rux-tab>
                </rux-tabs>

                <rux-tab-panels aria-labelledby="tab-set-id-3">
                    <rux-tab-panel id="b1content" aria-labelledby="tab-id-111">Bottom Tab 1 content</rux-tab-panel>
                    <rux-tab-panel id="b2content" aria-labelledby="tab-id-222">Bottom Tab 2 content</rux-tab-panel>
                    <rux-tab-panel id="b3content" aria-labelledby="tab-id-333">Bottom Tab 3 content</rux-tab-panel>
                </rux-tab-panels>
            </div>
        `
        await page.setContent(template)
    })

    test('it should have the first tab of each rux-tabs visible', async ({
        page,
    }) => {
        const topContent = page
            .locator('rux-tab-panels')
            .first()
            .locator('rux-tab-panel')
            .first()
        await expect(topContent).toBeVisible()
        //Should only see the first rux-tab-panel
        const topContent2 = page
            .locator('rux-tab-panels')
            .first()
            .locator('rux-tab-panel')
            .nth(1)
        await expect(topContent2).not.toBeVisible()

        const middleContent = page
            .locator('rux-tab-panels')
            .nth(1)
            .locator('rux-tab-panel')
            .first()
        await expect(middleContent).toBeVisible()

        const bottomContent = page
            .locator('rux-tab-panels')
            .nth(2)
            .locator('rux-tab-panel')
            .first()
        await expect(bottomContent).toBeVisible()
    })
    test('it should not hide other rux-tabs content when a different rux-tab is clicked', async ({
        page,
    }) => {
        const toClick = page
            .locator('rux-tabs')
            .first()
            .locator('rux-tab')
            .nth(1)

        //This should not be visible until it's tab is clicked.
        const topContent2 = page
            .locator('rux-tab-panels')
            .first()
            .locator('rux-tab-panel')
            .nth(1)
        await expect(topContent2).not.toBeVisible()

        //This should remain visible throughout the test.
        const bottomContent = page
            .locator('rux-tab-panels')
            .nth(2)
            .locator('rux-tab-panel')
            .first()
        await expect(bottomContent).toBeVisible()

        //click the top middle tab
        await toClick.click()

        //That tab should be visible now, and the other tabs that were visible should still be visible.
        await expect(topContent2).toBeVisible()
        await expect(bottomContent).toBeVisible()
    })
    test('it can dynamically add tabs that behave correctly', async ({
        page,
    }) => {
        const template = `
            <rux-tabs id="tab-set-id-1">
                <rux-tab id="tab-id-1">Tab 1 title</rux-tab>
                <rux-tab id="tab-id-2">Tab 2 title</rux-tab>
                <rux-tab id="tab-id-3">Tab 3 title</rux-tab>
            </rux-tabs>

            <rux-tab-panels aria-labelledby="tab-set-id-1">
                <rux-tab-panel aria-labelledby="tab-id-1">Tab 1 HTML content</rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-2">Tab 2 HTML content</rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-3">Tab 3 HTML content</rux-tab-panel>
            </rux-tab-panels>
            <rux-button id="add">Add Tab</rux-button>
        `

        await page.setContent(template)
        await page.addScriptTag({
            content: `
    let tabs = document.querySelector('rux-tabs')
    let panels = document.querySelector('rux-tab-panels')
    let btn = document.getElementById('add')
    let count = document.querySelectorAll('rux-tab').length
    btn.addEventListener('click', () => {
        let newTab = document.createElement('rux-tab')
        count++
        newTab.id = 'tab-id-' + count
        newTab.textContent = 'Tab' + count + ' title'
        let newPanel = document.createElement('rux-tab-panel')
        let str = 'tab-id-' + count
        newPanel.setAttribute('aria-labelledby', str)
        newPanel.textContent = 'Tab ' + count + ' HTML content'
        tabs.appendChild(newTab)
        panels.appendChild(newPanel)
    })
    `,
        })

        //Add new tab by pressing button, select new tab, select diff tab. Check selected at each stage
        const btn = await page.locator('#add')
        await btn.click()
        const newTab = await page.locator('#tab-id-4')
        await expect(newTab).not.toHaveAttribute('selected', '')
        await newTab.click()
        // await page.waitForTimeout(100)
        await page.waitForChanges()
        await expect(newTab).toHaveAttribute('selected', '')
        // click again on first tab, make sure newTab becomes un-selected
        const firstTab = await page.locator('#tab-id-1')
        await firstTab.click()
        // await page.waitForTimeout(100)
        await page.waitForChanges()
        await expect(firstTab).toHaveAttribute('selected', '')
        await expect(newTab).not.toHaveAttribute('selected', '')
    })
})

test.describe('Tab Keyboard Navigation', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <div style="display: flex; flex-flow: column">
                <rux-tabs id="tab-set-id-1">
                    <rux-tab id="tab-id-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-2">Tab 2</rux-tab>
                    <rux-tab id="tab-id-3">Tab 3</rux-tab>
                </rux-tabs>
                <rux-tab-panels aria-labelledby="tab-set-id-1">
                    <rux-tab-panel aria-labelledby="tab-id-1">
                    Content 1
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-2">
                    Content 2
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-3">
                    Content 3
                    </rux-tab-panel>
                </rux-tab-panels>
            </div>
            <button id="button">Hi!</button>
        `

        await page.setContent(template)
    })

    test('selects tab when user hits enter', async ({ page }) => {
        //Arrange
        const tab1 = await page.locator('#tab-id-1')
        const tab2 = await page.locator('#tab-id-2')
        const tab1Child = tab1.locator('.rux-tab')
        const tab2Child = tab2.locator('.rux-tab')

        //Act
        await tab2Child.focus()
        await page.keyboard.press('Enter')

        //Assert
        await expect(tab2).toHaveAttribute('selected', '')
        await expect(tab1).not.toHaveAttribute('selected', '')

        //Act
        await tab1Child.focus()
        await page.keyboard.press('Enter')

        //Assert
        await expect(tab1).toHaveAttribute('selected', '')
    })
    test('moves between tabs with arrow keys', async ({ page }) => {
        //Arrange
        const tab1 = await page.locator('#tab-id-1')
        const tab2 = await page.locator('#tab-id-2')
        const tab3 = await page.locator('#tab-id-3')
        const tab1Child = tab1.locator('.rux-tab')
        const tab2Child = tab2.locator('.rux-tab')
        const tab3Child = tab3.locator('.rux-tab')

        //Act
        await tab1Child.focus()
        page.keyboard.press('ArrowRight')

        //Assert
        await expect(tab2Child).toBeFocused()

        //Act
        page.keyboard.press('ArrowRight')

        //Assert
        await expect(tab3Child).toBeFocused()

        //Act
        page.keyboard.press('ArrowLeft')

        //Assert
        await expect(tab2Child).toBeFocused()

        //Act
        page.keyboard.press('ArrowLeft')

        //Assert
        await expect(tab1Child).toBeFocused()
    })
    test('tabs to next focusable element on Tab key', async ({ page }) => {
        //Arrange
        const tab1 = await page.locator('#tab-id-1')
        const tab1Child = tab1.locator('.rux-tab')
        const button = page.locator('#button')

        //Act
        await tab1Child.focus()
        page.keyboard.press('Tab')

        //Assert
        await expect(button).toBeFocused()
    })
})

test.describe('Tab Keyboard Disabled Navigation', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <div style="display: flex; flex-flow: column">
                <rux-tabs id="tab-set-id-1">
                    <rux-tab id="tab-id-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-2" disabled >Tab 2</rux-tab>
                    <rux-tab id="tab-id-3">Tab 3</rux-tab>
                </rux-tabs>
                <rux-tab-panels aria-labelledby="tab-set-id-1">
                    <rux-tab-panel aria-labelledby="tab-id-1">
                    Content 1
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-2">
                    Content 2
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-3">
                    Content 3
                    </rux-tab-panel>
                </rux-tab-panels>
            </div>
            <button id="button">Hi!</button>
        `

        await page.setContent(template)
    })

    test('skips disabled tab(s)', async ({ page }) => {
        //Arrange
        const tab1 = await page.locator('#tab-id-1')
        const tab2 = await page.locator('#tab-id-2')
        const tab3 = await page.locator('#tab-id-3')
        const tab1Child = tab1.locator('.rux-tab')
        const tab2Child = tab2.locator('.rux-tab')
        const tab3Child = tab3.locator('.rux-tab')

        //Act
        await tab1Child.focus()
        page.keyboard.press('ArrowRight')

        //Assert
        await expect(tab2Child).not.toBeFocused()
        await expect(tab3Child).toBeFocused()

        //Act
        page.keyboard.press('ArrowLeft')

        //Assert
        await expect(tab2Child).not.toBeFocused()
        await expect(tab1Child).toBeFocused()
    })
})
/*
    Need to test:

*/

test.describe('Tabs only Tab Keyboard Navigation', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
          <button id="button">Hi!</button>
              <rux-tabs id="tab-set-id-1">
                  <rux-tab id="tab-id-1">Tab 1</rux-tab>
                  <rux-tab id="tab-id-2">Tab 2</rux-tab>
                  <rux-tab id="tab-id-3">Tab 3</rux-tab>
              </rux-tabs>
      `
        await page.setContent(template)
    })

    test('it tabs into the first tab when none are selected', async ({
        page,
    }) => {
        //Arrange
        const button = await page.locator('#button')
        const tab1 = await page.locator('#tab-id-1')
        const tab1Child = tab1.locator('.rux-tab')

        //Act
        await button.focus()
        await page.keyboard.press('Tab')

        //Assert
        await expect(tab1Child).toBeFocused()

        //Act
        await page.keyboard.press('Enter')

        //Assert
        await expect(tab1).toHaveAttribute('selected', '')
    })
})

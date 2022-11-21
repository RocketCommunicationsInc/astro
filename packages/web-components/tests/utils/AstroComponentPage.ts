import { Locator, Page } from '@playwright/test'

export class AstroComponentPage {
    readonly page: Page
    readonly firstChild: Locator

    constructor(page: Page) {
        this.page = page
        this.firstChild = page.locator('body > :first-child')
    }

    async goto() {
        await this.page.goto(`http://localhost:3333/`, 
		{
            waitUntil: "networkidle"
        }
		)
        // localhost:3333 needs to have some text on the page for this to work
		await this.page.waitForFunction(() => document.fonts.check("1em Roboto"))
    }

    async load(content: string, script?: string) {
        await this.page.evaluate(
            ([content]) => {
                document.body.innerHTML = content
            },
            [content]
        )

        // await this.page.setContent(content)
		// await this.page.addStyleTag({url: '/build/astro-web-components.css'})
		if (script) {
			await this.page.addScriptTag({path: script})
		}
        const el = await this.page.locator('body > :first-child')
        return el
    }

	async addListener(eventName: string) {
		await this.page.addScriptTag({
            content: `
				document.addEventListener('${eventName}', function (event) {
					console.log('Event Fired: ${eventName}', event.detail)
				})
			`
		})
	}
}
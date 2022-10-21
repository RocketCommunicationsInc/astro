import { Locator, Page } from '@playwright/test'

export class AstroFormPage {
    readonly page: Page
    readonly firstChild: Locator
    readonly form: Locator
    readonly log: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page
        this.firstChild = page.locator('body > :first-child')
        this.form = page.locator('form')
        this.log = page.locator('#log')
        this.submitButton = page.locator('#formSubmitBtn')
    }

    async goto() {
        await this.page.goto('http://localhost:3333')
    }


	async createForm(content: string) {
		const template = `
			<form>
				${content}
				<button id="formSubmitBtn" type="submit">submit</button>
                <ul id="log"></ul>
			</form>
		`
		await this.page.setContent(template)
		await this.page.addStyleTag({url: '/build/astro-web-components.css'})
		await this.page.addScriptTag({path: './tests/utils/formScript.js'})
		const el = await this.page.locator('form > :first-child')
		return el
	}

	async submitForm() {
		await this.submitButton.click()
	}

    async load(content: string, script?: string) {
        await this.page.setContent(content)
		await this.page.addStyleTag({url: '/build/astro-web-components.css'})
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
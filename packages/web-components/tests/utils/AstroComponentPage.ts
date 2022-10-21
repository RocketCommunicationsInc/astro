import { Locator, Page } from '@playwright/test'

export class AstroComponentPage {
    readonly page: Page
    readonly firstChild: Locator

    constructor(page: Page) {
        this.page = page
        this.firstChild = page.locator('body > :first-child')
    }

    async goto() {
        await this.page.goto('http://localhost:3333')
    }

    async load(content: string) {
        await this.page.setContent(content)
        const el = await this.page.locator('body > :first-child')
        return el
    }
}

import { Locator, Page } from '@playwright/test'

export class AstroVRTPage {
    readonly page: Page
    readonly firstChild: Locator

    constructor(page: Page) {
        this.page = page
        this.firstChild = page.locator('body > :first-child')
    }

    // async goto(url: string) {
    //     console.log('url',url);
        
		
    //     await this.page.goto(`http://localhost:3333${url}`, 
	// 	// {
    //     //     waitUntil: "networkidle"
    //     // }
	// 	)
	// 	// await this.page.waitForFunction(() => document.fonts.check("1em Roboto"))
    // }

 
}
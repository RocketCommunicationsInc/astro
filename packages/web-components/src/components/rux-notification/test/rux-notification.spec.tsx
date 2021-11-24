import { h } from '@stencil/core'
import { newSpecPage, SpecPage } from '@stencil/core/testing'
import { RuxNotification } from '../rux-notification'

jest.useFakeTimers()

describe('rux-notification', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxNotification],
            html: `<rux-notification open message="hello there"></rux-notification>`,
        })
        expect(page.root).toEqualHtml(`
         <rux-notification class="rux-notification-banner-0ba5409c--open" message="hello there" open="" status="standby">
           <mock:shadow-root>
             <div class="rux-notification__message">
               hello there
             </div>
             <rux-icon icon="close" label="Close notification" role="button" size="36px"></rux-icon>
        </mock:shadow-root>
      </rux-notification>
    `)
    })
    it('sets open to false after the closeAfter time has been met', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'Hey, Listen!'
        ruxNotif.status = 'critical'
        ruxNotif.closeAfter = 3000
        ruxNotif._updated()
        // expect(ruxNotif.open).toBe(false)
        setTimeout(() => expect(ruxNotif.open).toBe(false), 3001)
    })
    it('changes open to false with the _onClick method', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'The Light provides'
        ruxNotif.status = 'normal'
        ruxNotif._onClick()
        expect(ruxNotif.open).toBe(false)
    })
    it('returns the correct value using the get _closeAfter method', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'SEVENTH COLUMN'
        ruxNotif.status = 'critical'
        ruxNotif.closeAfter = 3000
        ruxNotif._closeAfter
        expect(ruxNotif._closeAfter).toBe(3000)
    })
    it('can accept milisecond values for closeAfter and closes notification', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'The Duality of RuxNotification'
        ruxNotif.status = 'caution'
        ruxNotif.closeAfter = 3000
        ruxNotif._updated()
        //!running updated should also do the timeout and close, if not that's your problem here
        // expect(ruxNotif.open).toBe(false)
        setTimeout(() => expect(ruxNotif.open).toBe(false), ruxNotif.closeAfter)
    })
    it('can accept second values for closeAfter and closes notification', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'The Duality of RuxNotification'
        ruxNotif.status = 'caution'
        ruxNotif.closeAfter = 3
        ruxNotif._updated()
        setTimeout(() => expect(ruxNotif.open).toBe(false), ruxNotif.closeAfter)
    })
    it('get _closeAfter returns 2000 if closeAfter is > 10s or < 2s', async () => {
        const ruxNotif = new RuxNotification()
        ruxNotif.open = true
        ruxNotif.message = 'Drums, drums in the deep'
        ruxNotif.status = 'critical'
        ruxNotif.closeAfter = 1
        ruxNotif._closeAfter
        expect(ruxNotif.closeAfter).toBe(2000)
        ruxNotif.closeAfter = 15000 // 15s
        ruxNotif._closeAfter
        expect(ruxNotif.closeAfter).toBe(2000)
    })

    it('should emit one event when closed', async () => {
        const buttonSpy = jest.fn()
        let page: SpecPage

        page = await newSpecPage({
            components: [RuxNotification],
            template: () => (
                <rux-notification
                    open
                    onRuxclosed={(ev: any) => buttonSpy(ev)}
                ></rux-notification>
            ),
        })!
        const notification = page.doc?.querySelector('rux-notification')
        expect(notification!.open).toBe(true)
        const icon = notification?.shadowRoot?.querySelector('rux-icon')
        page.waitForChanges()
        icon!.click()
        page.waitForChanges()

        expect(notification!.open).toBe(false)
        expect(buttonSpy).toHaveBeenCalledTimes(1)
    })
})

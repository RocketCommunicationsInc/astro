import { newSpecPage } from '@stencil/core/testing';
import { RuxStatus } from '../rux-status'

describe('rux-status', () => {
  it('builds', async () => {
    const status = new RuxStatus

    expect(status).toBeTruthy()
  })

  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxStatus],
      html:`<rux-status status='normal'></rux-status>`
    });

    expect(page.root).toEqualHtml(`
      <rux-status status="normal">
        <mock:shadow-root></mock:shadow-root>
      </rux-status>
    `)
  });

  it ('errors with invalid status', async () => {
    const status = new RuxStatus()

    expect(() => {
      status.validateStatus('invalid');
    }).toThrowError('valid status required')
  })
});





import { newE2EPage } from '@stencil/core/testing';

describe('rux-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-tabs></rux-tabs>');

    const element = await page.find('rux-tabs');
    expect(element).toHaveClass('hydrated');
  });
  it('first rux-tab has selected attr by default', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-tabs id="tab-set-id-1"><rux-tab id="tab-id-1">Tab 1 Title</rux-tab><rux-tab id="tab-id-2">Tab 2 Title</rux-tab></rux-tabs><rux-tab-panels aria-labelledby="tab-set-id-1"><rux-tab-panel aria-labelledby="tab-id-1"></rux-tab-panel></rux-tab-panels>')
    const allTabs  = await page.findAll('rux-tab');
    let tab1 = allTabs[0];
    let tab2 = allTabs[1];

    expect(tab1).toHaveAttribute('selected');
    //make sure that the 2nd tab is not defaulted to selected
    expect(tab2).not.toHaveAttribute('selected');
  })
  it('changes tab with selected attr based on user click', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-tabs id="tab-set-id-1"><rux-tab id="tab-id-1">Tab 1 Title</rux-tab><rux-tab id="tab-id-2">Tab 2 Title</rux-tab></rux-tabs><rux-tab-panels aria-labelledby="tab-set-id-1"><rux-tab-panel aria-labelledby="tab-id-1"></rux-tab-panel></rux-tab-panels>')
    const allTabs  = await page.findAll('rux-tab');
    const tab1 = allTabs[0];
    const tab2 = allTabs[1];
    //on click of tab2, see if tab 1 no longer has selected and that tab 2 does
    await tab2.click()
    expect(tab2).toHaveAttribute('selected');
    expect(tab1).not.toHaveAttribute('selected');
    //click back on tab 1
    await tab1.click();
    expect(tab1).toHaveAttribute('selected');
    expect(tab2).not.toHaveAttribute('selected');
  })
  it('correct rux-tab-panel shows when its corresponding tab is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-tabs id="tab-set-id-1"><rux-tab id="tab-id-1">Tab 1 Title</rux-tab><rux-tab id="tab-id-2">Tab 2 Title</rux-tab></rux-tabs><rux-tab-panels aria-labelledby="tab-set-id-1"><rux-tab-panel aria-labelledby="tab-id-1">PanelContent1</rux-tab-panel><rux-tab-panel aria-labelledby="tab-id-2">PanelContent2</rux-tab-panel></rux-tab-panels>')
    const allTabs  = await page.findAll('rux-tab');
    const tab1 = allTabs[0];
    const tab2 = allTabs[1];
    const allPanels = await page.findAll('rux-tab-panel');
    const panel1 = allPanels[0];
    const panel2 = allPanels[1];
    //tab1 selected by default, check panel1 doesn't have display:none
    expect(panel1).not.toHaveClass('hidden');
    await tab2.click();
    expect(panel2).not.toHaveClass('hidden')
    expect(panel1).toHaveClass('hidden');
    await tab1.click();
    expect(panel1).not.toHaveClass('hidden');
    expect(panel2).toHaveClass('hidden');

  })
});



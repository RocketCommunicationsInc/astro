import { newSpecPage } from '@stencil/core/testing';
import { RuxClassificationMarking } from '../rux-classification-marking';

describe('rux-classification-marking', () => {
  it('builds', async () => {
    const classificationMarking = new RuxClassificationMarking()

    expect(classificationMarking).toBeTruthy()
    expect(classificationMarking).toEqual({
      classification: "unclassified",
      tag: false,
    })
  })

  it('renders component with no properties set', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking>
        <mock:shadow-root>
          <div>unclassified</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });
});

describe('rux-classification-marking banners', () => {
  it('renders unclassified banner', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="unclassified"></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="unclassified">
        <mock:shadow-root>
          <div>unclassified</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders controlled banner', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="controlled"></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="controlled">
        <mock:shadow-root>
          <div>cui</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders confidential banner', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="confidential"></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="confidential">
        <mock:shadow-root>
          <div>confidential</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders secret banner', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="secret"></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="secret">
        <mock:shadow-root>
          <div>secret</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders top secret banner', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="top-secret"></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="top-secret">
        <mock:shadow-root>
          <div>top secret</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders top secret sci banner', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="top-secret-sci"></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="top-secret-sci">
        <mock:shadow-root>
          <div>top secret//sci</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
    });
  
  it('renders tincorrect option banner', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="notapprovedoption"></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="notapprovedoption">
        <mock:shadow-root>
          <div>Select a Classification Marking</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });
})

describe('rux-classification-marking tags', () => {
  it('renders unclassified tag', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="unclassified" tag=true></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="unclassified" tag>
        <mock:shadow-root>
          <div>u</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders controlled tag', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="controlled" tag=true></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="controlled" tag>
        <mock:shadow-root>
          <div>cui</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders confidential tag', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="confidential" tag=true></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="confidential" tag>
        <mock:shadow-root>
          <div>c</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders secret tag', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="secret" tag=true></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="secret" tag>
        <mock:shadow-root>
          <div>s</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders top secret tag', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="top-secret" tag=true></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="top-secret" tag>
        <mock:shadow-root>
          <div>ts</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders top secret sci tag', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="top-secret-sci" tag=true></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="top-secret-sci" tag>
        <mock:shadow-root>
          <div>TS//SCI</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
    });
  
  it('renders incorrect option tag', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="notapprovedoption" tag=true></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="notapprovedoption" tag>
        <mock:shadow-root>
          <div>Select a Classification Marking</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });
})

describe('rux-classification-marking label', () => {
  it('renders unclassified banner label', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="unclassified" label="-hello world-"></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="unclassified" label="-hello world-">
        <mock:shadow-root>
          <div>unclassified-hello world-</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });

  it('renders unclassified tag label', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking classification="unclassified" tag=true label="-hello world-"></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="unclassified" tag label="-hello world-">
        <mock:shadow-root>
          <div>u-hello world-</div>
        </mock:shadow-root>
      </rux-classification-marking>
    `);
  });
})
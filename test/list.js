import { setup } from './_helpers.js';
import { describe, expect, test } from 'vitest';

setup();

describe('list', () => {
  test('list style type', async ({ uno }) => {
    const classes = ['list-disc', 'list-circle', 'list-square', 'list-decimal', 'list-zero-decimal', 'list-none'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('list style position', async ({ uno }) => {
    const { css } = await uno.generate(['list-outside', 'list-inside']);
    expect(css).toMatchSnapshot();
  });

  test('list style invalid class', async ({ uno }) => {
    const { css } = await uno.generate(['list-style-invalid', 'list', 'list-[decimal]']);
    expect(css).toMatchInlineSnapshot('""');
  });

  test('Render style for list-checked', async (t) => {
    const classes = ['list-checked'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .list-checked>li{position:relative;padding-left:1.2em;}.list-checked>li::before{content:"";position:absolute;left:0;top:.1em;width:1em;height:1em;background:no-repeat 50%/contain var(--w-icon-list-checked);}"
    `);
  });
});

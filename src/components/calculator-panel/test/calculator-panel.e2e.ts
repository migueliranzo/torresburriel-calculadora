import { newE2EPage } from '@stencil/core/testing';

describe('calculator-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<calculator-panel></calculator-panel>');

    const element = await page.find('calculator-panel');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('calculator-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<calculator-display></calculator-display>');

    const element = await page.find('calculator-display');
    expect(element).toHaveClass('hydrated');
  });
});

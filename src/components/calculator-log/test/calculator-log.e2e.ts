import { newE2EPage } from '@stencil/core/testing';

describe('calculator-log', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<calculator-log></calculator-log>');

    const element = await page.find('calculator-log');
    expect(element).toHaveClass('hydrated');
  });
});

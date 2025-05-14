import { newSpecPage } from '@stencil/core/testing';
import { CalculatorLog } from '../calculator-log';

describe('calculator-log', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CalculatorLog],
      html: `<calculator-log></calculator-log>`,
    });
    expect(page.root).toEqualHtml(`
      <calculator-log>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </calculator-log>
    `);
  });
});

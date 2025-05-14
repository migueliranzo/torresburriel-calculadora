import { newSpecPage } from '@stencil/core/testing';
import { CalculatorDisplay } from '../calculator-display';

describe('calculator-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CalculatorDisplay],
      html: `<calculator-display></calculator-display>`,
    });
    expect(page.root).toEqualHtml(`
      <calculator-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </calculator-display>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { CalculatorPanel } from '../calculator-panel';

describe('calculator-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CalculatorPanel],
      html: `<calculator-panel></calculator-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <calculator-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </calculator-panel>
    `);
  });
});

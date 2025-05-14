import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'calculator-display',
  styleUrl: 'calculator-display.css',
  shadow: true,
})
export class CalculatorDisplay {
  @Prop() value: string = '0';

  render() {
    return (
      <div class="calculator-display">
        {this.value}
      </div>
    );
  }
}

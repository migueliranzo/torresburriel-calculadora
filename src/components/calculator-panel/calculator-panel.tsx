import { Component, EventEmitter, Event, h } from '@stencil/core';

@Component({
  tag: 'calculator-panel',
  styleUrl: 'calculator-panel.css',
  shadow: true,
})
export class CalculatorPanel {
  @Event() numberBtnClicked: EventEmitter<string>;

  handleButtonClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      this.numberBtnClicked.emit(target.dataset.value);
    }
  }

  render() {
    return (
      <div class="calculator-panel">
        <div class="buttons" onClick={(e) => this.handleButtonClick(e)}>
          <button data-value='7'>7</button>
          <button data-value='8'>8</button>
          <button data-value='9'>9</button>
          <button data-value='x'>×</button>
          <button data-value='4'>4</button>
          <button data-value='5'>5</button>
          <button data-value='6'>6</button>
          <button data-value='-'>-</button>
          <button data-value='1'>1</button>
          <button data-value='2'>2</button>
          <button data-value='3'>3</button>
          <button data-value='÷'>÷</button>
          <button data-value='C'>C</button>
          <button data-value='0'>0</button>
          <button data-value='.'>.</button>
          <button data-value='+'>+</button>
          <button data-value='='>=</button>
        </div>
      </div>
    );
  }
}


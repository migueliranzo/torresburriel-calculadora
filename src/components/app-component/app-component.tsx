import { Component, State, h } from '@stencil/core';


@Component({
  tag: 'app-component',
  styleUrl: 'app-component.css',
  shadow: true,
})
export class appComponent {
  @State() displayValue: string = '0';
  @State() operationHistory: { operation: string, result: string }[] = [];
  @State() historyVisbility: boolean = false;
  private currentInput: string = '';
  private operator: string | null = null;
  private previousValue: number | null = null;


  handleLogBtnClick(value: boolean) {
    this.historyVisbility = value;
  }

  handleNumberBtnClick(value: string) {
    if (/\d/.test(value) || value === '.') {
      this.currentInput = this.currentInput === '0' && value !== '.' ? value : this.currentInput + value;
      this.displayValue = this.currentInput;
    } else if (['+', '-', 'x', '÷'].includes(value)) {
      if (this.previousValue !== null) {
        this.calculateResult();
      }
      this.previousValue = parseFloat(this.displayValue);
      this.operator = value;
      this.currentInput = '';
    } else if (value === '=') {
      this.calculateResult();
      this.operator = null;
      this.previousValue = null;
      this.currentInput = this.displayValue;
    } else if (value === 'C') {
      this.displayValue = '0';
      this.currentInput = '';
      this.operator = null;
      this.previousValue = null;
      this.operationHistory = [];
    }
  }

  calculateResult() {
    if (this.previousValue !== null && this.operator && this.currentInput) {
      const currentValue = parseFloat(this.currentInput);
      let result: number;
      switch (this.operator) {
        case '+':
          result = this.previousValue + currentValue;
          break;
        case '-':
          result = this.previousValue - currentValue;
          break;
        case 'x':
          result = this.previousValue * currentValue;
          break;
        case '÷':
          result = this.previousValue / currentValue;
          break;
        default:
          return;
      }
      const returnObj = { operation: `${this.previousValue} ${this.operator} ${currentValue} =`, result: ` ${result}` };
      this.displayValue = returnObj.result;
      this.operationHistory = [...this.operationHistory, returnObj];
    }
  }

  handleScreenBackdropClick(event: any) {
    const elementClicked = event.currentTarget.tagName;
    if (elementClicked != 'CALCULATOR-LOG') {
      this.historyVisbility = false;
    }
  }

  render() {
    return (
      <div id='app'>
        <div class={`screen-backdrop ${this.historyVisbility ? 'show' : 'hide'}`} onClick={(event) => this.handleScreenBackdropClick(event)} ></div>
        <div class={`calculator ${this.historyVisbility ? 'calculator-backdrop-on' : 'calculator-backdrop-of'}`} >
          <calculator-log
            visiblity={this.historyVisbility}
            history={this.operationHistory}
            onLogBtnClicked={(event: { detail: boolean }) => this.handleLogBtnClick(event.detail)}
            onClick={(event) => this.handleScreenBackdropClick(event)}
          >
          </calculator-log>
          <calculator-display value={this.displayValue} ></calculator-display>
          <calculator-panel onNumberBtnClicked={(event) => this.handleNumberBtnClick(event.detail)}></calculator-panel>
        </div>
      </div>
    );
  }
}

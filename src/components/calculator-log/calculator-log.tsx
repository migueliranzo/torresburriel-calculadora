import { Component, Host, h, Prop, State, EventEmitter, Event } from '@stencil/core';


@Component({
  tag: 'calculator-log',
  styleUrl: 'calculator-log.css',
  shadow: true,
})


export class CalculatorLog {
  @Prop() history: { operation: string, result: string }[] = [];
  @Prop() visiblity: boolean = false;
  @Event() logBtnClicked: EventEmitter<boolean>;

  private placeHolderHistory = [{ operation: "There's no history yet.", result: '' }]

  toggleLogVisiblity() {
    this.logBtnClicked.emit(!this.visiblity);
  }


  render() {
    return (
      <div class="log">
        <button onClick={() => this.toggleLogVisiblity()}>History 🕛</button>
        <ul class={`log-texts ${this.visiblity ? 'show-log' : 'hide-log'}`} >
          {
            (this.history.length ? this.history : this.placeHolderHistory).map((entry) => (
              <li>
                <span> {entry.operation} </span>
                <span> {entry.result}</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

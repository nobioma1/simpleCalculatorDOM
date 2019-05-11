class Calculator {
  constructor(buttons) {
    this.clickEvent = buttons.addEventListener('click', (event) => this.action(event));
  }

  action(event) {
    console.log(event.target.id)
  }
}

const buttons = document.querySelector('.buttons');
const calculate = new Calculator(buttons);
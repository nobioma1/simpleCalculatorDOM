class Calculator {
  constructor(buttons) {
    this.clickEvent = buttons.addEventListener('click', (event) => this.action(event));
    this.primaryDisplay = document.querySelector('.primary-display');
    this.secondaryDisplay = document.querySelector('.secondary-display');
  }

  action(event) {
    let text = event.target.id;
    switch (true) {
      case text === 'clear':
        this.secondaryDisplay.textContent = ''
        this.primaryDisplay.textContent = '0';
        break;
      default: 
        this.showPrimaryDisplay(text);
    }
    console.log(event.target.id)
  }

  showPrimaryDisplay(text) {
    this.primaryDisplay.textContent += text;
  }
}

const buttons = document.querySelector('.buttons');
const calculate = new Calculator(buttons);
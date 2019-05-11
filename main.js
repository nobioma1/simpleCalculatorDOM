class Calculator {
  constructor(buttons) {
    this.clickEvent = buttons.addEventListener('click', (event) => this.action(event));
    this.primaryDisplay = document.querySelector('.primary-display');
    this.secondaryDisplay = document.querySelector('.secondary-display');
    this.temp = [];
  }

  action(event) {
    let text = event.target.id;
    switch (true) {
      case text === 'clear':
        this.secondaryDisplay.textContent = ''
        this.primaryDisplay.textContent = '0';
        this.temp = []
        break;
      case text === 'del':
        this.delete();
        break;
      default:
        this.showPrimaryDisplay(text);
    }
  }

  delete(){
    let mainText = this.primaryDisplay.textContent;
    this.primaryDisplay.textContent = mainText.slice(0, mainText.length-1)
  }

  showPrimaryDisplay(text) {
    if (this.primaryDisplay.textContent === '0') {
      this.primaryDisplay.textContent = text;
    } else {
      this.primaryDisplay.textContent += text;
    }
  }
}

const buttons = document.querySelector('.buttons');
const calculate = new Calculator(buttons);
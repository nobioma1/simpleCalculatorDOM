class Calculator {
  constructor(buttons) {
    this.clickEvent = buttons.addEventListener('click', event =>
      this.action(event)
    );
    this.primaryDisplay = document.querySelector('.primary-display');
    this.secondaryDisplay = document.querySelector('.secondary-display');
    this.currentEntryValue = [];
    this.currentResult = 0;
  }

  action(event) {
    let text = event.target.id;
    let operations = ['+', '/', 'x', '-'];
    switch (true) {
      case text === 'clear':
        this.clearDisplay();
        break;
      case text === 'del':
        this.delete();
        break;
      case operations.includes(text):
        this.operate(text);
        break;
      default:
        this.showPrimaryDisplay(text);
    }
  }

  operate(operation) {
    this.currentEntryValue.push(Number(this.primaryDisplay.textContent));

    switch (operation) {
      case '+':
        this.currentResult = this.currentEntryValue.reduce(
          (accumulator, currV) => {
            return accumulator + currV;
          },
          0
        );
      this.clearPrimaryCalculate();
      
    }
    //console
    console.log({ result: this.currentResult, value: this.currentEntryValue });
  }

  clearDisplay() {
    this.secondaryDisplay.textContent = '';
    this.primaryDisplay.textContent = '0';
    this.currentEntryValue = [];
    this.currentResult = 0;
  }

  delete() {
    let mainText = this.primaryDisplay.textContent;
    this.primaryDisplay.textContent =
      mainText.length > 1 ? mainText.slice(0, mainText.length - 1) : 0;
  }

  showPrimaryDisplay(currentEntry) {
    if (this.primaryDisplay.textContent === '0') {
      this.primaryDisplay.textContent = currentEntry;
    } else {
      this.primaryDisplay.textContent += this.currentResult;
    }
  }

  clearPrimaryCalculate() {
    if (this.currentResult !== 0) {
      this.secondaryDisplay.textContent = `${this.currentResult}`;
    } else {
      this.secondaryDisplay.textContent = this.currentEntryValue;
    }
    this.primaryDisplay.textContent = '0';
  }
}

const buttons = document.querySelector('.buttons');
const calculate = new Calculator(buttons);

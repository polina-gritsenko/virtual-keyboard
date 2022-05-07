import englishLayout from '../keyboard-layouts/english';
import Utilities from '../services/Utilities';
import { BUTTON_TYPE_ENUM } from '../constants/constants';

class Keyboard {
  constructor(keyboardContainer, layout) {
    this.layout = layout || englishLayout;
    this.keyboardContainer = keyboardContainer;
  }

  init() {
    const layout = this.layout.default;
    for (let i = 0; i < layout.length; i += 1) {
      const row = document.createElement('div');
      const rowButtons = layout[i].split(' ');
      row.classList.add('button-row');
      for (let j = 0; j < rowButtons.length; j += 1) {
        const buttonElement = document.createElement('div');
        buttonElement.classList.add('button');
        const button = rowButtons[j];
        let buttonDisplayName = button;
        switch (Utilities.getButtonType(button)) {
          case BUTTON_TYPE_ENUM.FUNCTIONAL: {
            const functionalButton = Utilities.getFunctionalButton(button);
            buttonDisplayName = functionalButton.displayName;
            buttonElement.classList.add(functionalButton.className);
            break;
          }

          case BUTTON_TYPE_ENUM.GENERAL:
            break;

          default:
            break;
        }
        buttonElement.innerHTML = buttonDisplayName;
        row.appendChild(buttonElement);
      }
      this.keyboardContainer.appendChild(row);
    }
  }
}

// function createKeyboard() {
//   const body = document.querySelector('body');
//   const container = document.createElement('div');
//   container.classList.add('align-center');
//   const input = document.createElement('textarea');
//   container.classList.add('textarea');
//   input.placeholder = 'Start typing...';
//   // input.maxLength = "5000";
//   input.cols = '80';
//   input.rows = '8';
//   body.appendChild(container);
//   container.appendChild(input);
// }

export default Keyboard;

import englishLayout from '../keyboard-layouts/english';
import Utilities from '../services/Utilities';
import {
  BUTTON_TYPE_ENUM, SECOND_LANGUAGE_CODE, DEFAULT_LANGUAGE_CODE, getKeyboardKeysMatrix,
} from '../constants/constants';

class Keyboard {
  constructor(keyboardContainer, targetTextarea) {
    this.layout = Utilities.getLayout(Utilities.getCurrentLocale())
     || englishLayout;
    this.keyboardContainer = keyboardContainer;
    this.targetTextarea = targetTextarea;
    this.isCapslock = false;
    this.keyboardButtonsElements = document.querySelectorAll('.keyboard-button');
  }

  #handleButtonStroke(event) {
    const activeButtonElement = document.querySelector(`.keyboard-button[data-key='${event.code}']`);
    console.log(event.key);

    if (activeButtonElement) {
      if (event.type === 'keyup') {
        activeButtonElement.classList.remove('active');
      }
      if (event.type === 'keydown') {
        activeButtonElement.classList.add('active');
        activeButtonElement.click();
      }
    }

    if (event.shiftKey) {
      Keyboard.createButtonsKeys(Utilities.getCurrentLocale(), 'shift');
    }
    event.preventDefault();
  }

  #handleButtonClick(event) {
    // const textareElement = document.querySelector('textarea');
    if (event.type === 'click') {
      switch (event.target.dataset.key) {
        case 'Backspace': {
          const ss = this.targetTextarea.selectionStart;
          const se = this.targetTextarea.selectionEnd;
          const ln = this.targetTextarea.value.length;
          if (ss === se) {
            this.targetTextarea.innerHTML = this.targetTextarea.value.slice(0, ss - 1);
          } else {
            this.targetTextarea.innerHTML = this.targetTextarea.value.slice(0, ss)
            + this.targetTextarea.value.slice(se, ln);
          }
          break;
          // this.targetTextarea.focus();

          // // text in front of selected text
          // const textbefore = textareElement.value.substring(0, ss);
          // // selected text
          // const textselected = textareElement.value.substring(ss, se);
          // // text following selected text
          // const textafter = textareElement.value.substring(se, ln);
          // if (ss === se) // if no text is selected
          // {
          //   textbox.value = textbox.value.substring(0, ss - 1) + textbox.value.substring(se, ln);
          //   textbox.focus();
          //   textbox.selectionStart = ss - 1;
          //   textbox.selectionEnd = ss - 1;
          // } else // if some text is selected
          // {
          //   textbox.value = textbefore + textafter;
          //   textbox.focus();
          //   textbox.selectionStart = ss;
          //   textbox.selectionEnd = ss;
          // }
        }
        case 'ShiftLeft':
        case 'ShiftRight': {
          break;
        }
        case 'CapsLock': {
          console.log(this.isCapslock);
          this.isCapslock = !this.isCapslock;
          console.log(this.isCapslock);
          const layoutType = this.isCapslock ? 'shift' : 'default';
          Keyboard.createButtonsKeys(Utilities.getCurrentLocale(), layoutType);
          break;
        }

        default: {
          if (event.target.dataset.btnvalue) {
            this.targetTextarea.innerHTML += event.target.dataset.btnvalue;
          }
          break;
        }
      }
    }
    if (event.type === 'mousedown' && (event.target.dataset.key === 'ShiftLeft' || event.target.dataset.key === 'ShiftRight')) {
      Keyboard.createButtonsKeys(Utilities.getCurrentLocale(), 'shift');
    }
    if (event.type === 'mouseup' && (event.target.dataset.key === 'ShiftLeft' || event.target.dataset.key === 'ShiftRight')) {
      Keyboard.createButtonsKeys(Utilities.getCurrentLocale(), 'default');
    }
  }

  static createButtonsKeys(locale, layoutType) {
    const currentLayout = Utilities.getLayout(locale)[layoutType];
    const rows = document.querySelectorAll('.button-row');
    for (let i = 0; i < rows.length; i += 1) {
      const rowButtonsElements = rows[i].querySelectorAll('.keyboard-button');
      const buttonKeys = currentLayout[i].split(' ');
      for (let j = 0; j < rowButtonsElements.length; j += 1) {
        const buttonKey = buttonKeys[j];
        const buttonElement = rowButtonsElements[j];
        let buttonDisplayName = buttonKey;
        switch (Utilities.getButtonType(buttonKey)) {
          case BUTTON_TYPE_ENUM.FUNCTIONAL: {
            const functionalButton = Utilities.getFunctionalButton(buttonKey);
            buttonDisplayName = functionalButton.displayName;
            if (functionalButton.value) {
              buttonElement.setAttribute('data-btnvalue', functionalButton.value);
            }
            break;
          }
          case BUTTON_TYPE_ENUM.GENERAL:
            buttonElement.setAttribute('data-btnvalue', buttonKey);
            break;

          default:
            break;
        }
        buttonElement.innerHTML = buttonDisplayName;
      }
    }
  }

  static createShiftHandler() {
    document.addEventListener(
      'keydown',
      (event) => {
        if (event.shiftKey) {
          Keyboard.createButtonsKeys(Utilities.getCurrentLocale(), 'shift');
        }
      },
      false,
    );
    document.addEventListener(
      'keyup',
      (event) => {
        if (event.key === 'Shift') {
          Keyboard.createButtonsKeys(Utilities.getCurrentLocale(), 'default');
        }
      },
      false,
    );
  }

  static createCapsLockHandler() {
    document.addEventListener(
      'keydown',
      (event) => {
        if (event.code === 'CapsLock' && event.getModifierState) {
          const layoutType = event.getModifierState('CapsLock') ? 'shift' : 'default';
          Keyboard.createButtonsKeys(Utilities.getCurrentLocale(), layoutType);
        }
      },
      false,
    );
  }

  static createBackspaceClickHandler() {
    document.addEventListener(
      'click',
      (event) => {
        if (event.code === 'CapsLock' && event.getModifierState) {
          const layoutType = event.getModifierState('CapsLock') ? 'shift' : 'default';
          Keyboard.createButtonsKeys(Utilities.getCurrentLocale(), layoutType);
        }
      },
      false,
    );
  }

  static createLanguageSwitcher() {
    Utilities.setCurrentLocale(Utilities.getCurrentLocale());
    document.addEventListener('keyup', (event) => {
      if (event.ctrlKey && event.code === 'AltLeft') {
        const locale = Utilities.getCurrentLocale() === DEFAULT_LANGUAGE_CODE
          ? SECOND_LANGUAGE_CODE : DEFAULT_LANGUAGE_CODE;
        Utilities.setCurrentLocale(locale);
        Keyboard.createButtonsKeys(locale, 'default');
      }
    }, false);
  }

  init() {
    const layout = this.layout.default;

    for (let i = 0; i < layout.length; i += 1) {
      const row = document.createElement('div');
      const rowButtons = layout[i].split(' ');
      row.classList.add('button-row');
      for (let j = 0; j < rowButtons.length; j += 1) {
        const buttonElement = document.createElement('div');
        buttonElement.classList.add('keyboard-button');
        const button = rowButtons[j];
        let buttonDisplayName = button;
        switch (Utilities.getButtonType(button)) {
          case BUTTON_TYPE_ENUM.FUNCTIONAL: {
            const functionalButton = Utilities.getFunctionalButton(button);
            buttonDisplayName = functionalButton.displayName;
            buttonElement.classList.add(functionalButton.className);
            if (functionalButton.value) {
              buttonElement.setAttribute('data-btnvalue', functionalButton.value);
            }
            break;
          }
          case BUTTON_TYPE_ENUM.GENERAL:
            buttonElement.setAttribute('data-btnvalue', button);
            break;

          default:
            break;
        }
        buttonElement.setAttribute('data-key', getKeyboardKeysMatrix()[i][j]);
        buttonElement.innerHTML = buttonDisplayName;
        buttonElement.addEventListener('click', (event) => this.#handleButtonClick(event));
        buttonElement.addEventListener('mousedown', (event) => this.#handleButtonClick(event));
        buttonElement.addEventListener('mouseup', (event) => this.#handleButtonClick(event));
        row.appendChild(buttonElement);
      }
      this.keyboardContainer.appendChild(row);
    }
    Keyboard.createLanguageSwitcher();
    Keyboard.createShiftHandler();
    Keyboard.createCapsLockHandler();
    document.addEventListener('keydown', (event) => this.#handleButtonStroke(event));
    document.addEventListener('keyup', (event) => this.#handleButtonStroke(event));
  }
}

export default Keyboard;

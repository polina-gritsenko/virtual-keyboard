import englishLayout from '../keyboard-layouts/english';
import russianLayout from '../keyboard-layouts/russian';

const SPECIAL_BUTTONS = {
  '{bksp}': {
    displayName: 'Backspace',
    className: 'backspace',
    value: 'backspace',
  },
  '{tab}': {
    displayName: '&#11134;',
    className: 'tab',
    value: '&emsp;',
  },
  '{del}': {
    displayName: 'Del',
    className: 'del',
    value: 'del',
  },
  '{capslock}': {
    displayName: 'Caps Lock',
    className: 'capslock',
  },
  '{enter}': {
    displayName: '&#9166;',
    className: 'enter',
    value: '&#13;',
  },
  '{shiftleft}': {
    displayName: '&#8679;',
    className: 'shift',
  },
  '{shiftright}': {
    displayName: '&#8679;',
    className: 'shift',
  },
  '{ctrlleft}': {
    displayName: 'Ctrl',
    className: 'ctrl',
  },
  '{home}': {
    displayName: '&#10070;',
    className: 'home',
  },
  '{altleft}': {
    displayName: 'Alt',
    className: 'alt',
  },
  '{space}': {
    displayName: '',
    className: 'space',
    value: '&nbsp;',
  },
  '{altright}': {
    displayName: 'Alt',
    className: 'alt',
  },
  '{ctrlright}': {
    displayName: 'Ctrl',
    className: 'ctrl',
  },
  //   '{arrowup}': '↑',
  //   '{arrowleft}': '←',
  //   '{arrowdown}': '↓',
  //   '{arrowright}': '→',
};

const DEFAULT_LANGUAGE_CODE = 'EN';
const SECOND_LANGUAGE_CODE = 'RU';

const BUTTON_TYPE_ENUM = Object.freeze({
  GENERAL: 1,
  FUNCTIONAL: 2,
});

const LAYOUTS = Object.freeze({
  EN: englishLayout,
  RU: russianLayout,
});

const KEYBOARD_KEYS = [
  'Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal Backspace',
  'Tab KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash',
  'CapsLock KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote Enter',
  'ShiftLeft KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash ArrowUp ShiftRight',
  'ControlLeft OSLeft AltLeft Space AltRight ArrowLeft ArrowDown ArrowRight ControlRight',
];

const getKeyboardKeysMatrix = () => {
  const matrix = [];
  for (let i = 0; i < KEYBOARD_KEYS.length; i += 1) {
    matrix.push(KEYBOARD_KEYS[i].split(' '));
  }
  return matrix;
};

export {
  SPECIAL_BUTTONS,
  SECOND_LANGUAGE_CODE,
  DEFAULT_LANGUAGE_CODE,
  BUTTON_TYPE_ENUM,
  LAYOUTS,
  KEYBOARD_KEYS,
  getKeyboardKeysMatrix,
};

import englishLayout from '../keyboard-layouts/english';
import russianLayout from '../keyboard-layouts/russian';

const SPECIAL_BUTTONS = {
  '{bksp}': {
    displayName: 'Backspace',
    className: 'backspace',
  },
  '{tab}': {
    displayName: '&#11134;',
    className: 'tab',
  },
  '{del}': {
    displayName: 'Del',
    className: 'del',
  },
  '{capslock}': {
    displayName: 'Caps Lock',
    className: 'capslock',
  },
  '{enter}': {
    displayName: '&#9166;',
    className: 'enter',
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

const SUPPORTED_LANGUAGE_CODES = ['EN', 'RU'];

const DEFAULT_LANGUAGE_CODE = 'EN';

const BUTTON_TYPE_ENUM = Object.freeze({
  GENERAL: 1,
  FUNCTIONAL: 2,
});

const LAYOUTS = Object.freeze({
  EN: englishLayout,
  RU: russianLayout,
});

export {
  SPECIAL_BUTTONS,
  SUPPORTED_LANGUAGE_CODES,
  DEFAULT_LANGUAGE_CODE,
  BUTTON_TYPE_ENUM,
  LAYOUTS,
};

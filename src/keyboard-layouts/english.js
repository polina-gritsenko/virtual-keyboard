/**
 * Layout: English
 */
export default {
  default: [
    '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} q w e r t y u i o p [ ] \\',
    "{capslock} a s d f g h j k l ; ' {enter}",
    '{shiftleft} z x c v b n m , . / ↑ {shiftright}',
    '{ctrlleft} {home} {altleft} {space} {altright} ← ↓ → {ctrlright}',
  ],
  shift: [
    '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P { } |',
    '{capslock} A S D F G H J K L : " {enter}',
    '{shiftleft} Z X C V B N M < > ? ↑ {shiftright}',
    '{ctrlleft} {home} {altleft} {space} {altright} ← ↓ → {ctrlright}',
  ],
};

const getDefaultLayout = () => ({
  default: [
    'Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal Backspace',
    'Tab KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash',
    'CapsLock KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote Enter',
    'ShiftLeft KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash ArrowUp ShiftRight',
    'ControlLeft OSLeft AltLeft Space AltRight ArrowLeft ArrowDown ArrowRight ControlRight',
  ],
  shift: [
    '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
    '{tab} KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP { } |',
    '{lock} KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL : " {enter}',
    '{shift} KeyZ KeyX KeyC KeyV KeyB KeyN KeyM < > ? {shift}',
    '.com @ {space}',
  ],
});

// export default getDefaultLayout;

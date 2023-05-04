const keyCodes = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ContextMenu', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight',
];

const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctx', 'Ctrl', '◄', '▲', '▼', '►',
];

const keysCaps = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctx', 'Ctrl', '◄', '▲', '▼', '►',
];

const lettersWithCase = [
  'Backquote', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash',
];

const russianKeyboard = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'я', 'в', 'е', 'р', 'т', 'ы', 'у', 'и', 'о', 'п', 'ш', 'щ', '\\', 'Del',
  'CapsLock', 'а', 'с', 'д', 'ф', 'г', 'ч', 'й', 'к', 'л', ';', "'", 'Enter',
  'Shift', 'з', 'х', 'ц', 'ж', 'б', 'н', 'м', ',', '.', '?', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctx', 'Ctrl', '◄', '▲', '▼', '►',
];

const russianKeyboardCaps = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Я', 'В', 'Е', 'Р', 'Т', 'Ы', 'У', 'И', 'О', 'П', 'Ш', 'Щ', '\\', 'Del',
  'CapsLock', 'А', 'С', 'Д', 'Ф', 'Г', 'Ч', 'Й', 'К', 'Л', ';', "'", 'Enter',
  'Shift', 'З', 'Ч', 'Ц', 'Ж', 'Б', 'Н', 'М', ',', '.', '?', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctx', 'Ctrl', '◄', '▲', '▼', '►',
];

const functionalKeys = {
  indexes: ['Tab', 'MetaLeft', 'CapsLock', 'AltLeft', 'AltRight', 'ShiftLeft', 'ShiftRight', 'ControlRight',
    'ControlLeft', 'ContextMenu', 'Delete', 'Backspace', 'Enter', 'Space'],
};

export {
  keys, keysCaps, russianKeyboard, russianKeyboardCaps, functionalKeys, keyCodes, lettersWithCase,
};

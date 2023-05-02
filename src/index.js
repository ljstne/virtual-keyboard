import {
  keys, keysCaps, russianKeyboard, russianKeyboardCaps, functionalKeys, keyCodes,
} from './layouts';

const { body } = document;

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.append(wrapper);

const textArea = document.createElement('textarea');
textArea.className = 'text-area';
wrapper.append(textArea);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard__container';
wrapper.append(keyboardContainer);

class Keyboard {
  constructor() {
    // this.caps = caps;
    // this.layout = layout;
    this.fillKeys = async function fillKeyboardContainer(caps, layout) {
      keyboardContainer.innerHTML = '';

      let keysArrayToUse = keys;

      if (caps === false && layout === 'English') {
        keysArrayToUse = keys;
      }

      if (caps === true && layout === 'English') {
        keysArrayToUse = keysCaps;
      } else if (caps === false && layout === 'Russian') {
        keysArrayToUse = russianKeyboard;
      } else if (caps === true && layout === 'Russian') {
        keysArrayToUse = russianKeyboardCaps;
      }

      for (let i = 0; i < 5; i += 1) {
        const keyboardRow = document.createElement('div');
        keyboardRow.className = 'keys-row';

        if (i === 0) {
          for (let j = 0; j < 14; j += 1) {
            const keyHtml = document.createElement('div');
            keyHtml.className = 'key-single';
            keyHtml.setAttribute('data-key', `${keyCodes[j]}`);
            keyHtml.setAttribute('role', 'button');
            const currentKey = keysArrayToUse[j];
            keyHtml.innerText = currentKey;
            keyboardRow.append(keyHtml);
          }
        } else if (i === 1) {
          for (let j = 14; j < 29; j += 1) {
            const keyHtml = document.createElement('div');
            keyHtml.className = 'key-single';
            keyHtml.setAttribute('data-key', `${keyCodes[j]}`);
            keyHtml.setAttribute('role', 'button');
            const currentKey = keysArrayToUse[j];
            keyHtml.innerText = currentKey;
            keyboardRow.append(keyHtml);
          }
        } else if (i === 2) {
          for (let j = 29; j < 42; j += 1) {
            const keyHtml = document.createElement('div');
            keyHtml.className = 'key-single';
            keyHtml.setAttribute('data-key', `${keyCodes[j]}`);
            keyHtml.setAttribute('role', 'button');
            const currentKey = keysArrayToUse[j];
            keyHtml.innerText = currentKey;
            keyboardRow.append(keyHtml);
          }
        } else if (i === 3) {
          for (let j = 42; j < 54; j += 1) {
            const keyHtml = document.createElement('div');
            keyHtml.className = 'key-single';
            keyHtml.setAttribute('data-key', `${keyCodes[j]}`);
            keyHtml.setAttribute('role', 'button');
            const currentKey = keysArrayToUse[j];
            keyHtml.innerText = currentKey;
            keyboardRow.append(keyHtml);
          }
        } else if (i === 4) {
          const arrowContainer = document.createElement('div');
          arrowContainer.className = 'up-down-arrows';
          for (let j = 54; j < 65; j += 1) {
            const keyHtml = document.createElement('div');

            if (keyCodes[j] === 'ArrowUp' || keyCodes[j] === 'ArrowDown') {
              keyHtml.className = 'key-single';
              keyHtml.setAttribute('data-key', `${keyCodes[j]}`);
              keyHtml.setAttribute('role', 'button');
              arrowContainer.append(keyHtml);
              const currentKey = keysArrayToUse[j];
              keyHtml.innerText = currentKey;
              keyboardRow.append(arrowContainer);
            } else {
              keyHtml.className = 'key-single';
              keyHtml.setAttribute('data-key', `${keyCodes[j]}`);
              keyHtml.setAttribute('role', 'button');

              const currentKey = keysArrayToUse[j];
              keyHtml.innerText = currentKey;
              keyboardRow.append(keyHtml);
            }
          }
        }

        keyboardContainer.append(keyboardRow);
      }
    };
  }
}

const keyboard = new Keyboard();
keyboard.fillKeys(false, 'English');

const keyboardDescription = document.createElement('div');
keyboardDescription.innerHTML = `<p class="keyboard__description">Клавиатура создана в операционной системе Windows</p>
<p class="keyboard__description">Для переключения языка комбинация: левыe ctrl + alt</p>`;

wrapper.append(keyboardDescription);

export { textArea, functionalKeys, keyboard };

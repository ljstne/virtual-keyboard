import { keyboard, textArea } from './index';
import { functionalKeys } from './layouts';

let keyboardKeys = document.querySelectorAll('.key-single');

let language;

const pressedKeys = {
};

window.addEventListener('load', () => {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
    keyboard.fillKeys(false, language);
  } else {
    language = 'English';
  }
});

let iteratableKeyboard = Array.from(keyboardKeys);

let caretPosition = textArea.selectionEnd;

const tieMouseEvents = () => {
  keyboardKeys = document.querySelectorAll('.key-single');

  const keyboardContainer = document.querySelector('.keyboard__container');

  keyboardContainer.addEventListener('mousedown', (event) => {
    if (!event.target.classList.contains('key-single')) {
      return false;
    }

    const audio = new Audio('./assets/click.mp3');
    audio.currentTime = 0;
    audio.play();
    const element = event.target;

    element.addEventListener('mouseleave', () => {
      element.classList.remove('clicked');
    });

    if (event.target.getAttribute('data-key') === 'Backspace') {
      // if (document.activeElement !== textArea) {
      //   const str = textArea.value;
      //   textArea.value = str.slice(0, textArea.selectionEnd - 1)
      // + str.slice(textArea.selectionEnd);
      //   return false;

      if (caretPosition <= 0) {
        caretPosition = textArea.selectionEnd;
      } else {
        caretPosition -= 1;
      }
      if (document.activeElement !== textArea) {
        const str = textArea.value;
        textArea.value = str.slice(0, caretPosition - 1) + str.slice(caretPosition);
        // caretPosition -= 1;
        const keySelected = document.querySelector('[data-key="Backspace"]');
        keySelected.classList.add('clicked');

        return false;
      }

      caretPosition = textArea.selectionEnd;
      const str = textArea.value;
      textArea.value = str.slice(0, textArea.selectionEnd - 1) + str.slice(textArea.selectionEnd);

      const keySelected = document.querySelector('[data-key="Backspace"]');
      keySelected.classList.add('clicked');

      return false;
    }

    if (event.target.getAttribute('data-key') === 'Delete') {
      // const str = textArea.value;
      // textArea.value = str.slice(0, textArea.selectionEnd + 1)
      // + str.slice(textArea.selectionEnd + 1);
      // return false;

      if (caretPosition <= 0) {
        caretPosition = textArea.selectionEnd;
      }
      if (document.activeElement !== textArea) {
        const str = textArea.value;
        textArea.value = str.slice(0, caretPosition) + str.slice(caretPosition + 1);

        const keySelected = document.querySelector('[data-key="Delete"]');
        keySelected.classList.add('clicked');
        return false;
      }

      caretPosition = textArea.selectionEnd;
      const str = textArea.value;
      textArea.value = str.slice(0, textArea.selectionEnd + 1)
      + str.slice(textArea.selectionEnd + 1);
      const keySelected = document.querySelector('[data-key="Delete"]');
      keySelected.classList.add('clicked');

      return false;
    }

    if (event.target.getAttribute('data-key') === 'CapsLock'
    || event.target.getAttribute('data-key') === 'ShiftLeft'
    || event.target.getAttribute('data-key') === 'ShiftRight') {
      if (event.target.getAttribute('data-key') === 'ShiftLeft'
      || event.target.getAttribute('data-key') === 'ShiftRight') {
        keyboard.changeCase('shift');
      } else {
        keyboard.changeCase('caps');
      }
    }

    // if (pressedKeys.CapsLock === true && event.target.getAttribute('data-key') === 'CapsLock') {
    //   delete pressedKeys.CapsLock;
    //   keyboard.fillKeys(false, language);
    // } else if (event.target.getAttribute('data-key') === 'ShiftLeft'
    //     || event.target.getAttribute('data-key') === 'ShiftLeft') {
    //   pressedKeys.Shift = true;
    // } else {
    pressedKeys[event.target.getAttribute('data-key')] = true;
    // }

    if (pressedKeys.Control === true && pressedKeys.Alt === true && language === 'English') {
      language = 'Russian';
      keyboard.changeLanguage(language);
    } else if (pressedKeys.Control === true && pressedKeys.Alt === true && language === 'Russian') {
      language = 'English';
      keyboard.changeLanguage(language);
    }
    // if (pressedKeys.CapsLock === true && pressedKeys.Shift === undefined
    //     && !(Object.keys(pressedKeys).length > 2)) {
    //   keyboard.fillKeys(true, language);
    // } else if (pressedKeys.CapsLock === true && pressedKeys.Shift === true
    //             && (Object.keys(pressedKeys).length <= 2)) {
    //   keyboard.fillKeys(false, language);
    // } else if (pressedKeys.CapsLock === undefined && pressedKeys.Shift === true) {
    //   keyboard.fillKeys(true, language);
    // }

    if (event.repeat === true
                     && functionalKeys.indexes.includes(event.target.getAttribute('data-key'))) {
      keyboardKeys = document.querySelectorAll('.key-single');
      iteratableKeyboard = Array.from(keyboardKeys);

      let keySelected = iteratableKeyboard.find((e) => e.getAttribute('data-key') === event.target.getAttribute('data-key'));
      if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find((e) => e.getAttribute('data-key') === event.target.getAttribute('data-key'));
      }
    }
    if (!functionalKeys.indexes.includes(element.getAttribute('data-key'))) { textArea.value += event.target.innerText; } else if (element.getAttribute('data-key') === 'Enter') {
      textArea.value += '\n';
      // return false;
    } else if (element.getAttribute('data-key') === 'Space') {
      textArea.value += ' ';
      // return false;
    }

    keyboardKeys = document.querySelectorAll('.key-single');
    iteratableKeyboard = Array.from(keyboardKeys);

    const keySelected = iteratableKeyboard.find((e) => e.getAttribute('data-key') === element.getAttribute('data-key'));
    keySelected.classList.add('clicked');

    return false;
  });

  keyboardContainer.addEventListener('mouseup', (event) => {
    if (!event.target.classList.contains('key-single')) { return false; }

    if (event.target.getAttribute('data-key') !== 'CapsLock') {
      delete pressedKeys[event.target.getAttribute('data-key')];
    }

    // if ((pressedKeys.CapsLock === true
    // || pressedKeys.Shift === true) && event.target.getAttribute('data-key') === 'ShiftLeft') {
    //   keyboard.fillKeys(true, language);
    // } else if (pressedKeys.CapsLock ===
    // undefined && pressedKeys.Shift === undefined && event.target.getAttribute('data-key')
    // === 'ShiftLeft') {
    //   keyboard.fillKeys(false, language);
    // }

    if (event.target.getAttribute('data-key') === 'ShiftLeft'
    || event.target.getAttribute('data-key') === 'ShiftRight') {
      keyboard.changeCase('shiftUp');
    }

    event.preventDefault();

    keyboardKeys = document.querySelectorAll('.key-single');
    iteratableKeyboard = Array.from(keyboardKeys);

    const keySelected = iteratableKeyboard.find((e) => e.getAttribute('data-key') === event.target.getAttribute('data-key'));
    keySelected.classList.remove('clicked');
    return false;
  });
};

tieMouseEvents();

document.addEventListener('keydown', (event) => {
  if (event.repeat === false) {
    const audio = new Audio('./assets/click.mp3');
    audio.currentTime = 0;
    audio.play();
  }

  if (event.code === 'Backspace') {
    if (caretPosition <= 0) {
      caretPosition = textArea.selectionEnd;
    } else {
      caretPosition -= 1;
    }
    if (document.activeElement !== textArea) {
      const str = textArea.value;
      textArea.value = str.slice(0, caretPosition - 1) + str.slice(caretPosition);
      // caretPosition -= 1;

      const keySelected = document.querySelector('[data-key="Backspace"]');
      keySelected.classList.add('clicked');

      return false;
    }

    caretPosition = textArea.selectionEnd;
    const str = textArea.value;
    textArea.value = str.slice(0, caretPosition) + str.slice(caretPosition);

    const keySelected = document.querySelector('[data-key="Backspace"]');
    keySelected.classList.add('clicked');

    return false;
  }

  if (event.code === 'Delete') {
    if (caretPosition <= 0) {
      caretPosition = textArea.selectionEnd;
    }
    if (document.activeElement !== textArea) {
      const str = textArea.value;
      textArea.value = str.slice(0, caretPosition) + str.slice(caretPosition + 1);

      const keySelected = document.querySelector('[data-key="Delete"]');
      keySelected.classList.add('clicked');
      return false;
    }

    caretPosition = textArea.selectionEnd;
    const str = textArea.value;
    textArea.value = str.slice(0, textArea.selectionEnd + 1) + str.slice(textArea.selectionEnd + 1);

    const keySelected = document.querySelector('[data-key="Delete"]');
    keySelected.classList.add('clicked');

    return false;
  }

  // if (pressedKeys.CapsLock === true && event.key === 'CapsLock') {
  //   delete pressedKeys.CapsLock;
  //   keyboard.fillKeys(false, language);
  // } else {
  //   if (event.key === 'ShiftLeft' || event.key === 'ShiftRight') {
  //     pressedKeys.Shift = true;
  //   }
  pressedKeys[event.key] = true;

  if (event.repeat === true && functionalKeys.indexes.includes(event.code)) {
    keyboardKeys = document.querySelectorAll('.key-single');
    iteratableKeyboard = Array.from(keyboardKeys);

    const keySelected = iteratableKeyboard.find((e) => e.getAttribute('data-key') === event.code);

    keySelected.classList.add('clicked');

    return false;
  }
  // }

  if (pressedKeys.Control === true && pressedKeys.Alt === true && language === 'English') {
    language = 'Russian';
    keyboard.changeLanguage(language);
  } else if (pressedKeys.Control === true && pressedKeys.Alt === true && language === 'Russian') {
    language = 'English';
    keyboard.changeLanguage(language);
  } else if (event.key === 'Shift' || event.key === 'CapsLock') {
    if (event.key === 'Shift') {
      keyboard.changeCase('shift');
    } else {
      keyboard.changeCase('caps');
    }
  }

  // if (pressedKeys.CapsLock === true && pressedKeys.Shift === undefined
  //    && !(Object.keys(pressedKeys).length > 2)) {
  //   // keyboard.fillKeys(true, language);
  //   keyboard.changeCase();
  // } else if (pressedKeys.CapsLock === true
  //   && (pressedKeys.ShiftLeft === true || pressedKeys.Shift === true)
  //   && (Object.keys(pressedKeys).length <= 2)) {
  //   // keyboard.fillKeys(false, language);
  //   keyboard.changeCase();
  // } else if (pressedKeys.CapsLock === undefined && (pressedKeys.Shift === true
  //   || pressedKeys.ShiftRight === true)) {
  //   // keyboard.fillKeys(true, language);
  //   keyboard.changeCase();
  // }

  event.preventDefault();

  keyboardKeys = document.querySelectorAll('.key-single');
  iteratableKeyboard = Array.from(keyboardKeys);

  const keySelected = iteratableKeyboard.find((e) => e.getAttribute('data-key') === event.code);

  if (!functionalKeys.indexes.includes(event.code)) {
    textArea.value += keySelected.innerText;
  } else if (event.code === 'Enter') {
    textArea.value += '\n';
  } else if (event.code === 'Space') {
    textArea.value += ' ';
  }

  keySelected.classList.add('clicked');
  return false;
});

document.addEventListener('keyup', (event) => {
  if (event.key !== 'CapsLock') {
    delete pressedKeys[event.code];
    delete pressedKeys[event.key];
  }

  if (event.key === 'Shift') {
    keyboard.changeCase('shiftUp');
  }

  // if ((pressedKeys.CapsLock === true || (pressedKeys.Shift === true
  //   || pressedKeys.ShiftLeft === true
  // || pressedKeys.ShiftRight === true)) && event.key === 'Shift') {
  //   keyboard.fillKeys(true, language);
  // } else if (pressedKeys.CapsLock === undefined
  //    && (pressedKeys.Shift === undefined || pressedKeys.ShiftRight === undefined
  //    || pressedKeys.ShiftLeft === undefined)
  //    && event.key === 'Shift') {
  //   keyboard.fillKeys(false, language);
  // }

  event.preventDefault();

  keyboardKeys = document.querySelectorAll('.key-single');
  iteratableKeyboard = Array.from(keyboardKeys);

  const keySelected = iteratableKeyboard.find((e) => e.getAttribute('data-key') === event.code);

  keySelected.classList.remove('clicked');
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('language', `${language}`);
});

export { textArea, functionalKeys };

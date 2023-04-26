"use strict";
const body = document.body;

const keys = [
    "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "Shift",
    "Control", "Win", "Alt", "Space", "Alt", "Control", "Left", "Up", "Down", "Right"
]

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.append(wrapper);

const textArea = document.createElement('textarea');
textArea.className = 'text-area';
wrapper.append(textArea);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard__container';
wrapper.append(keyboardContainer);

for (let i = 0; i < 5; i++) {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = "keys-row";

    // fill keyboard with keys

    if (i === 0) {
        for (let j = 0; j < 14; j++) {
            const keyHtml = document.createElement('div');
            keyHtml.className = "key-single";
            keyHtml.setAttribute('role', 'button')
            const currentKey = keys[j];
            keyHtml.innerText = currentKey;
            keyboardRow.append(keyHtml);
        }
    }
    else if (i === 1) {
        for (let j = 14; j < 29; j++) {
            const keyHtml = document.createElement('div');
            keyHtml.className = "key-single";
            keyHtml.setAttribute('role', 'button')
            const currentKey = keys[j];
            keyHtml.innerText = currentKey;
            keyboardRow.append(keyHtml);
        }
    }
    else if (i === 2) {
        for (let j = 29; j < 42; j++) {
            const keyHtml = document.createElement('div');
            keyHtml.className = "key-single";
            keyHtml.setAttribute('role', 'button');
            const currentKey = keys[j];
            keyHtml.innerText = currentKey;
            keyboardRow.append(keyHtml);
        }
    }
    else if (i === 3) {
        for (let j = 42; j < 54; j++) {
            const keyHtml = document.createElement('div');
            keyHtml.className = "key-single";
            keyHtml.setAttribute('role', 'button');
            const currentKey = keys[j];
            keyHtml.innerText = currentKey;
            keyboardRow.append(keyHtml);
        }
    }
    else if (i === 4) {
        for (let j = 54; j < 64; j++) {
            const keyHtml = document.createElement('div');
            keyHtml.className = "key-single";
            keyHtml.setAttribute('role', 'button');
            const currentKey = keys[j];
            keyHtml.innerText = currentKey;
            keyboardRow.append(keyHtml);
        }
    }

    keyboardContainer.append(keyboardRow)
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    textArea.value += key;
})
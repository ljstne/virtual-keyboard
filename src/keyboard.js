import {keyboardKeys, textArea} from "./index.js";

let iteratableKeyboard = Array.from(keyboardKeys);

keyboardKeys.forEach(element => {
    element.addEventListener ('mousedown', (event) => {
        element.classList.add('clicked');
        const key = event.target.getAttribute('data-key');
        textArea.value += key;
    });
    element.addEventListener('mouseup', () => {
        element.classList.remove('clicked');
    })
    element.addEventListener('mouseleave', () => {
        element.classList.remove('clicked');
    })
});

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    iteratableKeyboard = Array.from(keyboardKeys);
    
    let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.key);
    if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.code)
    };
    
    keySelected.classList.add('clicked');
    const key = event.key;
    textArea.value += key;
});

document.addEventListener('keyup', (event) => {
    event.preventDefault();

    console.log(event.code);
    let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.key);
    if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.code)
    };
    keySelected.classList.remove('clicked');
})
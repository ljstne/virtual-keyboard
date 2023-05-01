import {keyboard, textArea} from "./index.js";
import {functionalKeys} from "./layouts.js";


let keyboardKeys = document.querySelectorAll('.key-single');

let iteratableKeyboard = Array.from(keyboardKeys);

const capitalizeLetters = () => {
    if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === undefined && !(Object.keys(pressedKeys).length > 2)) {
        keyboard.fillKeys(true);
    }
    
    else if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === true 
    && (Object.keys(pressedKeys).length <= 2) ) {
        keyboard.fillKeys(false);
    }

    else if (pressedKeys['CapsLock'] === undefined && pressedKeys['Shift'] === undefined) {
        keyboard.fillKeys(false);
    }

    else if (pressedKeys['CapsLock'] === undefined && pressedKeys['Shift'] === true) {
        keyboard.fillKeys(true);
    }

}

const tieMouseEvents = () => {

    keyboardKeys.forEach(element => {
        element.addEventListener ('mousedown', (event) => {
            element.classList.add('clicked');
            const key = event.target.getAttribute('data-button');

            textArea.value += event.target.innerText;    

            if (key === 'CapsLock') {
                capitalizeLetters()
            }
        });
        element.addEventListener('mouseup', () => {
            element.classList.remove('clicked');
        })
        element.addEventListener('mouseleave', () => {
            element.classList.remove('clicked');
        })
    });
    
}

tieMouseEvents();

let pressedKeys = {
};

let language = 'English';

document.addEventListener('keydown', (event) => {

    if (event.repeat === false) {
    const audio = new Audio('./assets/click.mp3');
    audio.currentTime = 0;
    audio.play();
    }

if (event.code === 'Backspace') {
    let str = textArea.value;
    console.log(textArea.selectionEnd);
   textArea.value = str.slice(0, textArea.selectionEnd) + str.slice(textArea.selectionEnd);
   return false
}

else if (event.code === 'Delete') {
    let str = textArea.value;
    console.log(textArea.selectionEnd);
   textArea.value = str.slice(0, textArea.selectionEnd + 1) + str.slice(textArea.selectionEnd +1);
   return false
}

    if (pressedKeys['CapsLock'] === true && event.key === 'CapsLock') {
        delete pressedKeys['CapsLock'];
        keyboard.fillKeys(false, language);
    }
    
    else {
    pressedKeys[event.key] = true;
    }
    
    if (pressedKeys['Control'] === true && pressedKeys['Alt'] === true && language === 'English') {
        language = 'Russian';
        keyboard.fillKeys(false, language);

        console.log('language changed');
    }
    else if (pressedKeys['Control'] === true && pressedKeys['Alt'] === true && language === 'Russian') {
        language = 'English';
        keyboard.fillKeys(false, language);

        console.log('english changed');
    };

    if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === undefined && !(Object.keys(pressedKeys).length > 2)) {
        keyboard.fillKeys(true, language);
    }
    
    else if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === true 
    && (Object.keys(pressedKeys).length <= 2) ) {
        console.log(event.key,'fdkaokfeo,FDAFFDAFDAFDAFADF', Object.keys(pressedKeys).length);
        keyboard.fillKeys(false, language);
    }

    // else if (pressedKeys['CapsLock'] === undefined && pressedKeys['Shift'] === undefined) {
    //     fillKeys(false, language);
    // }

    else if (pressedKeys['CapsLock'] === undefined && pressedKeys['Shift'] === true) {
        keyboard.fillKeys(true, language);
    }



    if (event.repeat === true && functionalKeys['indexes'].includes(event.code)) {

 
        keyboardKeys = document.querySelectorAll('.key-single');
        iteratableKeyboard = Array.from(keyboardKeys);
               
    let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.code);
    if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.code)
    }
    
    keySelected.classList.add('clicked');

        return false
    }

    event.preventDefault();

    keyboardKeys = document.querySelectorAll('.key-single');
    iteratableKeyboard = Array.from(keyboardKeys);

    
    let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.code);

    if (!functionalKeys.indexes.includes(event.code)) {
        textArea.value += keySelected.innerText;

    }

    keySelected.classList.add('clicked');

    tieMouseEvents();

});

document.addEventListener('keyup', (event) => {

    // audio.pause();
    // audio.currentTime = 0;

    console.log('key uppped');
    
    if (event.key !== 'CapsLock') {
        delete pressedKeys[event.key];
    }


    
    if ((pressedKeys['CapsLock'] === true || pressedKeys['Shift'] === true) && event.key === 'Shift') {
        keyboard.fillKeys(true, language);
    }

    else if (pressedKeys['CapsLock'] === undefined && pressedKeys['Shift'] === undefined && event.key === 'Shift') {
        keyboard.fillKeys(false, language);
    }


    event.preventDefault();

    keyboardKeys = document.querySelectorAll('.key-single');
    iteratableKeyboard = Array.from(keyboardKeys)

    let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.key);
    if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.code)
    };
    if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.key.toUpperCase())
    };
    if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.key.toLowerCase())
    };


    keySelected.classList.remove('clicked');

    tieMouseEvents();

});


export {textArea, functionalKeys};
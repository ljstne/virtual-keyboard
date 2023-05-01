import {keyboard, textArea, fillKeys} from "./index.js";
import {functionalKeys} from "./layouts.js";


let keyboardKeys = document.querySelectorAll('.key-single');

let iteratableKeyboard = Array.from(keyboardKeys);


const timeout = 300;

const capitalizeLetters = () => {
    if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === undefined && !(Object.keys(pressedKeys).length > 2)) {
        keyboard.fillKeys(true);
        console.log(event.key,'1111111111111111');

    }
    
    else if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === true 
    && (Object.keys(pressedKeys).length <= 2) ) {
        console.log(event.key,'fdkaokfeo,FDAFFDAFDAFDAFADF', Object.keys(pressedKeys).length);
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
        // keyboardKeys = document.querySelectorAll('.key-single');
        // iteratableKeyboard = Array.from(keyboardKeys);
                   
        // let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === element.getAttribute('data-key'));
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

let caps = false;
let shift = false;

let pressedKeys = {
};

let language = 'English';

document.addEventListener('keydown', (event) => {
    const audio = new Audio('./assets/click.mp3');

    audio.currentTime = 0;
    audio.play();
console.log(event.key, event.code, 'key code');

if (event.code === 'Backspace') {
    console.log(textArea.value);
    let str = textArea.value;
    console.log(textArea.selectionEnd);
   textArea.value = str.slice(0, textArea.selectionEnd) + str.slice(textArea.selectionEnd);
   return false
}

    if (pressedKeys['CapsLock'] === true && event.key === 'CapsLock') {
        delete pressedKeys['CapsLock'];
        keyboard.fillKeys(false);
    }
    
    else {
    pressedKeys[event.key] = true;
    }
    
    if (pressedKeys['Control'] === true && pressedKeys['Alt'] === true && language === 'English') {
        language = 'Russian';
        console.log('russs changed');

    }
    else if (pressedKeys['Control'] === true && pressedKeys['Alt'] === true && language === 'Russian') {
        language = 'English';
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

    console.log(keySelected);

    keySelected.classList.add('clicked');
    textArea.value += keySelected.innerText;

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


export {textArea, functionalKeys, fillKeys};
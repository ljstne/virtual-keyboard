import {textArea, functionalKeys, fillKeys} from "./index.js";

let keyboardKeys = document.querySelectorAll('.key-single');

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

let caps = false;
let shift = false;

let pressedKeys = {
};

document.addEventListener('keydown', (event) => {

    if (pressedKeys['CapsLock'] === true && event.key === 'CapsLock') {
        delete pressedKeys['CapsLock'];
        fillKeys(false);
    }
    else {
    pressedKeys[event.key] = true;
    }
    console.log(pressedKeys);

    if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === undefined && !(Object.keys(pressedKeys).length > 2)) {
        fillKeys(true);
        console.log(event.key,'1111111111111111');

    }
    
    else if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === true 
    && (Object.keys(pressedKeys).length <= 2) ) {
        console.log(event.key,'fdkaokfeo,FDAFFDAFDAFDAFADF', Object.keys(pressedKeys).length);
        fillKeys(false);
    }

    else if (pressedKeys['CapsLock'] === undefined && pressedKeys['Shift'] === undefined) {
        fillKeys(false);
    }

    else if (pressedKeys['CapsLock'] === undefined && pressedKeys['Shift'] === true) {
        fillKeys(true);
    }


    // if ((pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === false) || (pressedKeys['CapsLock'] === false && pressedKeys['Shift'] === true)) {
    //     fillKeys(true);
    // }

    // // else if (pressedKeys['CapsLock'] === undefined || pressedKeys['Shift'] === undefined) {
    // //     fillKeys(false);
    // // }
    
    // else if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === true) {
    //     fillKeys(false)
    // };

    // if (pressedKeys['CapsLock'] === true && event.key === 'CapsLock') {
    //     fillKeys(false);
    //     // delete pressedKeys['CapsLock'];
    // };

    // if ()

    // if (event.shiftKey === true )

    // if (event.shiftKey === true && caps === false) {
    //     shift = true;
    //     fillKeys(shift)
    // }

    // else if (event.shiftKey === true && caps === true) {
    //     shift = false;
    //     fillKeys(shift);
    //     shift = true;
    // }

    // // else {
    // //     shift = false;
    // //     fillKeys(shift);
    // // };

    // if (event.key === 'CapsLock' && caps === false) {
    //     caps = true;
    //     fillKeys(caps);
    // }

    // else if (event.key === 'CapsLock') {
    //     caps = false;
    //     fillKeys(caps);
    // }

    // else if (event.key !== 'Shift') {
    //     caps = false;
    //     fillKeys(caps)
    // };

    if (pressedKeys['CapsLock'] === true) {
        caps = true;
    }

    if (event.repeat === true && functionalKeys['indexes'].includes(event.key)) {
        return false
    }

    event.preventDefault();

    keyboardKeys = document.querySelectorAll('.key-single');
    iteratableKeyboard = Array.from(keyboardKeys);

    // console.log(event.key, event.code, 'key-codedede', iteratableKeyboard);
    
    let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.key);
    // console.log(keySelected, 'SELELELELTLELTLETLE');
    if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.code)
    };
    if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.key.toUpperCase())
    };
    if (keySelected === undefined) {
        keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.key.toLowerCase())
    };

    // console.log(keySelected);
    
    keySelected.classList.add('clicked');
    const key = event.key;
    textArea.value += key;

});

document.addEventListener('keyup', (event) => {

    // console.log(event.key,'key up codeodoeod');
    if (event.key !== 'CapsLock') {
        delete pressedKeys[event.key];
    }


    
    if ((pressedKeys['CapsLock'] === true || pressedKeys['Shift'] === true) && event.key === 'Shift') {
        fillKeys(true);
    }

    else if (pressedKeys['CapsLock'] === undefined && pressedKeys['Shift'] === undefined) {
        fillKeys(false);
    }


    if (shift === true && caps === false) {
        shift = false;
        fillKeys(shift)
    }

    else if (shift === true && caps === true) {
        shift = false;
        fillKeys(caps)
    }

    event.preventDefault();

    keyboardKeys = document.querySelectorAll('.key-single');
    iteratableKeyboard = Array.from(keyboardKeys)
    // console.log(keyboardKeys);

    let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.key);
    // console.log(kySelected, 'SELELELELTLELTLETLE');
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
})
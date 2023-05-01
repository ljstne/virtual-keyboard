import {keyboard, textArea} from "./index.js";
import {functionalKeys} from "./layouts.js";


let keyboardKeys = document.querySelectorAll('.key-single');

let language;

window.addEventListener('load', () => {
    if(localStorage.getItem('language')) {
    language = localStorage.getItem('language')
keyboard.fillKeys(false, language);
    }
    else {
        language = "English"
    }
})


let iteratableKeyboard = Array.from(keyboardKeys);



const tieMouseEvents = () => {
    let keyboardKeys = document.querySelectorAll('.key-single');

    const keyboardContainer = document.querySelector('.keyboard__container');

    keyboardContainer.addEventListener('mousedown', (event) => {

            const audio = new Audio('./assets/click.mp3');
            audio.currentTime = 0;
            audio.play();


            if (!event.target.classList.contains('key-single')) {return false}

            const element = event.target;
            element.classList.add('clicked');
        if (!functionalKeys.indexes.includes(element.getAttribute('data-key')))
            textArea.value += event.target.innerText;  

            else if (element.getAttribute('data-key') === 'Enter') {
                textArea.value += `\n`;
                return false
            }
        
            else if (element.getAttribute('data-key') === 'Space') {
                textArea.value += ` `;
                return false
        
            }
            
            element.addEventListener('mouseleave', () => {
                element.classList.remove('clicked');
            })

            if (event.target.getAttribute('data-key') === 'Backspace') {
                let str = textArea.value;
               textArea.value = str.slice(0, textArea.selectionEnd) + str.slice(textArea.selectionEnd);
               return false
            }
            
            else if (event.target.getAttribute('data-key') === 'Delete') {
                let str = textArea.value;
               textArea.value = str.slice(0, textArea.selectionEnd + 1) + str.slice(textArea.selectionEnd +1);
               return false
            }
            
                if (pressedKeys['CapsLock'] === true && event.target.getAttribute('data-key') === 'CapsLock') {
                    delete pressedKeys['CapsLock'];
                    keyboard.fillKeys(false, language);
                }
                
                else {
                pressedKeys[event.target.getAttribute('data-key')] = true;
                }
                
                if (pressedKeys['Control'] === true && pressedKeys['Alt'] === true && language === 'English') {
                    language = 'Russian';
                    keyboard.fillKeys(false, language);            
                }
                else if (pressedKeys['Control'] === true && pressedKeys['Alt'] === true && language === 'Russian') {
                    language = 'English';
                    keyboard.fillKeys(false, language);            
                }

            
                if (pressedKeys['CapsLock'] === true && (pressedKeys['ShiftLeft'] || pressedKeys['ShiftRight'] === undefined) && !(Object.keys(pressedKeys).length > 2)) {
                    keyboard.fillKeys(true, language);
                }
                
                else if (pressedKeys['CapsLock'] === true && (pressedKeys['ShiftLeft'] === true || pressedKeys['ShiftRight'] === true )
                && (Object.keys(pressedKeys).length <= 2) ) {
                    keyboard.fillKeys(false, language);
                }
            
                else if (pressedKeys['CapsLock'] === undefined && (pressedKeys['ShiftLeft'] === true
                || pressedKeys['ShiftLeft'] === true) ) {
                    keyboard.fillKeys(true, language);
                 }
            
                if (event.repeat === true
                     && functionalKeys['indexes'].includes(event.target.getAttribute('data-key'))) {
            
                    keyboardKeys = document.querySelectorAll('.key-single');
                    iteratableKeyboard = Array.from(keyboardKeys);
                           
                let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.target.getAttribute('data-key'));
                if (keySelected === undefined) {
                    keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.target.getAttribute('data-key'))
                }
            }
            
        });


        keyboardContainer.addEventListener('mouseup', (event) => {


            if (!event.target.classList.contains('key-single')) {return false}

            if (event.target.getAttribute('data-key') !== 'CapsLock') {
                delete pressedKeys[event.target.getAttribute('data-key')];
            }
        
        
            if ((pressedKeys['CapsLock'] === true || pressedKeys['ShiftLeft'] === true) && event.target.getAttribute('data-key') === 'ShiftLeft') {
                keyboard.fillKeys(true, language);
            }
        
            else if (pressedKeys['CapsLock'] === undefined && pressedKeys['ShiftLeft'] === undefined && event.target.getAttribute('data-key') === 'ShiftLeft') {
                keyboard.fillKeys(false, language);
            }
        
        
            event.preventDefault();
        
            keyboardKeys = document.querySelectorAll('.key-single');
            iteratableKeyboard = Array.from(keyboardKeys)
        
            let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.target.getAttribute('data-key'));
            keySelected.classList.remove('clicked');
        })

}

tieMouseEvents();



let pressedKeys = {
};



document.addEventListener('keydown', (event) => {

    if (event.repeat === false) {
    const audio = new Audio('./assets/click.mp3');
    audio.currentTime = 0;
    audio.play();
    }


    if (event.code === 'Backspace') {

        if (document.activeElement !== textArea) {
            let str = textArea.value;
           textArea.value = str.slice(0, textArea.selectionEnd -1) + str.slice(textArea.selectionEnd);
          return false
        } 

        else {
            let str = textArea.value;
           textArea.value = str.slice(0, textArea.selectionEnd) + str.slice(textArea.selectionEnd);
          return false
        }


    }

    else if (event.code === 'Delete') {
        let str = textArea.value;
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

    }
    else if (pressedKeys['Control'] === true && pressedKeys['Alt'] === true && language === 'Russian') {
        language = 'English';
        keyboard.fillKeys(false, language);

    }

    if (pressedKeys['CapsLock'] === true && pressedKeys['Shift'] === undefined
     && !(Object.keys(pressedKeys).length > 2)) {
        keyboard.fillKeys(true, language)
    }
    
    else if (pressedKeys['CapsLock'] === true 
    && (pressedKeys['ShiftLeft'] === true || pressedKeys['Shift'] === true) 
    && (Object.keys(pressedKeys).length <= 2) ) {
        keyboard.fillKeys(false, language);
    }

    else if (pressedKeys['CapsLock'] === undefined && (pressedKeys['Shift'] === true || pressedKeys['ShiftRight'] === true)) {
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
    else if (event.code === 'Enter') {
        textArea.value += `\n`;
    }

    else if (event.code === 'Space') {
        textArea.value += ` `;

    }

    keySelected.classList.add('clicked');

    tieMouseEvents();

});

document.addEventListener('keyup', (event) => {

    
    if (event.key !== 'CapsLock') {
        delete pressedKeys[event.code];
        delete pressedKeys[event.key];

    }

    // else if (event.key === 'CapsLock' && caps === true) {
    //     caps = false;
    //     delete pressedKeys[event.key];
    // }


    if ((pressedKeys['CapsLock'] === true ||(pressedKeys['Shift'] === true 
    ||pressedKeys['ShiftLeft'] === true ||pressedKeys['ShiftRight'] === true  )) && event.key === 'Shift') {
        keyboard.fillKeys(true, language);
    }

    else if (pressedKeys['CapsLock'] === undefined
     && (pressedKeys['Shift'] === undefined || pressedKeys['ShiftRight']=== undefined
     || pressedKeys['ShiftLeft']=== undefined )
     && event.key === 'Shift') {
        keyboard.fillKeys(false, language);
    }


    event.preventDefault();

    keyboardKeys = document.querySelectorAll('.key-single');
    iteratableKeyboard = Array.from(keyboardKeys)

    let keySelected = iteratableKeyboard.find(e=> e.getAttribute('data-key') === event.code);


    keySelected.classList.remove('clicked');

    tieMouseEvents();

});

window.addEventListener('beforeunload' , () => {

    localStorage.setItem('language', `${language}`)
})


export {textArea, functionalKeys};
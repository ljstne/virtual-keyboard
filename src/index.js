"use strict";

import {keys, keysCaps, russianKeyboard, russianKeyboardCaps, functionalKeys, keyCodes} from './layouts.js';

const body = document.body;


const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.append(wrapper);

const textArea = document.createElement('textarea');
textArea.className = 'text-area';
wrapper.append(textArea);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard__container';
wrapper.append(keyboardContainer);

let keyboardKeys;

class Keyboard {
    constructor() {
        // this.caps = caps;
        // this.layout = layout;
        this.fillKeys = async function(caps, layout) {

            keyboardContainer.innerHTML = '';
        
            let keysArrayToUse = keys;
        
            if (caps === false && layout === 'English') {
                keysArrayToUse = keys;
            }
        
            if (caps === true && layout === 'English') {
                keysArrayToUse = keysCaps;
            }
        
            else if (caps === false && layout === 'Russian') {
                keysArrayToUse = russianKeyboard;
            }
            else if (caps === true && layout === 'Russian') {
                keysArrayToUse = russianKeyboardCaps;
            };
                
            for (let i = 0; i < 5; i++) {
                const keyboardRow = document.createElement('div');
                keyboardRow.className = "keys-row";
                
                if (i === 0) {
                    for (let j = 0; j < 14; j++) {
                        const keyHtml = document.createElement('div');
                        keyHtml.className = "key-single";
                        keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
                        keyHtml.setAttribute('role', 'button')
                        const currentKey = keysArrayToUse[j];
                        keyHtml.innerText = currentKey;
                        keyboardRow.append(keyHtml);
                    }
                }
                else if (i === 1) {
                    for (let j = 14; j < 29; j++) {
                        const keyHtml = document.createElement('div');
                        const span = document.createElement('span');
                        keyHtml.className = "key-single";
                        keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
                        keyHtml.setAttribute('role', 'button');
                        const currentKey = keysArrayToUse[j];
                        keyHtml.innerText = currentKey;
                        keyboardRow.append(keyHtml);
                    }
                }
                else if (i === 2) {
                    for (let j = 29; j < 42; j++) {
                        const keyHtml = document.createElement('div');
                        const span = document.createElement('span');
                        keyHtml.className = "key-single";
                        keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
                        keyHtml.setAttribute('role', 'button');
                        const currentKey = keysArrayToUse[j];
                        keyHtml.innerText = currentKey;
                        keyboardRow.append(keyHtml);
                    }
                }
                else if (i === 3) {
                    for (let j = 42; j < 54; j++) {
                        const keyHtml = document.createElement('div');
                        const span = document.createElement('span');
                        keyHtml.className = "key-single";
                        keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
                        keyHtml.setAttribute('role', 'button');
                        const currentKey = keysArrayToUse[j];
                        keyHtml.innerText = currentKey;
                        // keyHtml.append(span);
                        keyboardRow.append(keyHtml);
                    }
                }
                else if (i === 4) {
                    for (let j = 54; j < 65; j++) {
                        const keyHtml = document.createElement('div');
                        keyHtml.className = "key-single";
                        keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
                        keyHtml.setAttribute('role', 'button');
                        const currentKey = keysArrayToUse[j];
                        keyHtml.innerText = currentKey;
                        keyboardRow.append(keyHtml);
                    }
                }
        
                keyboardContainer.append(keyboardRow)
            }
        
        }
}
}

const keyboard = new Keyboard();
keyboard.fillKeys(false, 'English')

// const fillKeys = async function(caps, layout) {

//     keyboardContainer.innerHTML = '';

//     let keysArrayToUse = keys;

//     if (caps === false && layout === 'English') {
//         keysArrayToUse = keys;
//     }


//     if (caps === true && layout === 'English') {
//         keysArrayToUse = keysCaps;
//     }

//     else if (caps === false && layout === 'Russian') {
//         keysArrayToUse = russianKeyboard;
//     }
//     else if (caps === true && layout === 'Russian') {
//         keysArrayToUse = russianKeyboardCaps;
//     };

//     // keysArrayToUse = keyCodes;

//     for (let i = 0; i < 5; i++) {
//         const keyboardRow = document.createElement('div');
//         keyboardRow.className = "keys-row";

//         // fill keyboard with keys

//         if (i === 0) {
//             for (let j = 0; j < 14; j++) {
//                 const keyHtml = document.createElement('div');
//                 keyHtml.className = "key-single";
//                 keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
//                 keyHtml.setAttribute('role', 'button')
//                 const currentKey = keysArrayToUse[j];
//                 keyHtml.innerText = currentKey;
//                 keyboardRow.append(keyHtml);
//             }
//         }
//         else if (i === 1) {
//             for (let j = 14; j < 29; j++) {
//                 const keyHtml = document.createElement('div');
//                 const span = document.createElement('span');
//                 keyHtml.className = "key-single";
//                 keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
//                 keyHtml.setAttribute('role', 'button');
//                 const currentKey = keysArrayToUse[j];
//                 keyHtml.innerText = currentKey;
//                 // keyHtml.append(span);
//                 keyboardRow.append(keyHtml);
//             }
//         }
//         else if (i === 2) {
//             for (let j = 29; j < 42; j++) {
//                 const keyHtml = document.createElement('div');
//                 const span = document.createElement('span');
//                 keyHtml.className = "key-single";
//                 keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
//                 keyHtml.setAttribute('role', 'button');
//                 const currentKey = keysArrayToUse[j];
//                 keyHtml.innerText = currentKey;
//                 // keyHtml.append(span);
//                 keyboardRow.append(keyHtml);
//             }
//         }
//         else if (i === 3) {
//             for (let j = 42; j < 54; j++) {
//                 const keyHtml = document.createElement('div');
//                 const span = document.createElement('span');
//                 keyHtml.className = "key-single";
//                 keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
//                 keyHtml.setAttribute('role', 'button');
//                 const currentKey = keysArrayToUse[j];
//                 keyHtml.innerText = currentKey;
//                 // keyHtml.append(span);
//                 keyboardRow.append(keyHtml);
//             }
//         }
//         else if (i === 4) {
//             for (let j = 54; j < 65; j++) {
//                 const keyHtml = document.createElement('div');
//                 keyHtml.className = "key-single";
//                 keyHtml.setAttribute('data-key', `${keyCodes[j]}`)
//                 keyHtml.setAttribute('role', 'button');
//                 const currentKey = keysArrayToUse[j];
//                 keyHtml.innerText = currentKey;
//                 keyboardRow.append(keyHtml);
//             }
//         }

//         keyboardContainer.append(keyboardRow)
//     }

// }
// fillKeys(false, 'English')

// document.addEventListener('keydown', (event) => {
//     const key = event.key;
//     textArea.value += key;
// })

export {textArea, functionalKeys, fillKeys};
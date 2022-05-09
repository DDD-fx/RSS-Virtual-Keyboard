import './assets/styles.css';
import './assets/normalize.css';
import CreateNewElem from './scripts/createElem';
import CreateKeys from './scripts/create-key';

const form = new CreateNewElem('form', { action: '#', class: 'keyboard-form' });
document.body.append(form.elem);
new CreateNewElem('label', { for: 'textarea', innerHTML: 'Virtual Keyboard' }).append();
new CreateNewElem('textarea', { name: 'virtual-keyboard', id: 'textarea' }).append();
new CreateNewElem('div', { id: 'js-keyboard' }).append();
new CreateNewElem('div', { class: 'disclaimer', innerHTML: '<p>Клавиатура создана в OS Windows</p><p>Комбинация для переключения языка: левыe <b>Ctrl + Alt</b></p><p>Для переключения языка мышью: <b>Win</b></p>' }).append();

const KEYS = [
  { code: 'Backquote', en: ['`', '~'], ru: ['ё', 'Ё', 'Ё'] },
  { code: 'Digit1', en: ['1', '!'], ru: ['1', '!'] },
  { code: 'Digit2', en: ['2', '@'], ru: ['2', '"'] },
  { code: 'Digit3', en: ['3', '№'], ru: ['3', '#'] },
  { code: 'Digit4', en: ['4', '$'], ru: ['4', ';'] },
  { code: 'Digit5', en: ['5', '%'], ru: ['5', '%'] },
  { code: 'Digit6', en: ['6', '^'], ru: ['6', ':'] },
  { code: 'Digit7', en: ['7', '&'], ru: ['7', '?'] },
  { code: 'Digit8', en: ['8', '*'], ru: ['8', '*'] },
  { code: 'Digit9', en: ['9', '('], ru: ['9', '('] },
  { code: 'Digit0', en: ['0', ')'], ru: ['0', ')'] },
  { code: 'Minus', en: ['-', '_'], ru: ['-', '_', '-'] },
  { code: 'Equal', en: ['=', '+'], ru: ['=', '+', '='] },
  { code: 'Backspace', en: ['Backspace'], ru: ['Backspace'] }, /*-------------------*/
  { code: 'Tab', en: ['Tab'], ru: ['Tab'] },
  { code: 'KeyQ', en: ['q'], ru: ['й'] },
  { code: 'KeyW', en: ['w'], ru: ['ц'] },
  { code: 'KeyE', en: ['e'], ru: ['у'] },
  { code: 'KeyR', en: ['r'], ru: ['й'] },
  { code: 'KeyT', en: ['t'], ru: ['е'] },
  { code: 'KeyY', en: ['y'], ru: ['н'] },
  { code: 'KeyU', en: ['u'], ru: ['г'] },
  { code: 'KeyI', en: ['i'], ru: ['ш'] },
  { code: 'KeyO', en: ['o'], ru: ['щ'] },
  { code: 'KeyP', en: ['p'], ru: ['з'] },
  { code: 'BracketLeft', en: ['[', '{'], ru: ['х', 'Х', 'Х'] },
  { code: 'BracketRight', en: [']', '}'], ru: ['ъ', 'Ъ', 'Ъ'] },
  { code: 'Backslash', en: ['\\', '|'], ru: ['\\', '/', '\\'] },
  { code: 'Delete', en: ['Del'], ru: ['Del'] }, /*---------------------*/
  { code: 'CapsLock', en: ['CapsLock'], ru: ['CapsLock'] },
  { code: 'KeyA', en: ['a'], ru: ['ф'] },
  { code: 'KeyS', en: ['s'], ru: ['ы'] },
  { code: 'KeyD', en: ['d'], ru: ['в'] },
  { code: 'KeyF', en: ['f'], ru: ['а'] },
  { code: 'KeyG', en: ['g'], ru: ['п'] },
  { code: 'KeyH', en: ['h'], ru: ['р'] },
  { code: 'KeyJ', en: ['j'], ru: ['о'] },
  { code: 'KeyK', en: ['k'], ru: ['л'] },
  { code: 'KeyL', en: ['l'], ru: ['д'] },
  { code: 'Semicolon', en: [';', ':'], ru: ['ж', 'Ж', 'Ж'] },
  { code: 'Quote', en: ["'", '"'], ru: ['э', 'Э', 'Э'] },
  { code: 'Enter', en: ['Enter'], ru: ['Enter'] }, /*-----------------------*/
  { code: 'ShiftLeft', en: ['Shift'], ru: ['Shift'] },
  { code: 'KeyZ', en: ['z'], ru: ['я'] },
  { code: 'KeyX', en: ['x'], ru: ['ч'] },
  { code: 'KeyC', en: ['c'], ru: ['с'] },
  { code: 'KeyV', en: ['v'], ru: ['м'] },
  { code: 'KeyB', en: ['b'], ru: ['и'] },
  { code: 'KeyN', en: ['n'], ru: ['т'] },
  { code: 'KeyM', en: ['m'], ru: ['ь'] },
  { code: 'Comma', en: [',', '<'], ru: ['б', 'Б', 'Б'] },
  { code: 'Period', en: ['.', '>'], ru: ['ю', 'Ю', 'Ю'] },
  { code: 'Slash', en: ['/', '?'], ru: ['.', ',', '.'] },
  { code: 'ArrowUp', en: ['&#x2191', '&#x2191'], ru: ['&#x2191', '&#x2191'] },
  { code: 'ShiftRight', en: ['Shift'], ru: ['Shift'] }, /*---------------------------*/
  { code: 'ControlLeft', en: ['Ctrl'], ru: ['Ctrl'] },
  { code: 'MetaLeft', en: ['Win'], ru: ['Win'] },
  { code: 'AltLeft', en: ['Alt'], ru: ['Alt'] },
  { code: 'Space', en: ['&#160', '&#160'], ru: ['&#160', '&#160', '&#160'] },
  { code: 'AltRight', en: ['Alt'], ru: ['Alt'] },
  { code: 'ArrowLeft', en: ['&#x2190', '&#x2190'], ru: ['&#x2190', '&#x2190'] },
  { code: 'ArrowDown', en: ['&#x2193', '&#x2193'], ru: ['&#x2193', '&#x2193'] },
  { code: 'ArrowRight', en: ['&#x2192', '&#x2192'], ru: ['&#x2192', '&#x2192'] },
  { code: 'ControlRight', en: ['Ctrl'], ru: ['Ctrl'] },
];
KEYS.forEach((el) => new CreateKeys(el.code, el.en, el.ru).createKeys());

const keyboard = document.getElementById('js-keyboard');
const allKeys = document.querySelectorAll('.key');
const enKeysAll = document.querySelectorAll('.en');
const ruKeysAll = document.querySelectorAll('.ru');
const textArea = document.getElementById('textarea');

const enUpper = [];
enKeysAll.forEach((el) => enUpper.push(el.querySelector('.upperCase')));
const enLower = [];
enKeysAll.forEach((el) => enLower.push(el.querySelector('.lowerCase')));
const enCaps = [];
enKeysAll.forEach((el) => enCaps.push(el.querySelector('.caps')));
const enShiftCaps = [];
enKeysAll.forEach((el) => enShiftCaps.push(el.querySelector('.shiftCaps')));

const ruUpper = [];
ruKeysAll.forEach((el) => ruUpper.push(el.querySelector('.upperCase')));
const ruLower = [];
ruKeysAll.forEach((el) => ruLower.push(el.querySelector('.lowerCase')));
const ruCaps = [];
ruKeysAll.forEach((el) => ruCaps.push(el.querySelector('.caps')));
const ruShiftCaps = [];
ruKeysAll.forEach((el) => ruShiftCaps.push(el.querySelector('.shiftCaps')));

function enLowerHide() {
  enLower.forEach((el, i) => {
    enLower[i].hidden = true;
  });
}
function enLowerShow() {
  enLower.forEach((el, i) => {
    enLower[i].hidden = false;
  });
}
function enUpperHide() {
  enUpper.forEach((el, i) => {
    enUpper[i].hidden = true;
  });
}
function enUpperShow() {
  enUpper.forEach((el, i) => {
    enUpper[i].hidden = false;
  });
}
function enCapsHide() {
  enCaps.forEach((el, i) => {
    enCaps[i].hidden = true;
  });
}
function enCapsShow() {
  enCaps.forEach((el, i) => {
    enCaps[i].hidden = false;
  });
}
function enShiftCapsHide() {
  enShiftCaps.forEach((el, i) => {
    enShiftCaps[i].hidden = true;
  });
}
function enShiftCapsShow() {
  enShiftCaps.forEach((el, i) => {
    enShiftCaps[i].hidden = false;
  });
}
function ruLowerHide() {
  ruLower.forEach((el, i) => {
    ruLower[i].hidden = true;
  });
}
function ruLowerShow() {
  ruLower.forEach((el, i) => {
    ruLower[i].hidden = false;
  });
}
function ruUpperHide() {
  ruUpper.forEach((el, i) => {
    ruUpper[i].hidden = true;
  });
}
function ruUpperShow() {
  ruUpper.forEach((el, i) => {
    ruUpper[i].hidden = false;
  });
}
function ruCapsHide() {
  ruCaps.forEach((el, i) => {
    ruCaps[i].hidden = true;
  });
}
function ruCapsShow() {
  ruCaps.forEach((el, i) => {
    ruCaps[i].hidden = false;
  });
}
function ruShiftCapsHide() {
  ruShiftCaps.forEach((el, i) => {
    ruShiftCaps[i].hidden = true;
  });
}
function ruShiftCapsShow() {
  ruShiftCaps.forEach((el, i) => {
    ruShiftCaps[i].hidden = false;
  });
}

function langChange() {
  if (enCaps[0].hidden === true && ruLower[0].hidden === false) {
    enLowerShow();
    ruLowerHide();
    document.cookie = 'lang=en';
  } else if (enCaps[0].hidden === false) {
    enCapsHide();
    ruCapsShow();
    document.cookie = 'lang=ru';
  } else if (ruCaps[0].hidden === true && enLower[0].hidden === false) {
    ruLowerShow();
    enLowerHide();
    document.cookie = 'lang=ru';
  } else if (ruCaps[0].hidden === false) {
    ruCapsHide();
    enCapsShow();
    document.cookie = 'lang=en';
  } else if (enUpper[0].hidden === false) {
    enUpperHide();
    ruUpperShow();
    document.cookie = 'lang=ru';
  } else if (ruUpper[0].hidden === false) {
    ruUpperHide();
    enUpperShow();
    document.cookie = 'lang=en';
  } else if (enShiftCaps[0].hidden === false) {
    enShiftCapsHide();
    ruShiftCapsShow();
    document.cookie = 'lang=ru';
  } else if (ruShiftCaps[0].hidden === false) {
    ruShiftCapsHide();
    enShiftCapsShow();
    document.cookie = 'lang=en';
  }
}
function changeLangKey(...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();
    langChange();
  });
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

changeLangKey('ControlLeft', 'AltLeft');
const win = document.getElementById('MetaLeft');
win.addEventListener('click', langChange);

allKeys.forEach((el) => el.addEventListener('click', () => textArea.focus()));

let textLine;
let caretPosStart;
let caretPosEnd;
const backSpace = document.getElementById('Backspace');
const caps = document.getElementById('CapsLock');
const del = document.getElementById('Delete');
const shiftLeft = document.getElementById('ShiftLeft');
const shiftRight = document.getElementById('ShiftRight');

function insertText(el) {
  caretPosStart = textArea.selectionStart;
  caretPosEnd = textArea.selectionEnd;
  textLine = textArea.value;

  if (el.id === 'Tab' || el === 'tab') {
    textArea.setRangeText('    ', caretPosStart, caretPosEnd);
    textArea.selectionStart = caretPosStart + 4;
  } else if (el.id === 'Enter' || el === 'enter') {
    textArea.setRangeText('\n', caretPosStart, caretPosEnd);
    textArea.selectionStart = caretPosStart + 1;
  } else {
    textArea.setRangeText(el.innerText, caretPosStart, caretPosEnd);
    textArea.selectionStart = caretPosStart + 1;
  }
}

function backSpaceFunc() {
  caretPosStart = textArea.selectionStart;
  caretPosEnd = textArea.selectionEnd;
  textLine = textArea.value;
  if (caretPosEnd !== caretPosStart) {
    textArea.setRangeText('', caretPosStart, caretPosEnd);
  } else if (caretPosStart > 0) {
    textArea.setRangeText('', caretPosStart - 1, caretPosEnd);
  }
}

function capsFunc() {
  if (enCaps[0].hidden === true && enLower[0].hidden === false) {
    enLowerHide();
    enCapsShow();
  } else if (ruCaps[0].hidden === true && ruLower[0].hidden === false) {
    ruLowerHide();
    ruCapsShow();
  } else if (enCaps[0].hidden === false) {
    enCapsHide();
    enLowerShow();
  } else if (ruCaps[0].hidden === false) {
    ruCapsHide();
    ruLowerShow();
  } else if (enUpper[0].hidden === false) {
    enUpperHide();
    enShiftCapsShow();
  } else if (ruUpper[0].hidden === false) {
    ruUpperHide();
    ruShiftCapsShow();
  } else if (enShiftCaps[0].hidden === false) {
    enShiftCapsHide();
    enUpperShow();
  } else if (ruShiftCaps[0].hidden === false) {
    ruShiftCapsHide();
    ruUpperShow();
  }
}

function shiftFunc() {
  if (enLower[0].hidden === false) {
    enLowerHide();
    enUpperShow();
  } else if (enCaps[0].hidden === false) {
    enCapsHide();
    enShiftCapsShow();
  } else if (enUpper[0].hidden === false) {
    enUpperHide();
    enLowerShow();
  } else if (enShiftCaps[0].hidden === false) {
    enCapsShow();
    enShiftCapsHide();
  } else if (ruLower[0].hidden === false) {
    ruLowerHide();
    ruUpperShow();
  } else if (ruCaps[0].hidden === false) {
    ruCapsHide();
    ruShiftCapsShow();
  } else if (ruUpper[0].hidden === false) {
    ruUpperHide();
    ruLowerShow();
  } else if (ruShiftCaps[0].hidden === false) {
    ruCapsShow();
    ruShiftCapsHide();
  }
}

function delFunc() {
  caretPosStart = textArea.selectionStart;
  caretPosEnd = textArea.selectionEnd;
  textLine = textArea.value;
  if (caretPosStart < textLine.length && caretPosStart === caretPosEnd) {
    textArea.setRangeText('', caretPosStart, caretPosEnd + 1);
  } else {
    textArea.setRangeText('', caretPosStart, caretPosEnd);
  }
}

function keySetAttrib(el) {
  if (el.getAttribute('active') !== 'true') {
    el.setAttribute('active', 'true');
  } else {
    el.setAttribute('active', 'false');
  }
}

function setPropertyOnTouch(event) {
  const key = event.target.closest('.key');

  if (event.type === 'keydown') {
    event.preventDefault();
    if (event.code === 'CapsLock') {
      if (event.repeat) return;
      capsFunc();
      keySetAttrib(caps);
    }

    if (event.code === 'ShiftLeft') {
      if (event.repeat) return;
      keySetAttrib(shiftLeft);
      shiftFunc();
    }

    if (event.code === 'ShiftRight') {
      if (event.repeat) return;
      keySetAttrib(shiftRight);
      shiftFunc();
    }

    if (event.code !== 'ShiftRight') {
      textArea.focus();
    }

    for (let i = 0; i < allKeys.length; i += 1) {
      if (allKeys[i].id === event.code && event.code !== 'CapsLock' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight') {
        allKeys[i].style.setProperty('background-color', '#001174');
        allKeys[i].style.setProperty('border-radius', '20px');
        if (!allKeys[i].classList.contains('special') || event.code === 'ArrowLeft' || event.code === 'ArrowRight' || event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'Tab' || event.code === 'Enter') {
          insertText(allKeys[i]);
        }
      }
    }
  } else if (event.type === 'mousedown') {
    if (key) {
      key.style.setProperty('background-color', '#001174');
      key.style.setProperty('border-radius', '20px');
    }
  } else if (event.type === 'mouseup') {
    if (key) {
      key.style.setProperty('background-color', '');
      key.style.setProperty('border-radius', '');
    }
  } else if (event.type === 'click') {
    if (event.target.closest('.key') && !event.target.closest('.special')) {
      insertText(event.target);
    } else if (event.target.closest('.key') && (event.target.closest('.special').id === 'ArrowLeft' || event.target.closest('.special').id === 'ArrowRight' || event.target.closest('.special').id === 'ArrowUp' || event.target.closest('.special').id === 'ArrowDown')) {
      insertText(event.target);
    } else if (event.target.closest('.key') && event.target.closest('.special').id === 'Tab') {
      insertText('tab');
    } else if (event.target.closest('.key') && event.target.closest('.special').id === 'Enter') {
      insertText('enter');
    } else if (event.target.closest('.key') && event.target.closest('.special').id === 'CapsLock') {
      keySetAttrib(caps);
    } else if (event.target.closest('.key') && event.target.closest('.special').id === 'ShiftLeft') {
      keySetAttrib(shiftLeft);
    } else if (event.target.closest('.key') && event.target.closest('.special').id === 'ShiftRight') {
      keySetAttrib(shiftRight);
    }
  }
}

function unSetPropertyOnTouch(keyup) {
  if (keyup.code === 'ShiftLeft') {
    keySetAttrib(shiftLeft);
  }
  if (keyup.code === 'ShiftRight') {
    keySetAttrib(shiftRight);
  }
  for (let i = 0; i < allKeys.length; i += 1) {
    if (allKeys[i].id === keyup.code) {
      allKeys[i].style.setProperty('background-color', '');
      allKeys[i].style.setProperty('border-radius', '');
    }
  }
}

document.addEventListener('keydown', setPropertyOnTouch);
document.addEventListener('keyup', unSetPropertyOnTouch);
keyboard.addEventListener('mousedown', setPropertyOnTouch);
keyboard.addEventListener('mouseup', setPropertyOnTouch);
keyboard.addEventListener('click', setPropertyOnTouch);

backSpace.addEventListener('click', backSpaceFunc);
document.addEventListener('keydown', (event) => {
  if (event.code === 'Backspace') {
    backSpaceFunc();
  }
});

caps.addEventListener('click', capsFunc);

del.addEventListener('click', delFunc);
document.addEventListener('keydown', (event) => {
  if (event.code === 'Delete') {
    delFunc();
  }
});

shiftLeft.addEventListener('click', shiftFunc);
document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft') {
    shiftFunc();
  }
});

shiftRight.addEventListener('click', shiftFunc);
document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftRight') {
    shiftFunc();
  }
});

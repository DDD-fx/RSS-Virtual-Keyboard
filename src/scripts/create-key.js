export default class CreateKeys {
  constructor(code, en, ru) {
    this.code = code;
    this.en = en;
    this.ru = ru;
  }

  keyboard = document.getElementById('js-keyboard');

  createKeys() {
    const div = document.createElement('div');
    const spanEn = document.createElement('span');
    const spanRu = document.createElement('span');
    const lowerCaseEn = document.createElement('span');
    const upperCaseEn = document.createElement('span');
    const capsEn = document.createElement('span');
    const shiftCapsEn = document.createElement('span');
    const lowerCaseRu = document.createElement('span');
    const upperCaseRu = document.createElement('span');
    const capsRu = document.createElement('span');
    const shiftCapsRu = document.createElement('span');

    function getCookie(name) {
      const matches = document.cookie.match(new RegExp(
        `(?:^|; )${name.replace(/([$?*|{}\]\\^])/g, '\\$1')}=([^;]*)`,
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function appendEn(span) {
      span.append(lowerCaseEn, upperCaseEn, capsEn, shiftCapsEn);
      div.append(span);
    }
    function appendRu(span) {
      span.append(lowerCaseRu, upperCaseRu, capsRu, shiftCapsRu);
      div.append(span);
    }
    function makeHiddenEn() {
      if (getCookie('lang') === 'en' || !getCookie('lang')) {
        lowerCaseEn.hidden = false;
        upperCaseEn.hidden = true;
        capsEn.hidden = true;
        shiftCapsEn.hidden = true;
      } else {
        lowerCaseEn.hidden = true;
        upperCaseEn.hidden = true;
        capsEn.hidden = true;
        shiftCapsEn.hidden = true;
      }
    }
    function makeHiddenRu() {
      if (getCookie('lang') === 'ru') {
        lowerCaseRu.hidden = false;
        upperCaseRu.hidden = true;
        capsRu.hidden = true;
        shiftCapsRu.hidden = true;
      } else {
        lowerCaseRu.hidden = true;
        upperCaseRu.hidden = true;
        capsRu.hidden = true;
        shiftCapsRu.hidden = true;
      }
    }

    div.classList.add('key');
    div.id = this.code;
    this.keyboard.append(div);

    spanRu.classList.add('ru');
    spanEn.classList.add('en');
    lowerCaseEn.classList.add('lowerCase');
    upperCaseEn.classList.add('upperCase');
    capsEn.classList.add('caps');
    shiftCapsEn.classList.add('shiftCaps');
    lowerCaseRu.classList.add('lowerCase');
    upperCaseRu.classList.add('upperCase');
    capsRu.classList.add('caps');
    shiftCapsRu.classList.add('shiftCaps');

    if (this.code.includes('Digit')) {
      [lowerCaseEn.innerHTML, upperCaseEn.innerHTML] = this.en;
      [capsEn.innerHTML, shiftCapsEn.innerHTML] = this.en;
      makeHiddenEn();
      appendEn(spanEn);
      [lowerCaseRu.innerHTML, upperCaseRu.innerHTML] = this.ru;
      [capsRu.innerHTML, shiftCapsRu.innerHTML] = this.ru;
      makeHiddenRu();
      appendRu(spanRu);
    } else if (this.code.includes('Key')) {
      [lowerCaseEn.innerHTML] = this.en;
      [shiftCapsEn.innerHTML] = this.en;
      upperCaseEn.innerHTML = this.en[0].toUpperCase();
      capsEn.innerHTML = this.en[0].toUpperCase();
      makeHiddenEn();
      appendEn(spanEn);
      [lowerCaseRu.innerHTML] = this.ru;
      [shiftCapsRu.innerHTML] = this.ru;
      upperCaseRu.innerHTML = this.ru[0].toUpperCase();
      capsRu.innerHTML = this.ru[0].toUpperCase();
      makeHiddenRu();
      appendRu(spanRu);
    } else if (this.code === 'Backspace' || this.code === 'Tab' || this.code === 'Delete' || this.code === 'CapsLock' || this.code === 'Enter' || this.code === 'Shift' || this.code === 'ShiftLeft' || this.code === 'ArrowUp' || this.code === 'ShiftRight' || this.code === 'ControlLeft' || this.code === 'ShiftRight' || this.code === 'MetaLeft' || this.code === 'AltLeft' || this.code === 'AltRight' || this.code === 'ArrowLeft' || this.code === 'ArrowDown' || this.code === 'ArrowRight' || this.code === 'ControlRight') {
      [lowerCaseEn.innerHTML] = this.en;
      [upperCaseEn.innerHTML] = this.en;
      [capsEn.innerHTML] = this.en;
      [shiftCapsEn.innerHTML] = this.en;
      makeHiddenEn();
      appendEn(spanEn);
      [lowerCaseRu.innerHTML] = this.ru;
      [upperCaseRu.innerHTML] = this.ru;
      [capsRu.innerHTML] = this.ru;
      [shiftCapsRu.innerHTML] = this.ru;
      makeHiddenRu();
      appendRu(spanRu);
      div.classList.add('special');
    } else {
      [lowerCaseEn.innerHTML, upperCaseEn.innerHTML] = this.en;
      [capsEn.innerHTML, shiftCapsEn.innerHTML] = this.en;
      makeHiddenEn();
      appendEn(spanEn);
      [lowerCaseRu.innerHTML, upperCaseRu.innerHTML] = this.ru;
      [shiftCapsRu.innerHTML] = this.ru;
      const helloLint = this.ru[2];
      capsRu.innerHTML = helloLint;
      makeHiddenRu();
      appendRu(spanRu);
    }
  }
}

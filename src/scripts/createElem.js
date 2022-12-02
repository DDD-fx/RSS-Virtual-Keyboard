export default class CreateNewElem {
  constructor(type, attributes) {
    this.elem = document.createElement(`${type}`);
    for (let i = 0; i < Object.entries(attributes).length; i += 1) {
      if (Object.entries(attributes)[i][0] === 'innerHTML') {
        [this.elem.innerHTML] = [Object.entries(attributes)[i][1]];
      } else {
        this.elem.setAttribute(Object.entries(attributes)[i][0], Object.entries(attributes)[i][1]);
      }
    }
  }

  append() {
    const form = document.getElementsByTagName('form')[0];
    form.append(this.elem);
  }
}

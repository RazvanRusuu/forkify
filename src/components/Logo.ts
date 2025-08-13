export class Logo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.querySelector('#logo') as HTMLTemplateElement;
    this.classList.add('header__logo');
    this.append(template.content.cloneNode(true));
  }
}

customElements.define('app-logo', Logo);

export class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.#render();
  }

  #render() {
    this.classList.add(...['header', 'grid']);
    const logo = document.createElement('app-logo');
    const form = document.createElement('form-app');

    this.insertAdjacentElement('afterbegin', form);
    this.insertAdjacentElement('afterbegin', logo);
  }
}

customElements.define('header-component', HeaderComponent);

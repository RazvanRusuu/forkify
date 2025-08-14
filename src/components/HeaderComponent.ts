export class AppHeader extends HTMLElement {
  #container: HTMLElement | null;
  constructor() {
    super();

    this.#container = document.querySelector('#root');
  }

  connectedCallback() {
    this.#render();
  }

  #render() {
    const template = document.getElementById('header') as HTMLTemplateElement;
    const content = template.content.cloneNode(true);

    this.classList.add('header', 'grid');
    const logo = document.createElement('app-logo');
    logo.slot = 'logo';
    const form = document.createElement('form-app');
    form.slot = 'form';

    this.appendChild(logo);
    this.appendChild(form);
    this.appendChild(content);

    // this.#container?.appendChild(this);
  }
}

customElements.define('app-header', AppHeader);

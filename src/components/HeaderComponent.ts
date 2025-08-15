export class AppHeader extends HTMLElement {
  #container: HTMLElement | null;
  #root: ShadowRoot;
  constructor() {
    super();

    this.#container = document.querySelector('#root');
    this.#root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
  }

  #render() {
    this.classList.add('header', 'grid');
    const logo = document.createElement('app-logo');
    const form = document.createElement('form-app');
    const nav = document.createElement('app-nav');

    this.#root.appendChild(logo);
    this.#root.appendChild(form);
    this.#root.appendChild(nav);

    // this.#container?.appendChild(this);
  }
}

customElements.define('app-header', AppHeader);

class AppNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('render');
    const template = document.getElementById('nav') as HTMLTemplateElement;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-nav', AppNav);

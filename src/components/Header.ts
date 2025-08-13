class Header extends HTMLElement {
  #root: HTMLCollection;
  constructor() {
    super();
    #root = this.attachShadow({ mode: open });
  }
  connectedCallback() {
    console.log('connected');
    this.textContent = 'Hello';
  }
  adoptedCallback() {
    console.log('connected');
  }
  attributeChangedCallback() {
    console.log('connected');
  }
  disconnectedCallback() {
    console.log('connected');
  }

  #render() {}
}

customElements.define('header-el', Header);

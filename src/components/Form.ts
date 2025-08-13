export class FormComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById(
      'header-form'
    ) as HTMLTemplateElement;

    const content = template.content.cloneNode(true);

    this.appendChild(content);

    this.querySelector('button')?.addEventListener('click', e => {
      e.preventDefault();
      console.log(e.target);
    });
  }
}

customElements.define('form-app', FormComponent);

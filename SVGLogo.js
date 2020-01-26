export default class SVGLogo extends HTMLDivElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.render();
  }
  
  render() {
    this.shadowRoot.innerHTML = this.template();
  }
  
  template() {
    return `
      <slot></slot>
      ${this.style()}
    `;
  }
  
  style() {
    return `
      <style>
        :host {
          display: inline-grid;
          grid-auto-flow: column;
          grid-template-columns: 60px 150px;
          grid-template-rows: 60px;
          align-items: center;
          justify-items: center;
        }
        ::slotted(.mark) {
          width: 50px;
          height: 50px;
        }
        ::slotted(.type) {
          width: 150px;
          height: 50px;
          margin-top: 3px;
        }
      </style>
    `;
  }
};

//customElements.define('svg-logo', SVGLogo, { extends: "div"});

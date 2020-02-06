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
          display: grid;
          row-gap: 0.062em;
          column-gap: 0.062em;
          align-items: center;
          justify-items: center;
          width: max-content!important;
          height: max-content!important;
        }
        :host(.rows) {
          grid-auto-flow: row;
          grid-template-columns: max-content;
          grid-template-rows: max-content max-content;
        }
        :host(.columns) {
          grid-auto-flow: column;
          grid-template-columns: max-content max-content;
          grid-template-rows: max-content;
        }
        ::slotted(.mark) {
          font-size: 0.62em;
        }
        ::slotted(.type) {
          font-size: 1em;
        }
        :host(.rows) ::slotted(.mark) {
          font-size: 1em;
        }
        :host(.columns) ::slotted(.mark) {
          font-size: 0.25em;
        }
        :host(.columns) ::slotted(.type) {
          margin-top: 0.0062em;
        }
        
      </style>
    `;
  }
  
};

//customElements.define('svg-logo', SVGLogo, { extends: "div"});

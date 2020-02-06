export default class SVGLogos extends HTMLDivElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.render();
  }
  
  render() {
    this.shadowRoot.innerHTML = this.template();
  }
  
  get rows() {
    return this.hasAttribute('rows') ? 'rows' : '';
  }
  
  get columns() {
    return this.hasAttribute('columns') ? 'columns' : '';
  }
  
  template() {
    return `
      <div is='svg-logo' class=${this.rows + this.columns}>${this.logo()}</div>
      ${this.style()}
    `;
  }
  
  logo() {
    return ``;
  }
  
  style() {
    return `
      <style>
        :host {
          display: grid;
          grid-template: max-content / max-content;
          width: max-content!important;
          height: max-content!important;
        }
      </style>
    `;
  }
};

//customElements.define('svg-logos', SVGLogos, { extends: "div"});

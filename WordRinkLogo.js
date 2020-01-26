export default class WordRinkLogo extends HTMLDivElement {
  constructor() {
    super();
    this.render();
  }
  
  render() {
    this.innerHTML = this.template();
  }
  
  template() {
    return `
      <div is='svg-logo'>
        <div class='mark' is='word-rink-logomark'></div>
        <div class='type' is='word-rink-logotype'></div>
      </div>
    `;
  }
};

//customElements.define('wordrink-logo', WordRinkLogo, { extends: "div"});

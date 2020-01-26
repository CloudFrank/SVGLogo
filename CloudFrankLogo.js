export default class CloudFrankLogo extends HTMLDivElement {
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
        <div class='mark' is='cloud-frank-logomark'></div>
        <div class='type' is='cloud-frank-logotype'></div>
      </div>
    `;
  }
};

//customElements.define('cloudfrank-logo', CloudFrankLogo, { extends: "div"});

import SVGLogos from 'https://cloudfrank.github.io/SVGLogo/SVGLogos.js';

export default class CloudfrankLogo extends SVGLogos {
  constructor() {
    super();
  }
  
  logo() {
    return `
      <div class='mark' is='cloudfrank-logomark'></div>
      <div class='type' is='cloudfrank-logotype'></div>
    `;
  }
};

//customElements.define('cloudfrank-logo', CloudfrankLogo, { extends: "div"});

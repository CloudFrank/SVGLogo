import SVGLogos from 'https://cloudfrank.github.io/SVGLogo/SVGLogos.js';

export default class WordrinkLogo extends SVGLogos {
  constructor() {
    super();
  }
  
  logo() {
    return `
      <div class='mark' is='wordrink-logomark'></div>
      <div class='type' is='wordrink-logotype'></div>
    `;
  }
};

//customElements.define('wordrink-logo', WordrinkLogo, { extends: "div"});

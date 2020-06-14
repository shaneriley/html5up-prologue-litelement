import { html, LitElement } from 'lit-element';

export default class extends LitElement {
  static get properties() {
    return {
      copy: String,
      href: String,
      image: Object,
      title: String,
    };
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="about" class="three">
        <div class="container">
          <header>
            <h2>${this.title}</h2>
          </header>
          <a href="${this.href}" class="image featured"><img src="${this.image.src}" alt="${this.image.alt}" /></a>
          <p>${this.copy}</p>
        </div>
      </section>
    `;
  }
}

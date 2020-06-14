import { html, LitElement } from 'lit-element';

export default class extends LitElement {
  static get properties() {
    return {
      button: Object,
      copy: String,
      title: String,
    };
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    super.firstUpdated();
    $(this.querySelector('.scrolly')).scrolly();
  }

  render() {
    return html`
      <section id="top" class="one dark cover">
        <div class="container">

          <header>
            <h2 class="alt">${this.title}</h2>
            <p>${this.copy}</p>
          </header>

          <footer>
            <a href="${this.button.href}" class="button scrolly">${this.button.text}</a>
          </footer>

        </div>
      </section>
    `;
  }
}

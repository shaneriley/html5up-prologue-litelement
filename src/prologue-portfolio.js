import { html, LitElement } from 'lit-element';

/**
 * Item schema:
 *
 * href: String,
 * title: String,
 * image: {
 *  src: String,
 *  alt: String,
 * }
 */
export default class extends LitElement {
  static get properties() {
    return {
      copy: String,
      items: Array,
      title: String,
    }
  }

  createRenderRoot() {
    return this;
  }

  get itemColumns() {
    const columns = this.items.reduce((a, b) => {
      const last = a[a.length - 1];
      if (last.length > 1) { a.push([b]); }
      else { last.push(b); }
      return a;
    }, [[]]);
    return html`
      ${columns.map((col) => this.columnTemplate(col))}
    `;
  }

  columnTemplate(col) {
    return html`
      <div class="col-4 col-12-mobile">
        ${col.map((item) => this.itemTemplate(item))}
      </div>
    `;
  }

  itemTemplate(item) {
    return html`
      <article class="item">
        <a href="${item.href}" class="image fit"><img src="${item.image.src}" alt="${item.image.alt}" /></a>
        <header>
          <h3>${item.title}</h3>
        </header>
      </article>
    `;
  }

  render() {
    return html`
      <section id="portfolio" class="two">
        <div class="container">

          <header>
            <h2>${this.title}</h2>
          </header>

          <p>${this.copy}</p>

          <div class="row">
            ${this.itemColumns}
          </div>

        </div>
      </section>
    `;
  }
}

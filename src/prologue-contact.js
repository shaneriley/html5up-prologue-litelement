import { html, LitElement } from 'lit-element';

export default class extends LitElement {
  static get properties() {
    return {
      contactHandler: Object,
      copy: String,
      title: String,
      isIncomplete: Boolean,
    };
  }

  createRenderRoot() {
    return this;
  }

  get contactInfo() {
    return {
      name: this.querySelector('[name="name"]').value,
      email: this.querySelector('[name="email"]').value,
      message: this.querySelector('[name="message"]').value,
    }
  }

  onSubmit(e) {
    const contactInfo = this.contactInfo;
    e.preventDefault();
    for (let field in contactInfo) {
      if (!contactInfo[field]) {
        this.isIncomplete = true;
        return;
      }
    }
    this.isIncomplete = false;
    this.contactHandler.submitContact(contactInfo);
  }

  get errorMessage() {
    return this.isIncomplete ? html`<p>Please fill in all fields</p>` : html``;
  }

  render() {
    return html`
      <section id="contact" class="four">
        <div class="container">

          <header>
            <h2>${this.title}</h2>
          </header>

          <p>${this.copy}</p>

          <form method="post" action="#" @submit=${this.onSubmit}>
            ${this.errorMessage}
            <div class="row">
              <div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
              <div class="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
              <div class="col-12">
                <textarea name="message" placeholder="Message"></textarea>
              </div>
              <div class="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>

        </div>
      </section>
    `;
  }
}

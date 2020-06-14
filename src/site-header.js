import { html, LitElement } from 'lit-element';

class NavLink extends LitElement {
  static get properties() {
    return {
      active: Boolean,
      href: String,
      icon: String,
      text: String,
    };
  }

  constructor() {
    super();

    this.active = false;
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    super.firstUpdated();
    $(this.querySelector('a')).scrolly();
  }

  handleClick(e) {
    const target = e.currentTarget.getAttribute('href');
    if (target.charAt(0) != '#') {
      return;
    }

    e.preventDefault();

    this.dispatchEvent(new CustomEvent('setScrollPoint', {
      detail: {
        target
      }
    }));
  }

  get cssClass() {
    return `scrolly${this.active ? ' active active-locked' : ''}`;
  }

  render() {
    return html`
      <a
        href="${this.href}"
        class="${this.cssClass}"
        id="top-link"
        @click=${this.handleClick}
      >
        <span class="icon solid ${this.icon}">${this.text}</span>
      </a>
    `;
  }
}

customElements.define('nav-link', NavLink);

export default class extends LitElement {
  static get properties() {
    return {
      activeNavItem: String,
      avatarSrc: String,
      name: String,
      navItems: Array,
      socialItems: Array,
      title: String,
    };
  }

  constructor() {
    super();

    this.activeNavItem = '#top';
    this.navItems = [];
    this.socialItems = [];
  }

  createRenderRoot() {
    return this;
  }

  setScrollPoint({ detail }) {
    this.activeNavItem = detail.target;
  }

  navItem(item) {
    return html`
      <li>
        <nav-link
          .href=${item.href}
          .icon=${item.icon}
          .text=${item.text}
          .active=${item.href === this.activeNavItem}
          @setScrollPoint=${this.setScrollPoint}
        ></nav-link>
      </li>
    `;
  }

  socialItem(item) {
    return html`
      <li>
        <a href="${item.href}" class="icon brands ${item.icon}" title="${item.text}">
          <span class="label">${item.text}</span>
        </a>
      </li>
    `;
  }

  render() {
    return html`
      <div id="header">
        <div class="top">
          <div id="logo">
            <span class="image avatar48"><img src="${this.avatarSrc}" alt="" /></span>
            <h1 id="title">${this.name}</h1>
            <p>${this.title}</p>
          </div>

          <nav id="nav">
            <ul>
              ${this.navItems.map(this.navItem.bind(this))}
            </ul>
          </nav>
        </div>

        <div class="bottom">
          <ul class="icons">
            ${this.socialItems.map(this.socialItem.bind(this))}
          </ul>
        </div>
      </div>
    `;
  }
}

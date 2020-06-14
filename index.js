import { html } from 'lit-element';
import SiteHeader from './src/site-header.js';
import PrologueIntro from './src/prologue-intro.js';
import ProloguePortfolio from './src/prologue-portfolio.js';
import PrologueAbout from './src/prologue-about.js';
import PrologueContact from './src/prologue-contact.js';
import pageData from './src/page-data.js';

customElements.define('site-header', SiteHeader);
customElements.define('prologue-intro', PrologueIntro);
customElements.define('prologue-portfolio', ProloguePortfolio);
customElements.define('prologue-about', PrologueAbout);
customElements.define('prologue-contact', PrologueContact);

{
  const elements = {
    'site-header': pageData.siteHeader,
    'prologue-intro': pageData.intro,
    'prologue-portfolio': pageData.portfolio,
    'prologue-about': pageData.about,
    'prologue-contact': pageData.contact,
  };

  for (let selector in elements) {
    Object.assign(document.querySelector(selector), elements[selector]);
  }
}

import SiteHeader from './src/site-header.js';

customElements.define('site-header', SiteHeader);

{
  const siteHeader = document.querySelector('site-header');

  Object.assign(siteHeader, {
    name: 'Shane Riley',
    title: 'Software Architect',
    avatarSrc: 'images/avatar.jpg',
    navItems: [{
      text: 'Intro',
      href: '#top',
      icon: 'fa-home'
    }, {
      text: 'Portfolio',
      href: '#portfolio',
      icon: 'fa-th'
    }, {
      text: 'About Me',
      href: '#about',
      icon: 'fa-user'
    }, {
      text: 'Contact',
      href: '#contact',
      icon: 'fa-envelope'
    }],
    socialItems: [{
      text: 'Twitter',
      href: '#',
      icon: 'fa-twitter'
    }, {
      text: 'Facebook',
      href: '#',
      icon: 'fa-facebook-f'
    }, {
      text: 'GitHub',
      href: '#',
      icon: 'fa-github'
    }, {
      text: 'Dribbble',
      href: '#',
      icon: 'fa-dribbble'
    }, {
      text: 'Email',
      href: '#',
      icon: 'fa-envelope'
    }]
  });
}

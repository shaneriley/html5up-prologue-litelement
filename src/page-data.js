import { html } from 'lit-element';

export default {
  siteHeader: {
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
  },
  intro: {
    title: html`Hi! I'm <strong>Prologue</strong>, a <a href="http://html5up.net/license">free</a> responsive<br />site template designed by <a href="http://html5up.net">HTML5 UP</a>.`,
    copy: html`Ligula scelerisque justo sem accumsan diam quis<br />vitae natoque dictum sollicitudin elementum.`,
    button: {
      href: '#portfolio',
      text: 'Magna Aliquam',
    }
  },
  portfolio: {
    title: 'Portfolio',
    copy: `Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis
           egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus.
           Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis
           fusce hendrerit lacus ridiculus.`,
    items: [{
      href: '#',
      title: 'Ipsum Feugiat',
      image: {
        src: 'images/pic02.jpg',
        alt: ''
      }
    }, {
      href: '#',
      title: 'Rhoncus Semper',
      image: {
        src: 'images/pic03.jpg',
        alt: ''
      }
    }, {
      href: '#',
      title: 'Magna Nullam',
      image: {
        src: 'images/pic04.jpg',
        alt: ''
      }
    }, {
      href: '#',
      title: 'Natoque Vitae',
      image: {
        src: 'images/pic05.jpg',
        alt: ''
      }
    }, {
      href: '#',
      title: 'Dolor Penatibus',
      image: {
        src: 'images/pic06.jpg',
        alt: ''
      }
    }, {
      href: '#',
      title: 'Orci Convallis',
      image: {
        src: 'images/pic07.jpg',
        alt: ''
      }
    }]
  },
  about: {
    title: 'About Me',
    href: '#',
    image: {
      src: 'images/pic08.jpg',
      alt: ''
    },
    copy: `Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus
           ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae
           laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem
           parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper
           dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec
           ornare iaculis.`
  },
  contact: {
    title: 'Contact',
    copy: `Elementum sem parturient nulla quam placerat viverra
           mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia
           donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc
           orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.`,
    contactHandler: {
      submitContact(input) {
        console.log(input);
      }
    }
  }
}

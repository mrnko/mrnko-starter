import { gsap, Power2 } from 'gsap';

export function sidemenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const header = document.querySelector('.header');
  const sidemenu = document.querySelector('.sidemenu');
  const sidemenuNavigationItems = document.querySelectorAll('.sidemenu__navigation-item');

  let tlMenuToggle = gsap.timeline();

  tlMenuToggle.to('.menu-toggle__line--01', {
    attr: { d: 'M8,2 L2,8' },
    x: 1,
    ease: Power2.easeInOut,
    duration: 0.5
  }, 'start');

  tlMenuToggle.to('.menu-toggle__line--02', {
    autoAlpha: 0
  }, 'start');

  tlMenuToggle.to('.menu-toggle__line--03', {
    attr: { d: 'M8,8 L2,2' },
    x: 1,
    ease: Power2.easeInOut,
    duration: 0.5
  }, 'start');

  tlMenuToggle.reverse();

  let tlSidemenu = gsap.timeline({
    paused: true
  });

  tlSidemenu.to('.sidemenu', {
    display: 'block',
    opacity: 1,
    ease: 'Expo.easeInOut',
    duration: 0
  });

  tlSidemenu.to('.sidemenu__inner', {
    opacity: 1,
    duration: 0.3
  });

  tlSidemenu.reverse();

  menuToggle.addEventListener('click', () => {
    tlMenuToggle.reversed(!tlMenuToggle.reversed());
    tlSidemenu.reversed(!tlSidemenu.reversed());

    sidemenu.classList.toggle('sidemenu--open');
    menuToggle.classList.toggle('menu-toggle--active');
    header.classList.toggle('header--fixed');

    if (!tlSidemenu.reversed()) {
      document.querySelector('html').style.overflowY = 'hidden';
    }
    else {
      document.querySelector('html').style.overflowY = 'auto';
    }
  });

  for (let item of sidemenuNavigationItems) {
    item.addEventListener('click', function () {
      tlSidemenu.reverse();
      tlMenuToggle.reverse();
      
      sidemenu.classList.remove('sidemenu--open');
      menuToggle.classList.remove('menu-toggle--active');
      header.classList.remove('header--fixed');

      document.querySelector('html').style.overflowY = 'auto';
    });
  }
}
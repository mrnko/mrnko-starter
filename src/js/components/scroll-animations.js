import ScrollReveal from 'scrollreveal';

(function () {
  function makeScrollAnimations() {
    const sr = ScrollReveal({
      reset: false,
      distance: '70px',
      duration: 700,
      easing: 'ease',
      delay: 0,
      mobile: false
    });

    sr.reveal('.hero__title, .hero__subtitle, .hero__info, .hero__social-list-item, .hero__stand-with-ukraine, .navigation__list-item', { origin: 'bottom', interval: 120 });
    sr.reveal('.demo__title, .demo__list-item', { origin: 'bottom', interval: 120 });
    sr.reveal('.form__row', { origin: 'bottom', interval: 120 });
    sr.reveal('.table', { origin: 'bottom' });
    sr.reveal('.demo__swiper', { origin: 'bottom' });
    sr.reveal('.footer', { origin: 'top' });
  }

  setTimeout(() => {
    makeScrollAnimations();
  }, 1000);
})();
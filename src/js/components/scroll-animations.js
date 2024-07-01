import ScrollReveal from 'scrollreveal';

(function () {
  function makeScrollAnimations() {
    const sr = ScrollReveal({
      reset: false,
      distance: '60px',
      duration: 500,
      easing: 'ease',
      delay: 0,
      mobile: false
    });

    sr.reveal('.navigation__item, .hero__title, .hero__text, .hero__author-row, .hero .social__item', { origin: 'bottom', interval: 80 });
    sr.reveal('.demo__title, .demo__list-item', { origin: 'bottom', interval: 80 });
    sr.reveal('.form__row', { origin: 'bottom', interval: 80 });
    sr.reveal('.table', { origin: 'bottom' });
    sr.reveal('.demo__swiper', { origin: 'bottom' });
    sr.reveal('.footer', { origin: 'top' });
  }

  setTimeout(() => {
    makeScrollAnimations();
  }, 1000);
})();
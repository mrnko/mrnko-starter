import Swiper from 'swiper/bundle';

(function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    initialSlide: 0,
    speed: 1500,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 3500
    },
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
})();
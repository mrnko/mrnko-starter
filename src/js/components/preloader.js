import vars from '../_vars';
import { disableScroll, enableScroll } from '../functions/scroll-behavior';

(function () {
  const preloader = vars.documentEl.getElementById('preloader');

  if (!preloader) {
    return false;
  }

  const preloaderInvisibleClass = 'preloader--invisible';
  const preloaderHiddenClass = 'preloader--hidden';
  const preloaderInvisibleDelay = 1000;
  const preloaderHiddenDelay = 500;

  disableScroll();

  vars.windowEl.onload = function () {
    setTimeout(function () {
      preloader.classList.add(preloaderInvisibleClass);

      enableScroll();

      setTimeout(function () {
        preloader.classList.add(preloaderHiddenClass);
      }, preloaderHiddenDelay);
    }, preloaderInvisibleDelay);
  }
})();
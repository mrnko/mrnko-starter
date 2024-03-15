import '../scss/style.scss';
import gsap from 'gsap';
import Swiper from 'swiper';
import MicroModal from 'micromodal';
import ScrollReveal from 'scrollreveal';
import Inputmask from 'inputmask';
import tippy from 'tippy.js';
import { slider } from './components/slider';
import { modal } from './components/modal';
import { scrollAnimations } from './components/scroll-animations';
import { preloader } from './components/preloader';
import { scrollUp } from './components/scroll-up';
import { flowEffect } from './components/flow-effect';
import { customCursor } from './components/custom-cursor';
import { scrollTo } from './components/scroll-to';
import { sidemenu } from './components/sidemenu';
import { makeInputMask } from './components/input-mask';
import { tooltip } from './components/tooltip';
import { mouseParallax } from './components/mouseParallax';
import { cookiesNotice } from './components/cookiesNotice';

preloader();
customCursor();
scrollTo();
makeInputMask();
flowEffect();
modal();
sidemenu();
tooltip();
scrollAnimations();
slider();
mouseParallax();
cookiesNotice();

window.addEventListener('scroll', () => {
  scrollUp(window.scrollY);
});
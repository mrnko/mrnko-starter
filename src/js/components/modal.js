import MicroModal from 'micromodal';

(function () {
  const modal = MicroModal.init({
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    openClass: 'modal__slide--open',
    disableScroll: true,
    disableFocus: false,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
  })
})();
import tippy from 'tippy.js';

(function () {
  tippy('.tooltip', {
    placement: 'bottom',
    content(reference) {
      let title = reference.getAttribute('title');
      reference.removeAttribute('title');
      return title;
    }
  });
})();
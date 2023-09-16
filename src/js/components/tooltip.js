import tippy from 'tippy.js';

export function tooltip() {
  tippy('.tooltip', {
    placement: 'bottom',
    content(reference) {
      let title = reference.getAttribute('title');
      reference.removeAttribute('title');
      return title;
    }
  });
}
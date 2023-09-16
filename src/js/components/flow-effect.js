export function flowEffect() {
  let flowEffectElements = document.querySelectorAll('.flow-effect');

  for (let flowEffectElement of flowEffectElements) {
    flowEffectElement.addEventListener('mousemove', function (event) {
      const x = event.pageX - this.offsetLeft;
      const y = event.pageY - this.offsetTop;

      this.style.setProperty('--x', x + 'px');
      this.style.setProperty('--y', y + 'px');
    });
  }
}
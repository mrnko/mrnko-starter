export function mouseParallax() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('mousemove', parallax);
  }

  function parallax(event) {
    this.querySelectorAll("[data-parallax]").forEach((shift) => {
      const position = shift.dataset.parallax;
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
}
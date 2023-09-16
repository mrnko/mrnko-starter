export function scrollUp() {
  let scrollUpButton = document.querySelector('.scroll-up')
  let scrollUpToElement = document.querySelector('.hero')

  window.addEventListener("scroll", (event) => {
    let posTop = window.scrollY

    posTop > 200 ? scrollUpButton.classList.add('scroll-up--active') : scrollUpButton.classList.remove('scroll-up--active')
  })

  scrollUpButton.addEventListener('click', function () {
    scrollUpToElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}
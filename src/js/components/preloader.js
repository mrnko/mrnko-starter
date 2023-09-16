export function preloader() {
  window.onload = function () {
    let preloader = document.querySelector('.preloader')

    setTimeout(function () {

      preloader.classList.add('preloader--invisible')

      document.querySelector('html').style.overflowY = 'auto'

      setTimeout(function () {
        preloader.classList.add('preloader--hidden')
      }, 500)

    }, 1000)
  }
}
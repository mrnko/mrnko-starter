export function sidemenu() {
  let sidemenuToggle = document.querySelector('.sidemenu__toggle'),
    sidemenuCheckbox = document.querySelector('.sidemenu__checkbox'),
    sidemenuNavigationItemLinks = document.querySelectorAll('.sidemenu__navigation-item-link');

  function openSidemenu() {
    document.querySelector('html').style.overflowY = 'hidden';
  }

  function closeSidemenu() {
    document.querySelector('html').style.overflowY = 'auto';
  }

  sidemenuToggle.addEventListener('click', () => {
    sidemenuCheckbox.checked == true ? closeSidemenu() : openSidemenu();
  });

  for (let sidemenuNavigationItemLink of sidemenuNavigationItemLinks) {
    sidemenuNavigationItemLink.addEventListener('click', () => {
      sidemenuCheckbox.checked = false;
      closeSidemenu();
    });
  }
}
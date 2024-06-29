import gsap from 'gsap';

(function () {
  document.body.innerHTML += '<div class="cursor"></div>';
  document.body.innerHTML += '<div class="cursor-aura"></div>';

  const cursor = document.querySelector('.cursor'),
    follower = document.querySelector('.cursor-aura'),
    links = document.getElementsByTagName('a'),
    buttons = document.getElementsByTagName('button'),
    cursorElements = document.querySelectorAll('.make-cursor-active');

  let mouseX = 0,
    mouseY = 0,
    posX = 0,
    posY = 0;

  function mouseCoords(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
  }

  gsap.to({}, .01, {
    repeat: -1,
    onRepeat: () => {
      posX += (mouseX - posX) / 5
      posY += (mouseY - posY) / 5
      gsap.set(cursor, {
        css: {
          left: mouseX - 7,
          top: mouseY - 7
        }
      })
      gsap.set(follower, {
        css: {
          left: posX - 13,
          top: posY - 13
        }
      })
    }
  });

  document.addEventListener('mousemove', event => {
    mouseCoords(event)
    cursor.classList.remove('cursor--hidden');
    follower.classList.remove('cursor--hidden');
  });

  document.addEventListener('mouseout', event => {
    cursor.classList.add('cursor--hidden');
    follower.classList.add('cursor--hidden');
  });

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
      cursor.classList.add('cursor--active');
      follower.classList.add('cursor--active');
    })

    links[i].addEventListener('mouseout', () => {
      cursor.classList.remove('cursor--active');
      follower.classList.remove('cursor--active');
    })
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', () => {
      cursor.classList.add('cursor--active');
      follower.classList.add('cursor--active');
    })

    buttons[i].addEventListener('mouseout', () => {
      cursor.classList.remove('cursor--active');
      follower.classList.remove('cursor--active');
    })
  }

  for (let i = 0; i < cursorElements.length; i++) {
    cursorElements[i].addEventListener('mouseover', () => {
      cursor.classList.add('cursor--active');
      follower.classList.add('cursor--active');
    })

    cursorElements[i].addEventListener('mouseout', () => {
      cursor.classList.remove('cursor--active');
      follower.classList.remove('cursor--active');
    })
  }
})();
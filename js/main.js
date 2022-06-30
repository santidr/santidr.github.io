document.addEventListener('DOMContentLoaded', () => {
  // Animate on scroll library initialization
  AOS.init({
    duration: 2000
  });

  // Switch dark mode
  const btnSwitch = document.querySelector("#switch")
  const iconTheme = document.querySelector('i.fa-solid')

  if (localStorage.getItem('dark-mode')) {
    document.body.classList.add('dark')
    iconTheme.classList.toggle('fa-sun')
    iconTheme.classList.toggle('fa-moon')
  }

  btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')

    iconTheme.classList.toggle('fa-sun')
    iconTheme.classList.toggle('fa-moon')

    if (localStorage.getItem('dark-mode')) {
      localStorage.removeItem('dark-mode')
    } else {
      localStorage.setItem('dark-mode', 'dark')
    }
  })

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

      // Close navbar-menu when clicking link on Mobile
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          $target.classList.remove('is-active')
          el.classList.remove('is-active');
        })
      })

    });
  });

  // ScrollSpy
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.navbar-item')

  document.addEventListener('scroll', () => {
    sections.forEach(sec => {
      let top = window.scrollY
      let offset = sec.offsetTop - 42
      let height = sec.offsetHeight
      let id = sec.getAttribute('id')

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active')
          if (id !== 'skills') {
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
          }
        })
      }
    })
  })
});
const menuToggle = document.querySelector('.menu-toggle');
  const menuMobile = document.querySelector('.menu-mobile');
  menuToggle.addEventListener('click', function() {
    menuMobile.classList.toggle('active');
  });
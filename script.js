// Menú hamburguesa para celular/tablet
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cierra el menú cuando se hace click en un link (mejor experiencia en celular)
const links = navLinks.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

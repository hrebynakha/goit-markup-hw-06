const mobileMenuRefs = {
  mobileMenu: document.querySelector('.mobile-menu'),
  openMenuBtn: document.querySelector('.open-menu'),
  closeMenuBtn: document.querySelector('.mobile-menu-close-btn'),
};

const toggleMenu = () => {
  const isMenuOpen =
    mobileMenuRefs.openMenuBtn.getAttribute('aria-expanded') === 'true' ||
    false;

  mobileMenuRefs.mobileMenu.classList.toggle('is-open');
  mobileMenuRefs.mobileMenu.setAttribute('aria-hidden', isMenuOpen);
  mobileMenuRefs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
};

mobileMenuRefs.openMenuBtn.addEventListener('click', toggleMenu);
mobileMenuRefs.closeMenuBtn.addEventListener('click', toggleMenu);
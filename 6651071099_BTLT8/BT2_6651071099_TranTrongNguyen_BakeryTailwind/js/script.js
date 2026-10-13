const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

function setMobileMenu(isOpen) {
    mobileMenu.classList.toggle('hidden', !isOpen);
    mobileMenu.classList.toggle('flex', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
    menuIcon.innerHTML = isOpen
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 6l12 12M18 6L6 18"></path>'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 6h18M3 12h18M3 18h18"></path>';
}

menuButton.addEventListener('click', () => {
    setMobileMenu(mobileMenu.classList.contains('hidden'));
});

document.querySelectorAll('.mobile-menu-link').forEach((link) => {
    link.addEventListener('click', () => setMobileMenu(false));
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navigation');

  nav.addEventListener('click', (e) => {
    const selectedNavItem = e.target.parentElement;

    selectedNavItem.setAttribute(
      'aria-expanded',
      selectedNavItem.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
    );
  });
});

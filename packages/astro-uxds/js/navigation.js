document.addEventListener('DOMContentLoaded', () => {
  const storage = typeof Storage !== undefined;
  const nav = document.getElementById('navigation');

  nav.scrollTop = (storage && sessionStorage.getItem('navScrollPos')) || 0;

  // Listen for clicks isolated to the navigation element
  nav.addEventListener('click', (e) => {
    // reference clicked element
    const selectedNavItem = e.target.parentElement;

    console.log(storage);

    // toggle expanded/collapsed aria state to hide show element
    if (selectedNavItem.getAttribute('aria-expanded')) {
      selectedNavItem.setAttribute(
        'aria-expanded',
        selectedNavItem.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
      );
    } else {
      if (storage) {
        sessionStorage.setItem('navScrollPos', nav.scrollTop);
      }
    }
  });
});

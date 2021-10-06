document.addEventListener("DOMContentLoaded", () => {
  const storage = typeof Storage !== undefined;
  const nav = document.getElementById("navigation");

  // nav.scrollTop = (storage && sessionStorage.getItem('navScrollPos')) || 0;

  // Listen for clicks isolated to the navigation element
  nav.addEventListener("click", (e) => {
    // reference clicked element
    const clickedNavItem = e.target.parentElement;
    const selectedNavItem = nav.querySelector('[aria-selected="true"]');
    const openedNavItems = nav.querySelectorAll('[aria-expanded="true"]');

    selectedNavItem ? selectedNavItem.setAttribute("aria-selected", "") : "";

    // make the tree behave like an accordion to mimic the existing site
    // TODO: consider making this behave like a tree element
    if (clickedNavItem.getAttribute("aria-expanded")) {
      openedNavItems.forEach((item) => {
        if (item !== clickedNavItem) {
          item.setAttribute("aria-expanded", false);
        }
      });

      // toggle the clicked on item expanded or callapsed, based on current state
      clickedNavItem.setAttribute(
        "aria-expanded",
        clickedNavItem.getAttribute("aria-expanded") === "false"
          ? "true"
          : "false"
      );
    } else {
      if (storage) {
        sessionStorage.setItem("navScrollPos", nav.scrollTop);
      }
    }
  });
});

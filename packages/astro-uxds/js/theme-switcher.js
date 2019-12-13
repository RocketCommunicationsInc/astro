document.addEventListener("DOMContentLoaded", () => {
  // get the theme toggle element
  const toggle = document.getElementById("theme-toggle");
  const sample = document.getElementById("live-sample");
  let theme = "dark-theme";

  toggle.addEventListener("change", e => {
    // remove theme
    document.body.classList.remove(theme);

    // define theme
    theme = e.target.checked ? "dark-theme" : "light-theme";

    // set theme
    document.body.classList.add(theme);

    // production
    if (window.location.hostname === "localhost") {
      console.log("post messa");
      sample.contentWindow.postMessage(theme, "https://rocketcom.bitbucket.io");

      // dev
    } else {
      if (event.target.dataset.storybook) {
        sample.contentWindow.postMessage(
          theme,
          "https://astro-components.netlify.com"
        );
      } else {
        sample.contentWindow.postMessage(
          theme,
          "https://rocketcom.bitbucket.io"
        );
      }
    }
  });
});

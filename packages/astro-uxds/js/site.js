  /*
   **
   **
   **
   */
  function toggleNavItem(event) {
    event.preventDefault();
  
    // if the clicked on target doesn't have any children then
    var current = event.target;
    var expanded = document.querySelectorAll('.expanded');
    var selected = document.querySelectorAll('.selected');
  
    // remove selected from any node with selected set
    if (selected.length) {
      selected[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
  
    // if this element doesn't have children then just navigate to that page
    if (current.nextElementSibling === null) {
      if (current.hasAttribute('download')) {
      } else {
        location.href = current.pathname;
      }
  
      // if this element does have children then expand the children while
      // collapsing any open subnav menus
    } else {
      current.nextElementSibling.classList.toggle('expanded');
  
      // is there at least one subnav currently expanded
      if (expanded.length) {
        expanded.forEach(function(element) {
          // make sure the expanded is not the current node
          if (element !== current.parentNode.parentNode) {
            element.classList.remove('expanded');
            // element.style.height = '0px';
          }
        });
      }
    }
  }
  
  /*
   **
   **
   **
   */  
  function playVideo(e) {
    document.getElementById('video').src += '&autoplay=1';
    document.getElementsByClassName('video-overlay')[0].style.display = 'none';
  }
  
  function setAll(toggles, state) {
    for (let toggle of toggles) {
      if (state === 'light') {
        toggle.checked = false;
      } else {
        toggle.checked = true;
      }
    }
  }
  /*
   **
   **
   **
   */
  function init() {
    // polyfill for forEach
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }
  
    // get all the navitems in the main mav
    [].forEach.call(document.getElementsByClassName('nav-item'), function(element) {
      if (!element.hasAttribute('download')) {
        element.addEventListener('click', toggleNavItem);
      }
    });
  
    // get the theme toggle element
    const themeSwitcher = Array.prototype.slice.call(document.getElementsByClassName('astro-toggle__input'));
    const samples = Array.prototype.slice.call(document.getElementsByClassName('live-sample'));
    let iframes = new Array();
  
    for (var iframe of samples) {
      iframes.push(iframe.getElementsByTagName('iframe')[0]);
    }
  
    // if it exists
    if (themeSwitcher.length) {
      for (let toggle of themeSwitcher) {
        // change event for dark/light theme
        toggle.addEventListener('change', (event) => {
          // ignore the event when triggered by setAll
          if (event.originalEvent !== undefined) return;
  
          // set the theme to use
          const message = event.target.checked ? 'dark-theme' : 'light-theme';
  
          document.body.classList.remove('light-theme', 'dark-theme');
          if (message === 'light-theme') {
            document.body.classList.add('light-theme');
            setAll(themeSwitcher, 'light');
          } else {
            document.body.classList.add('dark-theme');
            setAll(themeSwitcher, 'dark');
          }
  
          if (iframes.length) {
            iframes.forEach((iframe) => {
              // production
              if (window.location.hostname === 'localhost') {
                iframe.contentWindow.postMessage(message, 'http://localhost:9001');
  
                // dev
              } else {
                if (event.target.dataset.storybook) {
                  iframe.contentWindow.postMessage(message, 'https://astro-components.netlify.com');
                } else {
                  iframe.contentWindow.postMessage(message, 'https://rocketcom.bitbucket.io');
                }
              }
            });
          }
        });
      }
    }
  }
  
  /*
   **
   ** DOCUMENT READY
   ** Jquery replacement in ES6-ish syntax
   **
   */
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      init();
    }
  };
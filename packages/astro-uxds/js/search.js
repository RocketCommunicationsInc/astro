document.addEventListener("DOMContentLoaded", () => {
  const searchOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "title",
      "excerpt"
    ]
  };
  const searchInput = document.getElementById('search-site');
  const dataURI = '/search-index.json';
  const queryString = location.search.replace('?q=', '').trim();

  // Search on Page Load
  if (queryString != '') {
    generateSearch(queryString);
  }

  //form Search 
  searchInput.addEventListener('keyup', function () {
    const searchValue = searchInput.value.trim();
    if (searchValue != '') {
      generateSearch(searchValue);
    }
  });

  //query search-index.json
  async function generateSearch(string) {
    fetch(dataURI)
      .then(res => res.json())
      .then((result) => {
        const { data } = result;
        const fuse = new Fuse(data, searchOptions);
        const searchResult = fuse.search(string);
        generateResults(searchResult);
        // console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  //generate results
  function generateResults(data) {
    if (data.length === 0) {
      $('#results').empty().append(
        `
        <div class="no-results">
          <h3>Sorry no matches</h3>
        </div>
      `);
    } else if (data.length > 0 || searchValue == '') {
      $('#results').empty();

      for (i = 0; i < data.length; i++) {
        const excerpt = data[i].excerpt.replace("::: note", "").replace(":::", "").replace(":::", "");
        const stripTag = excerpt.replace(/(<([^>]+)>)/ig, "");

        if (stripTag.length > 50) {
          $('#results').append(`
            <div class="result-item">  
              <dt class="item-name">
                <a href='${data[i].path}'>
                  ${data[i].title}
                </a>
              </dt>
              <dd class="desc">${stripTag}</dd>
            </div>
          `);
        }
      }
    }
  }
});
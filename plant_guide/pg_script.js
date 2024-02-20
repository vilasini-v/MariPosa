const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
// Event listener for form submission
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm.length === 0) {
        // Clear search results if search term is empty
        searchResults.innerHTML = '';
        return;
    }
    searchResults.style.display = 'block';

    // Simulated search results with content (replace with your actual search implementation)
    const results = [
        { name: 'Aloe', content: 'Content of Result 1', img:"images/plant-2.jpg", text_h2: "The growing need of plants", text_p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat."},
        { name: 'Rose', content: 'Content of Result 2' },
        { name: 'Jasmine', content: 'Content of Result 3' }
    ];

    // Filter results based on search term
    const filteredResults = results.filter(result => result.name.toLowerCase().includes(searchTerm));

    // Display results
    if (filteredResults.length > 0) {
        const html = filteredResults.map(result => `
            <div class="search-result">
                <div class="result-name">${result.name}</div>
                <div class="result-content">${result.content}</div>
                <div class = "blog-item">
                <div class = "blog-img">
              <img src = ${result.img} alt = "">
              <span><i class = "far fa-heart"></i></span>
                </div>
                <div class = "blog-text">
              <h2>${result.text_h2}</h2>
              <p>${result.text_p}</p>
              <a href = "#">Read More</a>
            </div>
          </div>
            </div>
        `).join('');
        searchResults.innerHTML = html;
    } else {
        searchResults.innerHTML = 'No results found';
    }
});

const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});


const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
    navbar.classList.remove("show");
  });
});

const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

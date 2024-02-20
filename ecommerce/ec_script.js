const searchForm = document.getElementById('form1');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm.length === 0) {
        searchResults.innerHTML = '';
        return;
    }
    searchResults.style.display = 'block';

    const results = [
        { name: 'Aloe', img:"../plant_guide/images/plant-2.jpg",price:'$10'},
        { name: 'Rose', img:"../plant_guide/images/plant-1jpg",price:'$11'},
        { name: 'Jasmine', img:"../plant_guide/images/plant-3.jpg",price:'$12' }
    ];

    const filteredResults = results.filter(result => result.name.toLowerCase().includes(searchTerm));

    if (filteredResults.length > 0) {
        const html = filteredResults.map(result => `
            <div class="search-result">
                <button class="plantButton">
                <img src=${result.img} alt=""></div>
                </button>
                <p class="plantName">
                <span>${result.name}</span>
                <span class="plantPrice">${result.price}</span>
                </p>
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

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

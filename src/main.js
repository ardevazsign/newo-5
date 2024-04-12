import axios from 'axios';
const apikey = 'a51a9bb0cd5bc1ed985d30c82a20bd57';

let currentPage = 1;


function searchMovies() {
    const query = document.getElementById('search-input').value;

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}&page=${currentPage}`)
        .then(response => {
            const movieGallery = document.getElementById('movie-gallery');
            movieGallery.innerHTML = '';

            response.data.result.forEach(movie => {
                const movieDiv = document.createElement('div');
                      movieDiv.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                                              alt="${movie.title}" onclick="openModal(${movie.id})">
                                              <h3>${movie.title}</h3>`;
                    
                      movieGallery.appendChild(movieDiv);
                                              
            });
        });

}


// ------- modal-------------

function openModal(movieId) {

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`)
               .then(response => {
                const movie = response.data;
                const modal = document.getElementById('modal');
                const modalDetails = document.getElementById('modal-details');
                      modalDetails.innerHTML = `<h2>${movie.title}</h2>
                                                 <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                                                 alt="${movie.title}"><p><strong>ReleaseDate:</strong> ${movie.release_date}</p>
                                                 <p><strong>Overview:</strong>${movie.overview}</p>`;
                  

                            modal.style.display = 'block';                    
               });
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');

    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// -----previos and next function

function nextPage() {
    currentPage++;
    searchMovies();
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        searchMovies();
    }
}
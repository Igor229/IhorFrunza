function searchMovies() {
    const movieTitle = document.getElementById("movieTitle").value;
    const movieType = document.getElementById("movieType").value;
    const apiKey = "b790c386";
  
    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(movieTitle)}&type=${encodeURIComponent(movieType)}&apikey=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
            const movies = data.Search;
            const moviesContainer = document.getElementById("movies");
            moviesContainer.innerHTML = "div";
            movies.forEach(movie => {
              const movieElement = document.createElement("div");
              movieElement.innerHTML = `
                <h2>${movie.Title}</h2>
                <p>Year: ${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
              `;
              moviesContainer.appendChild(movieElement);
            });
          } else {
            const moviesContainer = document.getElementById("movies");
            moviesContainer.innerHTML = "<p>Movie not found!</p>";
          }


        console.log(data);
      })
      .catch(error => console.error(error));
  }
  
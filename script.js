// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create an empty array to hold the movie titles for the selected genre
  let movieList = [];

  // Check the selected genre and add the corresponding movie titles to the movieList
  if (selectedGenre === "Comedy") {
    movieList.push("The Hangover", "Superbad", "Step Brothers", "Dumb and Dumber");
  } else if (selectedGenre === "Action") {
    movieList.push("Mad Max: Fury Road", "John Wick", "Die Hard", "The Dark Knight");
  } else if (selectedGenre === "Drama") {
    movieList.push("The Shawshank Redemption", "Forrest Gump", "The Godfather", "Fight Club");
  } else if (selectedGenre === "Sci-Fi") {
    movieList.push("Inception", "The Matrix", "Interstellar", "Blade Runner 2049");
  }

  // Display the list of movies on the page using template literals
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}`;
});
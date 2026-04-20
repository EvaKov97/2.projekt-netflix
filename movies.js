const moviesContainer = document.querySelector(".movies-main");
const movieSelect = document.getElementById("movieSelect");

async function getMovies(q) {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=" + q);
  const data = await response.json();
  moviesContainer.innerHTML = "";
  data.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.show.image.medium;
    moviesContainer.appendChild(img);
  });
}
movieSelect.addEventListener("change", () => {
  const selectedValue = movieSelect.value;
  getMovies(selectedValue);
});

document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("search");
  const albums = document.querySelectorAll(".album");

  searchInput.value = "";

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase();

    albums.forEach(function (album) {
      
      const rawTitle = album.querySelector("h2");
      const rawArtist = album.querySelector(".artist");
      const rawGenre = album.querySelector(".genre");

      const title = rawTitle?.textContent?.toLowerCase() || "";
      const artist = rawArtist?.textContent?.toLowerCase() || "";
      const genre = rawGenre?.textContent?.toLowerCase() || "";

      const matches = 
        title.includes(query) || 
        artist.includes(query) || 
        genre.includes(query) ||
        query === "";

      album.style.display = matches ? "" : "none";
    });
  });
  searchInput.dispatchEvent(new Event('input'));
});
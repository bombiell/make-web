const albums = {
    1: ["bar_mitzvah1.jpg", "bar_mitzvah2.jpg", "bar_mitzvah3.jpg"],
    2: ["bat_mitzvah1.jpg", "bat_mitzvah2.jpg", "bat_mitzvah3.jpg"],
    3: ["wedding1.jpg", "wedding2.jpg", "wedding3.jpg"],
    4: ["1_year_old1.jpg", "1_year_old2.jpg", "1_year_old3.jpg"]
  };

  const currentImageIndex = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
  };

  function updateImage(album, index) {
    const imageElement = document.getElementById(`album-image-${album}`);
    const imageSource = albums[album][index];
    imageElement.src = imageSource;
  }

  const backButtons = document.querySelectorAll(".back-button");
  backButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const album = parseInt(this.getAttribute("data-album"));
      const currentIndex = currentImageIndex[album];
      const newIndex = (currentIndex - 1 + albums[album].length) % albums[album].length;
      currentImageIndex[album] = newIndex;
      updateImage(album, newIndex);
    });
  });

  const forwardButtons = document.querySelectorAll(".forward-button");
  forwardButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const album = parseInt(this.getAttribute("data-album"));
      const currentIndex = currentImageIndex[album];
      const newIndex = (currentIndex + 1) % albums[album].length;
      currentImageIndex[album] = newIndex;
      updateImage(album, newIndex);
    });
  });
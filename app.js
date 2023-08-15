"use strict";

async function submitForm(evt) {
  evt.preventDefault();
  let searchTerm = $('#search-term').val();

  const params = new URLSearchParams({searchTerm});
  const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${params}
    &api_key=J4hKUov2M8zKRFg7cMM7DkOAQUHnjDBi`);
  const data = await response.json();
  console.log(`data is`, data);
  console.log(searchTerm);
  addToGallery(data);
}

function addToGallery(gifs) {
  let randomIndex = Math.floor(Math.random() * gifs.data.length);
  let chosenGif = gifs.data[randomIndex];

  $(".gallery").append($(`<img src=${chosenGif}>`));
}

$("#submit").on('click', submitForm);
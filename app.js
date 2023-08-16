"use strict";

//TODO: make doc strings

const GIPHY_API_KEY = 'J4hKUov2M8zKRFg7cMM7DkOAQUHnjDBi';
const GIPHY_API_URL = 'http://api.giphy.com/v1/gifs/search';

//TODO: better function name, params utilize global constants
async function submitForm(evt) {
  evt.preventDefault();
  const searchTerm = $('#search-term').val();

  const params = new URLSearchParams({ searchTerm, api_key : GIPHY_API_KEY });
  const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${params}
    &api_key=J4hKUov2M8zKRFg7cMM7DkOAQUHnjDBi`);
  const data = await response.json();

  console.log(`data is`, data);
  console.log(searchTerm);

  addToGallery(data);
}

//TODO: create separate random function
function addToGallery(gifs) {
  let randomIndex = Math.floor(Math.random() * gifs.data.length);
  let chosenGif = gifs.data[randomIndex].images.original.url;

  console.log("chosen gif=", chosenGif);

  $(".gallery").append($(`<img src="${chosenGif}">`));
}

function deleteImages() {
  $(".gallery").empty();
}

$("#submit").on('click', submitForm);

$("#delete").on('click', deleteImages);
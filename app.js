"use strict";

async function submitForm() {
  let searchTerm = $('#search-term').val();

  const params = new URLSearchParams({searchTerm})
}

$("#form").on('submit', '#input', submitForm);
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const fetchJoke = () => {
  const joke = document.getElementById('jokeContainer')
  const myObj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObj)
    .then(response => response.json())
    .then(data => {
      joke.innerText = data.joke;
    });
};
window.onload = () => fetchJoke();
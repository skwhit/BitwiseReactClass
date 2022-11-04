const apiKey = ""; //enter api key here

function displayElement(element, content) {
    const item = document.createElement(element);
    document.body.append(item);
    item.innerHTML = content;
    return item;
}

function convertString(str) {
    str = str.toLowerCase().replace(/\s+/g, "-");
    return str;
  }

const prompt = displayElement("h1", "Please enter a movie or TV show name");
const movieInput = displayElement("input");
const movieSubmit = displayElement("button", "Submit (Press Enter)");
const poster = displayElement("img");
const description = displayElement("h3", "");

movieInput.focus();

movieInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      movieSubmit.click();
    }
  });

movieSubmit.addEventListener("click", getMoviesByName);

function getMoviesByName() {
    let title = convertString(movieInput.value);
    movieInput.value = "";
    movieInput.focus();
    
    const BASE_URL = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

    fetch(BASE_URL)
        .then(res => res.json())
        .then(data =>
            {
                console.log(data);
                poster.src = data.Poster;
                description.innerHTML = `
                Title: ${data.Title} <br>
                Director: ${data.Director} <br>
                Rated: ${data.Rated} <br>
                Released: ${data.Released} <br>
                imdbRating: ${data.imdbRating} <br>
                `
            })
        .catch(error => console.log(error));
};

const getMoviesByNam = async (movieName) => {
  const result = await fetch(
    `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
  );
  const movie = await result.json();
  console.log(movie);
};

getMoviesByNam('spiderman');
getMoviesByNam('wolverine');


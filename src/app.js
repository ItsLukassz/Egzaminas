const apikey = 'e4db3ced';
const url = 'https://www.omdbapi.com/?t='
const title = document.getElementById('Title');
const Director = document.getElementById('Director');
const Rating = document.getElementById('Rating');
const Duration = document.getElementById('Duration');
const Actors = document.getElementById('Actors')
const poster = document.getElementById('Poster');
const btn = document.getElementById('button');
const temp = document.getElementById('Temporary');
const defaultimg = 'https://critics.io/img/movies/poster-placeholder.png';

btn.addEventListener('click',getMovie)

async function getMovie(){
    temp.innerHTML = `<p> </p>`;
    const querys = document.getElementById('tekstas').value;
    const responce = await fetch(`${url}${querys}&apikey=${apikey}`);
    const data = await responce.json();
    console.log(data);
    title.innerHTML = `<p></p>`;
    Rating.innerHTML = `<p></p>`;
    Duration.innerHTML = `<p></p>`;
    Director.innerHTML = `<p></p>`;
    Actors.innerHTML = `<p></p>`;
    poster.innerHTML = `<img src="${defaultimg}">`;
    // tikrinam ar surado filma
    if( data.Response == "False" ) {
        // jei api grazina false, pranesame vartotoja
        title.innerHTML = `<p>ERROR! Cant find a movie with that name!</p>`;
    }
    // jei surado perkeliam informacija i html
    else {
        title.innerHTML = `<p> Title: ${data.Title}</p>`;
        Rating.innerHTML = `<p>  IMDB Rating: ${data.imdbRating} </p>`;
        Duration.innerHTML = `<p> Movie Runtime: ${data.Runtime} </p>`;
        Director.innerHTML = `<p> Director: ${data.Director} </p>`;
        Actors.innerHTML = `<p> Actors: ${data.Actors} </p>`;
        // Tikrinam ar filmas turi posteri
        if (data.Poster == 'N/A') {
            // jei ne naudojam default image
            poster.innerHTML = `<img src="${defaultimg}">`;
        } else {
            // jei turi, naudojam api image
            poster.innerHTML = `<img src="${data.Poster}">`;
        }
    }
}
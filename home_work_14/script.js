const baseUrl = 'https://swapi.dev/api';
const list = document.getElementById('list');
const btn = document.getElementById('getInf');
const input = document.getElementById('input');
const nextPage = document.getElementById('nextPage');
const getPeople = () => {
    list.innerHTML = 'loading...'
    axios
        .get(`${baseUrl}/people`)
        .then((response) => {
            const codeHtml = response.data.results.map((item) => `
            <div class = "people">
                 <h3>${item.name}<h3>
                <h4>Birth year : ${item.birth_year}</h4>
                <h4>Gender : ${item.gender}</h4>
            </div>`
            )
            list.innerHTML = codeHtml.join("");
            console.log(response.data.results);
        })
        .catch((err) => {
            console.log('Error:', err);
            list.innerHeight = 'error :('
        })
} 
const getFilm = () => {
    list.innerHTML = 'loading...'
    axios
        .get(`${baseUrl}/films/${input.value}`)
        .then((response) => {
            list.innerHTML =`<div class = "movie">
            <h3>${response.data.title}<h3>
            <h4>Episode : ${response.data.episode_id}</h4>
            <h4>Release date : ${response.data.release_date}</h4>
            <h4>Producer : ${response.data.producer}</h4>
        </div>`
            console.log(response.data);
        })
        .catch((err) => {
            console.log('Error:', err);
            list.innerHeight = 'error :('
        })
}
btn.addEventListener('click', ()=> (input.value > 0 && input.value < 7) ? getFilm(): getPeople());

const planets = () => {
    list.innerHTML = 'loading...'
    axios
        .get(`${baseUrl}/planets`)
        .then((response) => {
            const codeHtml = response.data.results.map((item) => `
            <div class = "people">
                 <h3>${item.name}<h3>
            </div>`
            )
            list.innerHTML = codeHtml.join("");
            console.log(response.data.results);
        });
}
nextPage.onclick = planets;
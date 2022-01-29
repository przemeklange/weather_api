const city = document.querySelector('#city');
const search = document.querySelector('button');
const images = document.querySelector('.main')
let nowaZmienna = '';

let image = {
    "Drizzle" : "./images/raining.png",
    "Clear" : "./images/sunny.png",
    "Clouds" : "./images/cloudy.png"
}

let newSearch = () => {
    nowaZmienna = city.value;
}

search.addEventListener('click', () => {
    newSearch();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nowaZmienna}&appid=cdc2f75582915308b8b4c1ea0e15371e`)
        .then(res => res.json())
        .then(data => {
            console.log(data);        
            Object.entries(image).forEach(([key, value]) => {
                if (data['weather']['0']['main'] === key) {
                    images.innerHTML = `<img src=${value} />`;
                }
            });

            let wind = document.querySelector('.wind-now p');
            let humiditytext = document.querySelector('.humidity p');
            wind.innerHTML = data['wind']['speed'];
            humiditytext.innerHTML = data['main']['humidity']
        });
})
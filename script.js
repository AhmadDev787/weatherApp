
const key = "Your_Key";
let btn = document.getElementById("search_btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Fetching Weather");
    let status = document.getElementById("status");
    status.style.display = "block";
    status.innerHTML = "Fetching Weather....";
    let input = document.getElementById("search_input").value;
        async function getData() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`;
            let response = await fetch(url);
            if(response.status==404){
                status.innerHTML="Wrong Location!";
                status.classList.remove="alert-dark";
                status.classList.add="alert-danger";
            }
            else{
            let data = await response.json();
            status.innerHTML = "Weather is Fetched!";
            let degree = document.getElementById("degree");
            degree.innerHTML = data.main.temp + "<sup>o</sup> C";
            let cityName = document.getElementById("cityName");
            cityName.innerHTML = input;
            let wind = document.getElementById("wind");
            wind.innerText = data.wind.speed;
            let feels_like = document.getElementById("feels_like");
            feels_like.innerText = data.main.feels_like;
            let humidity = document.getElementById("humidity");
            humidity.innerText = data.main.humidity;
            }
        }
        getData();
        if(!getData){
            console.log("problem");
        }
});



const API_KEY = "7bdbac2c1b1acac3841e3b4a2105d60a";

function onGeoOk(position) { //getCurrentPosition에 성공하는 경우 callback function이 object인 GeolocationPosition을 sore input parameter로 가져가며 실행됨
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
    });
};

function onGeoError() { //실패하는 경우 optional callback function이 object인 GeolocationPositionError를 sore input parameter로 가져가며 실행됨
    alert("Can't find you. No weather for you.");
};


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //navigator는 browser에 대한 정보를 포함하는 object


//options: optional PositionOptions object
//??혹시 노션 페이지 다른 계정으로 옮기는 방법 아시는지


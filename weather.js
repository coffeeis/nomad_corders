const API_KEY = "7bdbac2c1b1acac3841e3b4a2105d60a";

function onGeoOk(position) { //getCurrentPosition�� �����ϴ� ��� callback function�� object�� GeolocationPosition�� sore input parameter�� �������� �����
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

function onGeoError() { //�����ϴ� ��� optional callback function�� object�� GeolocationPositionError�� sore input parameter�� �������� �����
    alert("Can't find you. No weather for you.");
};


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //navigator�� browser�� ���� ������ �����ϴ� object


//options: optional PositionOptions object
//??Ȥ�� ��� ������ �ٸ� �������� �ű�� ��� �ƽô���


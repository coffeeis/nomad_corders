const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();//??new는 object인 Date()의 keyword, Date()는 날짜를 return하는 function들의 object, Date()에서 대문자와()는 new keyword를 사용하는 모든 object들의 특징일까 ???
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");//padStart()는 string의 길이를 변경하기 위해 부족한 문자를 지정된 문자로 채우는 function으로 string을 return
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000); //argument는 차례대로 함수명, 시간 간격(ms)



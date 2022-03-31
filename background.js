const images = [
    "0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //document.creatElement(element)는 html element를 만들기만 하는 것

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //document.body.appendChild(element)를 해야 그 중 body에 만든 element를 추가할 수 있음

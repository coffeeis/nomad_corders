const images = [
    "0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //document.creatElement(element)�� html element�� ����⸸ �ϴ� ��

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //document.body.appendChild(element)�� �ؾ� �� �� body�� ���� element�� �߰��� �� ����

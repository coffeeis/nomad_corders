const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();//??new�� object�� Date()�� keyword, Date()�� ��¥�� return�ϴ� function���� object, Date()���� �빮�ڿ�()�� new keyword�� ����ϴ� ��� object���� Ư¡�ϱ� ???
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");//padStart()�� string�� ���̸� �����ϱ� ���� ������ ���ڸ� ������ ���ڷ� ä��� function���� string�� return
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000); //argument�� ���ʴ�� �Լ���, �ð� ����(ms)



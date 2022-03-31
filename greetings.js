const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); //첫 번째 input만 가져감, 다 가져가려면 All을 붙여서 querySelectorAll()
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //반복되는 string은 대문자 변수로 저장하는 것이 관습
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //submit event로 인한 브라우저의 기본 동작을 막아주는 함수, 그 기본 동작은 페이지 새로고침, enter를 눌러도 같은 동작이 실행됨
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

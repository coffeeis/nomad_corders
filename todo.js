const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; 

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify()는 어떤것이든 string으로 바꿔주는 함수
};

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //여기서 필요한 id의 datatype은 number, parseInt()는 datatype을 string에서 integer로 바꿔주는 함수, 10진법이 default 
    li.remove(); //filter() 는 argument로 주어진 함수를 통과한 item들만을 가지고 새로운 array를 만드는 함수, 원래의 array는 바뀌지 않음
    saveToDos();
};

//childNodes는 해당 element의 child node들의 array이자 object를 return하는 property, read-only
//parantNode는 해당 element 또는 node의 parent node를  return하는 property, read-only
//?? node와 element의 차이점은 뭘까?, Element nodes, text nodes, and comment nodes로 구분, 그 기준은 property 유무, 그러면 id나 class는 property가 아닌걸까? 

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id; //여기서 대입된 id의 datetype은 string
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //savedToDos가 있을 경우 toDos array에 null 대신 parsedToDos를 대입하도록 함
    parsedToDos.forEach(paintToDo); //forEach()는 array 안의 item 각각을 paintToDo()의 argument로 보냄
};






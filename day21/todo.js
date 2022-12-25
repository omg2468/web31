let toDoitem = document.querySelectorAll(".todo-item");

let btnAdd = document.getElementById("btn-add");

const toDoList = document.querySelector(".todo-list");

const to_do_list = document.querySelectorAll(".todo-list");

let input = document.getElementById("todo-input");
let todos = [
  {
    title: "Làm bài tập",
    status: true,
  },
  {
    title: "Chơi với bạn bè",
    status: false,
  },
  {
    title: "Sang nhà chị thăm người ốm",
    status: true,
  },
];

function renderUI(arr) {
  if (arr.length == 0) {
    toDoList.innerHTML =
      '<p class="todos-empty">Không có công việc nào trong danh sách</p>';
    return;
  }
  toDoList.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    toDoList.innerHTML += `
        <div class="todo-item ${arr[i].status ? "active-todo" : ""}" id="${i}">
        <div class="todo-item-title">
              <input type="checkbox" ${arr[i].status ? "checked" : ""}/>
              <p>${arr[i].title}</p>
            </div>
            <div class="option">
              <button class="btn btn-update">
                <img
                  src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg"
                  alt="icon"
                />
              </button>
              <button class="btn btn-delete" onclick='deleteTodo(${i})'>
                <img
                  src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg"
                  alt="icon"
                />
              </button>
            </div>
          </div>`;
  }
}

function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (i === id) {
      todos.splice(i, 1);
    }
  }
  renderUI(todos);
}

btnAdd.addEventListener("click", function () {
  if (input.value == "") {
    alert(`hay nhap du lieu`);
    return;
  }
  let newItem = {
    title: input.value,
    status: false,
  };
  todos.push(newItem);
  input.value = "";
  renderUI(todos);
});

renderUI(todos);

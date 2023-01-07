let toDoitem = document.querySelectorAll(".todo-item");

let btnAdd = document.getElementById("btn-add");

const toDoList = document.querySelector(".todo-list");

const to_do_list = document.querySelectorAll(".todo-list");

let input = document.getElementById("todo-input");
let todos = [
  {
    title: "Làm bài tập",
    status: true,
    display: "",
  },
  {
    title: "Chơi với bạn bè",
    status: false,
    display: "",
  },
  {
    title: "Sang nhà chị thăm người ốm",
    status: true,
    display: "",
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
        <div class="todo-item ${
          arr[i].status ? "active-todo" : ""
        }" id="${i}" style="display:${arr[i].display}">
        <div class="todo-item-title">
              <input type="checkbox" ${
                arr[i].status ? "checked" : ""
              } onclick='toDo(${i})'/>
              <p>${arr[i].title}</p>
            </div>
            <div class="option">
              <button class="btn btn-update" onclick='updateToDo(${i})'>
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

function toDo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (i === id) {
      todos[i].status = !todos[i].status;
    }
  }
  renderUI(todos);
}

function updateToDo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (i === id) {
      btnAdd.innerText = "Cap nhat";
      input.value = todos[i].title;
      todos[i].update = "yes";
      input.focus();
    }
  }
}

btnAdd.addEventListener("click", function () {
  if (input.value == "") {
    alert(`hay nhap du lieu`);
    return;
  }
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].update == "yes") {
      todos[i].title = input.value;
      todos[i].update = "";
      btnAdd.innerText = "Thêm";
      input.value = "";
      renderUI(todos);
      return;
    }
  }
  let newItem = {
    title: input.value,
    status: false,
  };
  todos.push(newItem);
  input.value = "";
  console.log(todos);
  renderUI(todos);
});

renderUI(todos);

let filterActive = document.getElementById("active");

let filterUnactive = document.getElementById("unactive");

let filterAll = document.getElementById("all");

let to_do_item_total = document.querySelectorAll(".todo-item-title");

filterActive.addEventListener("click", function () {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].status);
    if (todos[i].status == true) {
      todos[i].display = "";
    } else todos[i].display = "none";
  }
  renderUI(todos);
});

filterUnactive.addEventListener("click", function () {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status == false) {
      todos[i].display = "";
    } else todos[i].display = "none";
  }
  renderUI(todos);
});

filterAll.addEventListener("click", function () {
  for (let i = 0; i < todos.length; i++) {
    todos[i].display = "";
  }
  renderUI(todos);
});

// filterAll.addEventListener('click', function(){
//   Array.from(to_do_item_total).map(function(b){
//     b.parentElement.style.display = ''
//   });
// })

// filterActive.addEventListener("click", function () {

//   Array.from(to_do_item_total).map(function (b) {
//     if (!b.querySelector("input").checked) {
//       b.parentElement.style.display = "none";
//     }
//     else b.parentElement.style.display = ''
//   });
// });

// filterUnactive.addEventListener("click", function () {

//   Array.from(to_do_item_total).map(function (b) {
//     if (b.querySelector("input").checked) {
//       b.parentElement.style.display = "none";
//     }
//     else b.parentElement.style.display = ''
//   });
// });


const todos = [
  {
    id: 1,
    completed: true,
    content: "Learning HTML"
  },
  {
    id: 2,
    completed: true,
    content: "Learning CSS"
  },
  {
    id: 3,
    completed: false,
    content: "Learning JavaScript"
  }
];

const div = document.querySelector("div#app");

const toTodoItem = function(todo){
    return `<li class="todo-item ${todo.completed ? 'complete' : ""}">${todo.content}</li>`
}

const items = todos.map(toTodoItem).join("")

const ul = document.createElement("ul")

ul.className = 'todo-list'
ul.innerHTML = items

div.append(ul)










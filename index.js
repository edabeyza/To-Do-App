const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");
let todoList = [];
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("Please enter new todo text!");
    return;
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    todoList.push(newTodo);
    createTodo(newTodo);
  }
});
const createTodo = (newTodo) => {
  const { id, completed, text } = newTodo;
  const li = document.createElement("li");
  li.setAttribute("id", id);
  completed ? li.classList.add("checked") : "";
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  li.appendChild(icon);
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);
  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);
  todoUl.prepend(li);
};
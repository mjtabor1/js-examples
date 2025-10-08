const todos = [];

function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();

  if (task !== '') {
    todos.push(task);
    input.value = '';
    displayTodos();
  }
}

function displayTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    li.onclick = () => removeTodo(index);
    list.appendChild(li);
  });
}

function removeTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}
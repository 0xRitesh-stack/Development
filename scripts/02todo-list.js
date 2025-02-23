const todoList = [];

todoList.push({
  name: 'Learn HTML', 
  dueDate: '20-10-2021'
}, {
  name: 'Learn CSS',
  dueDate: '20-10-2021'
});
console.log(todoList);

renderToDoList();

function renderToDoList() {
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <p>
        ${name}  ${dueDate}
        <button onclick="
          todoList.splice(${i}, 1);
          renderToDoList();
        ">Delete</button>
      </p>`;
    todoListHtml += html;
  }
  console.log(todoListHtml);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim();
  
  const dateInputElement = document.querySelector('.js-due-input');
  const dueDate = dateInputElement.value;

  if (name === '' || dueDate === '') {
    alert('Please enter both a name and a due date.');
    return;
  }

  todoList.push({
    name,
    dueDate
  });
  console.log(todoList);

  inputElement.value = '';
  dateInputElement.value = '';

  renderToDoList();
}
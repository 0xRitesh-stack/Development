document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-todo-button');
  const nameInput = document.querySelector('.js-name-input');
  const dueDateInput = document.querySelector('.js-due-date-input');
  const todoList = document.querySelector('.js-todo-list');

  addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const dueDate = dueDateInput.value;

    if (name && dueDate) {
      const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';
      todoItem.innerHTML = `
        <p>${name}</p>
        <p>Due: ${dueDate}</p>
        <button class="delete-todo-button">Delete</button>
      `;
      todoList.appendChild(todoItem);

      nameInput.value = '';
      dueDateInput.value = '';
    } else {
      alert('Please enter both a name and a due date.');
    }
  });

  todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-todo-button')) {
      const todoItem = event.target.closest('.todo-item');
      todoItem.remove();
    }
  });
});

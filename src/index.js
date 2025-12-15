document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.querySelector('#create-task-form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    
    const taskInput = document.querySelector('#new-task-description');
    const taskList = document.querySelector('#tasks');
    
    // Create new task element
    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;
    
    // Add to task list
    taskList.appendChild(taskItem);
    
    // Clear input
    taskInput.value = '';
  });
});

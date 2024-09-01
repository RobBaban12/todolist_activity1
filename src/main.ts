
const taskInput = document.getElementById("input-txt") as  HTMLInputElement;
const addTaskButton = document.getElementById("task-btn") as HTMLButtonElement;
const taskList = document.getElementById("task-list")  as HTMLUListElement;


addTaskButton.addEventListener('click', () => {
    
    const task = taskInput.value.trim();
  
    if (task !== '') {
      const li = document.createElement('li');
      li.textContent = task;
  
      taskList.appendChild(li);
  
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  });
const taskInput = document.getElementById("input-txt") as  HTMLInputElement;
const addTaskButton = document.getElementById("task-btn") as HTMLButtonElement;
const taskList = document.getElementById("task-list")  as HTMLUListElement;


addTaskButton.addEventListener('click', () => {
    
    const task = taskInput.value.trim();
  
    if (task !== '') {
      const li = document.createElement('li');
      const btn = document.createElement('img');
      li.id = "li"
      btn.src = 'public/bin.svg';
      btn.id = 'bin';
      li.textContent = task;
    
      taskList.appendChild(li);
      taskList.appendChild(btn);

      btn.onclick = function(){
      taskList.removeChild(li)
      taskList.removeChild(btn)
      }

      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  });
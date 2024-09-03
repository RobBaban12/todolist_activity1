const taskInput = document.getElementById("input-txt") as  HTMLInputElement;
const addTaskButton = document.getElementById("task-btn") as HTMLButtonElement;
const taskList = document.getElementById("task-list")  as HTMLUListElement;


addTaskButton.addEventListener('click', () => {
    
    const task = taskInput.value.trim();
  
    if (task !== '') {
      const li = document.createElement('li');
      const btn = document.createElement('img');
      const check_btn = document.createElement('img')
      check_btn.src = "public/checkbox.png";
      check_btn.id = "check-box";

      li.id = "li"

      btn.src = 'public/bin.svg';
      btn.id = 'bin';

      li.textContent = task;

      taskList.appendChild(check_btn)
      taskList.appendChild(li);
      taskList.appendChild(btn);

      check_btn.onclick = () => {
        li.style.textDecoration = li.style.textDecoration === 'line-through' ? 
        'none' : 'line-through';
      };

      btn.onclick = () =>{
      taskList.removeChild(li)
      taskList.removeChild(btn)
      }

      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  });
const taskInput = document.getElementById("input-txt") as HTMLInputElement;
const addTaskButton = document.getElementById("task-btn") as HTMLButtonElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;
const deadlineInput = document.getElementById("deadline-txt") as HTMLInputElement;

interface Task {
  text: string;
  deadline: string;
  completed: boolean;
}

const loadTasks = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasks = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const renderTasks = (tasks: Task[]) => {
  taskList.innerHTML = '';
  tasks.sort((a, b) => new Date(b.deadline).getTime() - new Date(a.deadline).getTime());
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('img');
    const check_btn = document.createElement('img');
    const deadlineSpan = document.createElement('span');

    check_btn.src = "public/checkbox.png";
    check_btn.id = "check-box";

    btn.src = 'public/bin.svg';
    btn.id = 'bin';

    li.textContent = task.text;
    deadlineSpan.textContent = ` (Due: ${task.deadline})`;
    deadlineSpan.className = 'deadline';

    if (new Date(task.deadline) < new Date()) {
      li.classList.add('expired');
    }

    if (task.completed) {
      li.style.textDecoration = 'line-through';
    }

    check_btn.onclick = () => {
      task.completed = !task.completed;
      saveTasks(tasks);
      renderTasks(tasks);
    };

    btn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks(tasks);
    };

    li.appendChild(deadlineSpan);
    taskList.appendChild(check_btn);
    taskList.appendChild(li);
    taskList.appendChild(btn);
  });
};

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (taskText !== '' && deadline !== '') {
    const tasks = loadTasks();
    tasks.push({ text: taskText, deadline, completed: false });
    saveTasks(tasks);
    renderTasks(tasks);
    taskInput.value = '';
    deadlineInput.value = '';
  } else {
    alert('Please enter a task and a deadline.');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderTasks(loadTasks());
});
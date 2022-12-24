// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event Listeners
loadEventListeners();

// Load all Event Listners
function loadEventListeners() {
  // Add task Event
  form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e) {
  // If no input is given then throw a alert
  if(taskInput.value === '') {
    alert("Enter Task");
  }

  //else 
  //Make a li
    const li = document.createElement('l1');

  // Give it a class 
    li.className = 'collection-item';

  // Create a text inside li
    // li.innerHTML = taskInput.value; //IDK why he didn't write like this: not the best practice maybe
    /**
     * Here we created a text node in the document then appended as a child to our li variable
     */
    li.appendChild(document.createTextNode(taskInput.value));

    //add icon
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';

    //add icon to html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.append(link);
    console.log(li);

    //now append li to ul
    taskList.append(li);

  //when the button is clicked then the page gets automatically redirected
  //to stop that, stop the default behaviour of the event

  e.preventDefault();

}
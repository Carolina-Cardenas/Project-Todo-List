// TASK MANAGER

// taskManager object
let description ="";
const taskManager = {
  // fill up with properties, see instructions
  tasks: [ ],
  addTask: function(description){
    const newTask = {
      id: this.generateUniqueId(),
      description: description,
      completed:false
    }
    this.tasks.push(newTask)
  },
  generateUniqueId: function() {
    return this.tasks.length + 1;
  }, 
 
 completeTask: function(taskId) {
  
    this.tasks.map(function(task){
    if(task.id == taskId ){
      task.complete = precioDescuento;
    }
}
 )},
listAllTasks: function(){
  let taskList=[];
  this.tasks.forEach(function(task) { 
  let taskItem = "ID: " + task.id + " - Description: " + task.description + " - Completes: " + task.completed;
  taskList.push(taskItem);
  });
  return taskList;
},

listCompletedTasks: function(){
completedTaskList = this.tasks.filter(task => task.completed == true)
this.completedTaskList.forEach(function(task) {
  var taskItem = document.createElement("li");
  taskItem.textContent = "ID: " + task.id + " - Descripction: " + task.description + " - Completes: " + task.completed;
  taskList.appendChild(taskItem);
  });
  return taskList;
},
};


// function for asking the user to fill in their name
 function askUserName() {
  const askUserName = prompt("What is your name:");
    if (askUserName.length>0) {
      alert(`Hi, ${askUserName}! Welcome.`);
      menu();
    } else {
      alert("Please, add a valid name.");
      this.askUserName();
    }
  }
  
  
  
// menu function
function menu() {
  const choice = parseInt(

    prompt(`What do you want to do?
    1 - Add a task
    2 - list all tasks 
    3 - Complete a task
    4 - List completed tasks
    5 - Quit
    `)
  );

  switch (choice) {
    case 1:
      const description = prompt("Enter the task description:");
      taskManager.addTask(description);
      this.menu();
      break;
    case 2:
       alert(taskManager.listAllTasks());
      this.menu();
      break;
    case 3:
      const taskId = parseInt(prompt("Entered the ID of the task:"));
      taskManager.completeTask(taskId);
      this.menu();
      break;
    case 4:
      taskManager.listCompletedTasks();
      this.menu();
      break;
      case 5:
        alert("Goodbye!");
        break;
    default:
      alert("Invalid option. Please, Try again.");
  }
}   

  // add some more3 logic here
  // choose between if/else or switch 


// starts with the function asUserName() which triggers the menu() function
askUserName();








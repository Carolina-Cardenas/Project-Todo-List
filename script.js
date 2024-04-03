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
    this.tasks = this.tasks.map(function(task) {
        if (task.id === taskId) {
            return { ...task, completed: true };
        }
        return task;
    });
},

listAllTasks: function(){
  if (this.tasks.length>0) {
    let taskList=[];
    this.tasks.forEach(function(task) { 
    let taskItem = "ID: " + task.id + " - Description: " + task.description + " - Completed: " + task.completed + "\n";
  
    taskList.push(taskItem);
    });
    alert(taskList);
  } else {
    alert("You have no tasks");
  }
  menu();
},

listCompletedTasks: function(){
if (this.tasks.length>0)  { 
   const completedTaskList = this.tasks.filter(task => task.completed === true)
   let taskList=[];
   completedTaskList.forEach(function(task) {
   let taskItem = "ID: " + task.id + " - Description: " + task.description + " - Completed: " + task.completed + "\n";

  taskList.push(taskItem);
  });
  alert(taskList);
} else{
  alert("You have no tasks");
}
menu();
},

}

// function for asking the user to fill in their name
  function askUserName() {
  const askUserName = prompt("What is your name:");
    if (askUserName.length>0) {
      alert(`Hi,${askUserName}! Welcome.`);
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
    2 - List all tasks 
    3 - Complete a task
    4 - List completed tasks
    5 - Quit
    `)
  );

  switch (choice) {
    case 1:
      const description = prompt("Enter the task description:");
      taskManager.addTask(description);
      menu();
      break;
    case 2:
      taskManager.listAllTasks();
      break;
    case 3:
      const taskId = parseInt(prompt("Entered the ID of the task:"));
      taskManager.completeTask(taskId);
      menu();
      break;
    case 4:
      (taskManager.listCompletedTasks());
      break;
      case 5:
        alert("Goodbye!");
        break;
    default:
      alert("Invalid option. Please, Try again.");
      menu();
  }
}   

  // add some more3 logic here
  // choose between if/else or switch 


// starts with the function asUserName() which triggers the menu() function
askUserName();








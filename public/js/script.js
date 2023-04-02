let lastUserId = 0;

let user1 = new User();
user1.setUserName("zeppeli");
user1.setUserEmail("zeppzepp@gmail.com");
user1.setUserPassword("zeps123");
let user2 = new User();
user2.setUserName("johnny");
user2.setUserEmail("johhjohh@gmail.com");
user2.setUserPassword("johh123");

let userList = [];
userList.push(user1, user2);

console.log(userList);

const welcomeText = document.getElementById("welcomeText");
welcomeText.innerHTML += " " + userList[0].getUserName() + "!";

let emptyAddInputs = document.getElementById("emptyAddInputs");
let emptyUpdateInputs = document.getElementById("emptyUpdateInputs");

let taskTitle = document.getElementById("taskTitle");
let taskDescription = document.getElementById("taskDescription");
let taskDeadline = document.getElementById("taskDeadline");

const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", () => {
    if(isInputFilled(taskTitle.value, taskDescription.value, taskDeadline.value)){
        user1.addTask(taskTitle.value, taskDescription.value, taskDeadline.value);
        user1.listTasks();
        clearInputs(taskTitle, taskDescription, taskDeadline);
        emptyAddInputs.innerHTML = "";
    }
    else{
        emptyAddInputs.innerHTML = "Fill in all fields!";
    }
})

let newTaskId = document.getElementById("newTaskId");
let newTaskTitle = document.getElementById("newTaskTitle");
let newTaskDescription = document.getElementById("newTaskDescription");
let newTaskDeadline = document.getElementById("newTaskDeadline");

const updateTaskButton = document.getElementById("updateTaskButton");
updateTaskButton.addEventListener("click", () => {
    if(isInputFilled(newTaskTitle.value, newTaskDescription.value, newTaskDeadline.value)){
        user1.updateTask(newTaskId, newTaskTitle, newTaskDescription, newTaskDeadline);
        user1.listTasks();
        clearInputs(newTaskTitle, newTaskDescription, newTaskDeadline);
        newTaskId.value = "";
        emptyUpdateInputs.innerHTML = "";
    }
    else{
        emptyUpdateInputs.innerHTML = "Fill in all fields!";
    }
})

function isInputFilled(taskTitle, taskDescription, taskDeadline){
    if(taskTitle == "" || taskDescription == "" || taskDeadline == ""){
        return false;
    }
    else{
        return true;
    }
}

function clearInputs(taskTitle, taskDescription, taskDeadline){
    taskTitle.value = "";
    taskDescription.value = "";
    taskDeadline.value = "";
}
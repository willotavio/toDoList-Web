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

let taskTitle = document.getElementById("taskTitle");
let taskDescription = document.getElementById("taskDescription");
let taskDeadline = document.getElementById("taskDeadline");

let emptyInputs = document.getElementById("emptyInputs");

const addTaskButton = document.getElementById("addTaskButton")
addTaskButton.addEventListener("click", () => {
    if(isInputFilled()){
        user1.addTask(taskTitle.value, taskDescription.value, taskDeadline.value);
        user1.listTasks();
        clearInputs();
        emptyInputs.innerHTML = "";
    }
    else{
        emptyInputs.innerHTML = "Fill in all fields!";
    }
})

function isInputFilled(){
    if(taskTitle.value == "" || taskDescription.value == "" || taskDeadline.value == ""){
        return false;
    }
    else{
        return true;
    }
}

function clearInputs(){
    taskTitle.value = "";
    taskDescription.value = "";
    taskDeadline.value = "";
}
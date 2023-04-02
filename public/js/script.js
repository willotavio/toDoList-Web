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

const addTaskButton = document.getElementById("addTaskButton")
addTaskButton.addEventListener("click", () => {
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDescription = document.getElementById("taskDescription").value;
    let taskDeadline = document.getElementById("taskDeadline").value;
    user1.addTask(taskTitle, taskDescription, taskDeadline)
    user1.printTasks();
})
let lastId = 0;

let task1 = new Task();
task1.setTaskName("howtobasic");
task1.setTaskDescription("maratonar howtobasic desde o inicio");
task1.setTaskDeadline("01/04/2003");

let task2 = new Task();
task2.setTaskName("face");
task2.setTaskDescription("mudar a cor do face");
task2.setTaskDeadline("06/02/2012");

console.log(task1, task2);

let taskList = [task1, task2];

const tasksTable = document.getElementById("tasksTable")

for(let i = 0; i < taskList.length; i++){
    tasksTable.innerHTML += "<tr>" +
    "<td>" + taskList[i].getTaskId() + "</td>" +
    "<td>" + taskList[i].getTaskName() + "</td>" +
    "<td>" + taskList[i].getTaskDescription() + "</td>" +
    "<td>" + taskList[i].getTaskDeadline() + "</td>" +
    "<td>" + taskList[i].isTaskComplete() + "</td>" +
    "</tr>";
}

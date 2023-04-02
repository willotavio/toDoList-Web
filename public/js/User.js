class User{

    _lastTaskId = 0;

    constructor(userName, userEmail, userPassword){
        this._userId = lastUserId + 1;
        lastUserId++;
        this._userName = userName;
        this._userEmail = userEmail;
        this._userPassword = userPassword;
        this._userTasks = [];
    }

    getUserId(){
        return this._userId;
    }
    getUserName(){
        return this._userName;
    }
    getUserEmail(){
        return this._userEmail;
    }

    setUserName(userName){
        this._userName = userName;
    }
    setUserEmail(userEmail){
        this._userEmail = userEmail;
    }
    setUserPassword(userPassword){
        this._userPassword = userPassword;
    }

    addTask(taskName, taskDescription, taskDeadline){
        let task = new Task(this._lastTaskId);
        this._lastTaskId++;
        task.setTaskName(taskName);
        task.setTaskDescription(taskDescription);
        task.setTaskDeadline(taskDeadline);
        this._userTasks.push(task);

        console.log(this._userTasks);
    }
    
    printTasks(){
        const tasksTable = document.getElementById("tasksTable")
        tasksTable.innerHTML = "";
        for(let i = 0; i < this._userTasks.length; i++){
            tasksTable.innerHTML += "<tr>" +
            "<td>" + this._userTasks[i].getTaskId() + "</td>" +
            "<td>" + this._userTasks[i].getTaskName() + "</td>" +
            "<td>" + this._userTasks[i].getTaskDescription() + "</td>" +
            "<td>" + this._userTasks[i].getTaskDeadline() + "</td>" +
            "<td>" + this._userTasks[i].isTaskComplete() + "</td>" +
            "</tr>";
        }
    }

}

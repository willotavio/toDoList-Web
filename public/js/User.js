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

    addTask(taskTitle, taskDescription, taskDeadline){
        let task = new Task(this._lastTaskId);
        this._lastTaskId++;
        task.setTaskTitle(taskTitle);
        task.setTaskDescription(taskDescription);
        task.setTaskDeadline(taskDeadline);
        this.saveTask(task);
        console.log(this._userTasks);
    }

    saveTask(task){
        this._userTasks.push(task);
    }

    editTask(taskId){
        for(let i = 0; i < this._userTasks.length; i++){
            if(this._userTasks[i].getTaskId() == taskId){
                document.getElementById("newTaskId").value = this._userTasks[i].getTaskId();
                document.getElementById("newTaskTitle").value = this._userTasks[i].getTaskTitle();
                document.getElementById("newTaskDescription").value = this._userTasks[i].getTaskDescription();
                document.getElementById("newTaskDeadline").value = this._userTasks[i].getTaskDeadline();    
            }
        }
    }
    updateTask(taskId, newTaskTitle, newTaskDescription, newTaskDeadline){
        for(let i = 0; i < this._userTasks.length; i++){
            if(this._userTasks[i].getTaskId() == taskId.value){
                this._userTasks[i].setTaskTitle(newTaskTitle.value);
                this._userTasks[i].setTaskDescription(newTaskDescription.value);
                this._userTasks[i].setTaskDeadline(newTaskDeadline.value);
            }
        }
    }


    deleteTask(taskId){
        let taskList = document.getElementById("tasksTable");
        for(let i = 0; i < this._userTasks.length; i++){
            if(this._userTasks[i].getTaskId() == taskId){
                this._userTasks.splice(i, 1);
                taskList.deleteRow(i);
            }
        }
        console.log(this._userTasks);
    }

    listTasks(){
        const tasksTable = document.getElementById("tasksTable");
        tasksTable.innerHTML = "";
        for(let i = 0; i < this._userTasks.length; i++){
            let newRow = tasksTable.insertRow(-1);
            let idCell = newRow.insertCell(0);
            let titleCell = newRow.insertCell(1);
            let descriptionCell = newRow.insertCell(2);
            let deadlineCell = newRow.insertCell(3);
            let statusCell = newRow.insertCell(4);
            let actionsCell = newRow.insertCell(5);
            
            idCell.innerHTML = this._userTasks[i].getTaskId();
            titleCell.innerHTML = this._userTasks[i].getTaskTitle();
            descriptionCell.innerHTML = this._userTasks[i].getTaskDescription();
            deadlineCell.innerHTML = this._userTasks[i].getTaskDeadline();
            statusCell.innerHTML = this._userTasks[i].isTaskComplete();
            actionsCell.innerHTML = "<button class='actionButton' id='editTaskButton' onclick='user1.editTask(" + this._userTasks[i].getTaskId() + ")'>Update</button><button class='actionButton' id='deleteTaskButton' onclick='user1.deleteTask(" + this._userTasks[i].getTaskId() + ")'>Delete</button>";
        }
    }
    
}

class Task{
    
    constructor(taskName, taskDescription, taskDeadline){
        this._taskId = lastId + 1;
        lastId++;
        this._taskName = taskName;
        this._taskDescription = taskDescription;
        this._taskDeadline = taskDeadline;
        this._taskComplete = false;
    }

    getTaskId(){
        return this._taskId;
    }
    getTaskName(){
        return this._taskName;
    }
    getTaskDescription(){
        return this._taskDescription;
    }
    getTaskDeadline(){
        return this._taskDeadline;
    }
    isTaskComplete(){
        return this._taskStatus;
    }

    setTaskName(taskName){
        this._taskName = taskName;
    }
    setTaskDescription(taskDescription){
        this._taskDescription = taskDescription;
    }
    setTaskDeadline(taskDeadline){
        this._taskDeadline = taskDeadline;
    }
    setTaskComplete(taskComplete){
        this._taskComplete = taskComplete;
    }


}
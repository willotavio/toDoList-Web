class Task{
    
    constructor(lastTaskId){
        this._taskId = lastTaskId + 1;
        this._taskComplete = false;
    }

    getTaskId(){
        return this._taskId;
    }
    getTaskTitle(){
        return this._taskTitle;
    }
    getTaskDescription(){
        return this._taskDescription;
    }
    getTaskDeadline(){
        return this._taskDeadline;
    }
    isTaskComplete(){
        return this._taskComplete;
    }

    setTaskTitle(taskTitle){
        this._taskTitle = taskTitle;
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
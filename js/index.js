let Todo = [];

while(true){
    let input = prompt("[1] Add Task \n[2] Show Tasks \n[3] Edit task \n[4] Delete task \n[5] Exit")
    //Add task
    if(input==="1"){
        let task = prompt("Add Task");
        Todo.push(task)
    }
    //Display tasks
    else if (input==="2"){
        let str=``
        // for(let i = 0;i<Todo.length;i++){
        //     str += `[${i+1}] ${Todo[i]}\n` 
        // }
        for(const[index,tsk] of Todo.entries()){
            str+=`[${index+1}] ${tsk} \n`
        }
        alert(str)
    }
    //Edit task
    else if(input==="3"){
        let str=``
        for(const[index,tsk] of Todo.entries()){
            str+=`[${index+1}] ${tsk} \n`
        }
        let edit = prompt(`${str} \nEnter id number and new task name like 'id,new_task(3,drink)'...!`).
        split(",");
        Todo[edit[0]-1]=edit[1]
    }
    //Delete task
    else if(input==="4"){
        let str=``
        for(const[index,tsk] of Todo.entries()){
            str+=`[${index+1}] ${tsk} \n`
        }
        let del =prompt(`${str} \nEnter remove id of task`)
        Todo.splice(del-1,1);
    }
    //Exit
    else if (input==="5"){
        break;
    }
    //Error message
    else{
        alert("Please enter listed numbers")
    }
}
let Todo = [];

while(true){
    let input = prompt("[1] Add Task \n[2] Show Tasks \n[3] Edit task \n[4] Delete task \n[5] Exit")
    if(input=="1"){
        let task = prompt("Add Task");
        Todo.push(task)
    }
    else if (input=="2"){
        let str=``
        for(let i = 0;i<Todo.length;i++){
            str += `[${i+1}] ${Todo[i]}\n` 
        }
        alert(str)
    }
    else if(input=="3"){
        
    }
    else if(input=="4"){
        
    }
    else if (input=="5"){
        break;
    }
    else{
        alert("Please enter listed numbers")
    }
}
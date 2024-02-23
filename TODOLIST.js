const ToDoList= {
   hospital :[],
    market :[]
}
   //add task to the list
const addTask = (name,category,completed=true)=>{
    var newTask ={
       task:name,
       completed:completed
    }
   
        if(ToDoList[category]){

            ToDoList[category].push(newTask);
            
        }
        if(!ToDoList[category]){
            console.log("invalid category")
        }
       
  

}
addTask('selling and buying','market')
addTask('provide medical','hospital')

// console.log(ToDoList)

// //mark task as completed 

const markComplete = (category,taskName) =>{
    if(ToDoList.hasOwnProperty(category)){
        if(taskName>=0 && taskName<ToDoList[category].length){
            ToDoList[category][taskName].completed=true;
        }
}
}

//remove task from the list
const removeTask = (category,taskName)=>{
    if(taskName>=0 && taskName<ToDoList[category].length&& ToDoList[category][taskName].completed===true){
        ToDoList[category].splice(taskName,1);
return ToDoList;
    }
}
markComplete('market',0);
const result=removeTask('market',0);
console.log(result);





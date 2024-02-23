const taskScheduler = [];

const addTask = (title, description, dueDate, completed = false) => {
    const newTask = {
        title: title,
        description: description,
        dueDate: dueDate,
        completed: completed
    };

    taskScheduler.push(newTask);
    // console.log('pushed')
};

addTask('assignment', 'compulsory', '2024-04-10');
addTask('exam', 'submit early', '2024-05-04');

// console.log(taskScheduler);

const sortingDate = () => {
    const result = taskScheduler.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log(result);
};

sortingDate();
// console.log(taskScheduler);

const updatingTask = (title, description, dueDate, completed) => {
    for (let i = 0; i < taskScheduler.length; i++) {
        if (taskScheduler[i].title === title) {
            taskScheduler[i].dueDate = dueDate;
            taskScheduler[i].description = description;
            taskScheduler[i].completed = completed;
            break;
        }
    }
};

updatingTask('assignment', 'biology', '2024-05-15', true);

// console.log(taskScheduler);

const removeTask = (title) => {
    for (let i = 0; i < taskScheduler.length; i++) {
        if (taskScheduler[i].title === title) {
            taskScheduler.splice(i, 1);
            break;
        }
    }
};

removeTask('assignment');
console.log(taskScheduler);
// console.log(removeTask('assignment'));
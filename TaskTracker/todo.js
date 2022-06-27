const form = document.getElementById("Form");
const input = document.getElementById("Input");
const taskList = document.getElementById("Task_list");

console.log(form, input, taskList);
// basically when you submit the form, you are adding a task. 
form.onsubmit = (e) => {
    e.preventDefault();
    addTask();
};
// this function will add a task
function addTask(task){
    let taskValue = input.value;
    // if(task) {
    //     taskValue = task.text;
    // }
    task ? (taskValue = task.text) : task; //will execute if condition is false
    console.log(taskValue);
    taskValue ? displayTask() : taskValue;
// this function will list an item if the function above is true
    function displayTask(){
        const newTask = document.createElement("li");

        newTask.innerHTML = taskValue;

        newTask.onclick = () => { //create or toggle a task that is completed
            newTask.classList.toggle("completed");
            //console.log(newTask); if li is listed as completed, it will turn to color listed on css page
            newTask.classList.contains('completed') ? ((newTask.innerHTML = `<span>${taskValue} &#10004; </span> <span onclick='deleteTask()'>&#10060</span>`), 
            newTask.classList.toggle('delete_task'))  : ((newTask.innerHTML=`${taskValue}`), 
            newTask.classList.toggle('delete_task'));

            console.log(newTask);
        };
        taskList.appendChild(newTask); // this new text task will be inputed into task list

        input.value = ""; // remove a value
    
    };
};

// delete task function 

function deleteTask () {
    console.log(document.querySelectorAll('li')); //when creating new task, clicking on checkmark 

    document.querySelectorAll('li').forEach((element) => {
        element.classList.contains('delete_task') ? element.remove() : element; //this will remove the task(s)
    });
};
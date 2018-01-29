//define UI variables
const form=document.querySelector('form');
const list=document.querySelector('#list');
const taskInput=document.querySelector('#tas');

//load event listeners
loadEventListeners();

function loadEventListeners(){
    //DOM load event
    document.addEventListener('DOMContentLoaded',getTasks);
    //add task
    form.addEventListener('submit', addTask);
    //remove task
    list.addEventListener('click', removeTask);
}

//get tasks from localStorage
function getTasks(e){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        //create li item
        const li=document.createElement('li');
        //add class
        li.className='list-item';
        //create text node and append to li
        li.appendChild(document.createTextNode(task));
        //add delete
        const link=document.createElement('a');
        //add class
        link.className='delete';
        //add div to link 
        link.innerHTML='<a href="#" class="dele"></a>';
        //append link to li
        li.appendChild(link);
        //append li to ul
        document.querySelector('ul').appendChild(li);
    });

    
    e.preventDefault();
}

function addTask(e){
    if(taskInput.value===''){
        alert('Write a task!')
    }
    else{

    //create li item
    const li=document.createElement('li');
    //add class
    li.className='list-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //add delete
    const link=document.createElement('a');
    //add class
    link.className='delete';
    //add div to link 
    link.innerHTML='<a href="#" class="dele"></a>';
    //append link to li
    li.appendChild(link);
    //append li to ul
    document.querySelector('ul').appendChild(li);
    
    //store in local storage
    storeTaskInLocalStorage(taskInput.value);
    
    
    
    //clear input
    taskInput.value='';
    }
    //console.log(li);
    e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


//remove tasks

function removeTask(e){
    if(e.target.classList.contains('dele')){
        e.target.parentElement.parentElement.remove();

        //remove from Local Storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}

//remove from local storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        // console.log(taskItem.textContent);
        // console.log(task);
        if(taskItem.textContent===task){
            tasks.splice(index, 1);
            // console.log(tasks[1]);
        }
    });
    //console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
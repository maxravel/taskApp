//define UI variables
const form=document.querySelector('form');
const list=document.querySelector('#list');
const taskInput=document.querySelector('#tas');

//load event listeners
loadEventListeners();

function loadEventListeners(){
    //add task
    form.addEventListener('submit', addTask);
    //remove task
    list.addEventListener('click', removeTask);
}

function addTask(e){
    if(taskInput.value===''){
        alert('Write a task!')
    }

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
    link.innerHTML='<a href="#" class="del">x</a>';
    //append link to li
    li.appendChild(link);
    //append li to ul
    document.querySelector('ul').appendChild(li);
    
    //use local storage
    // storeTaskInLocalStorage(taskInput.value);
    
    
    
    //clear input
    taskInput.value='';

    //console.log(li);
    e.preventDefault();
}

// store task
// function storeTaskInLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks')===null){
//         tasks=[];
//     }
//     else{
//         tasks=JSON.parse(localStorage.getItem('tasks'));
//     }
// }


//remove tasks

function removeTask(e){
    if(e.target.classList.contains('del')){
        e.target.parentElement.parentElement.remove();
    }
}
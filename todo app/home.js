let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let list = document.querySelector(".list");

document.addEventListener("DOMContentLoaded",getLocalStorage);
addBtn.addEventListener("click",addTodo);
list.addEventListener("click",deleteTodo);


function addTodo(e){
    e.preventDefault();
    if(input.value.length === 0){
        alert("Enter something!");
    }else{
    let div = document.createElement("div");
    div.classList.add("textEl");
    let listEl = document.createElement("li");
    listEl.classList.add("listEl");
    listEl.innerText = input.value;
    setLocalStorage(input.value);
    div.appendChild(listEl);
    
    let trash = document.createElement("button");
    trash.innerHTML = `<i class = "fas fa-trash"></i>`;
    trash.classList.add("trashBtn");
    div.appendChild(trash);

    list.appendChild(div);
    input.value = "";
}
}
function deleteTodo(e){
    e.preventDefault();
    let list = e.target;
    let todo = list.parentElement;
    todo.remove();
    deleteLocalStorage(todo);
}

function setLocalStorage(todo){
    let val;
    if(localStorage.getItem("val") === null){
        val = [];
    }else{
        val = JSON.parse(localStorage.getItem("val"));
    }
    val.push(todo);
    localStorage.setItem("val",JSON.stringify(val));
}

function getLocalStorage(){
    let val;
    if(localStorage.getItem("val") === null){
        val = [];
    }else{
        val = JSON.parse(localStorage.getItem("val"));
    }   
    val.forEach(todo=>{

    let div = document.createElement("div");
    div.classList.add("textEl");
    let listEl = document.createElement("li");
    listEl.classList.add("listEl");
    listEl.innerText = todo;
    div.appendChild(listEl);
    
    let trash = document.createElement("button");
    trash.innerHTML = `<i class = "fas fa-trash"></i>`;
    trash.classList.add("trashBtn");
    div.appendChild(trash);

    list.appendChild(div);
});
};

function deleteLocalStorage(todo){
    let val;
    if(localStorage.getItem("val") === null){
        val = [];
    }else{
        val = JSON.parse(localStorage.getItem("val"));
    }   
    let todoText = todo.children.innerText;
    val.splice(val.indexOf(todoText));
    localStorage.setItem("val",JSON.stringify(val));
}
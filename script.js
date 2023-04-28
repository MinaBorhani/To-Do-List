// --- button Add
const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ""){
        alert("please write something");
    }else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        // delete task
        let dev = document.createElement("dev");
        dev.innerText = "\u00d7";
        li.appendChild(dev)
    }
    inputBox.value = ""
    saveData()
}

// other opstion
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "DEV"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

// save data
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}


//show task
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()
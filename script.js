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
}
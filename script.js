// --- button Add
const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ""){
        alert("please write something");
    }else{
        let lis = document.createElement("li");
        lis.innerHTML = inputBox.value;
        listContainer.appendChild(lis)
    }
}
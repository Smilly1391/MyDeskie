document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("todo");
    const input = document.getElementById("input");
    const taskList = document.createElement("div");
    taskList.id = "task-list";
    document.querySelector("#task").appendChild(taskList);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            input.value = "";
        }
    });

    function addTask(text) {
        const taskItem = document.createElement("div");
        taskItem.className = "task-item";

        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = text;

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";
        editBtn.onclick = function () {
            const newText = prompt("Update your task:", taskText.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskText.textContent = newText.trim();
            }
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(taskText);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }
});

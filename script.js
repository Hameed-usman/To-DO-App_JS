const input = document.getElementById("inpt");
const button = document.getElementById("btn");
const text = document.querySelector(".text");
const taskCount = document.getElementById("task-count");

let count = 0;

function updateTaskCount() {
    taskCount.innerText = count;
}

button.addEventListener("click", function () {
    if (input.value === "") {
        alert("Enter a task!");
    } else {
        let newEl = document.createElement("ul");

        // Create task text and action buttons
        newEl.innerHTML = `${input.value} <span class="edit">Edit</span> <span class="delete">X</span>`;
        text.appendChild(newEl);
        input.value = "";

        count++;
        updateTaskCount();

        newEl.querySelector(".delete").addEventListener("click", function () {
            newEl.remove();
            count--;
            updateTaskCount();
        });
        newEl.querySelector(".edit").addEventListener("click", function () {
            const taskText = newEl.firstChild.textContent.trim(); 
            const editInput = document.createElement("input"); 
            editInput.type = "text";
            editInput.value = taskText; 

            newEl.firstChild.replaceWith(editInput); 

            this.innerText = "Save";

            this.addEventListener("click", function () {
                if (editInput.value.trim() === "") {
                    alert("Task cannot be empty!");
                } else {
                    newEl.firstChild.replaceWith(document.createTextNode(editInput.value));
                    this.innerText = "Edit"; 
                }
            });
        });
    }
});

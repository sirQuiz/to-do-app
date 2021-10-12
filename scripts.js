(function() {
    const todo = document.querySelector(".js-todo"),
          taskInput = document.querySelector(".js-todo__input"),
          saveButton = document.querySelector(".js-todo__save"),
          selectAllButton = document.querySelector(".js-todo__select-all"),
          deleteButton = document.querySelector(".js-todo__delete"),
          deleteALLButton = document.querySelector(".js-todo__delete-all"),
          tasks = document.querySelector(".js-todo__tasks");

    const addTask = () => {
        let i = tasks.childElementCount;

        tasks.innerHTML += `
                <div class="todo__task js-todo__task">
                    <input class="todo__task-mark js-todo__task-mark" type="checkbox" id="task${i}" name="taks${i}">
                    <label class="todo__task-description" for="task${i}">${taskInput.value}</label>
                </div>
                `;
    };

    
    const selectAll = () => {
        let taskMark = document.querySelectorAll(".js-todo__task-mark");

        taskMark.forEach((item) => {
            item.checked = true;
        });
    };

    const deleteTask = () => {
        let taskMark = document.querySelectorAll(".js-todo__task-mark");

        taskMark.forEach((item) => {
            if(item.checked == true) {
                item.parentElement.remove();
            }
        });
    };

    const todoList = (e) => {
        let target = e.target;
        switch(target) {
            case saveButton:
                addTask();
                break;
            case selectAllButton:
                selectAll();
                break;
            case deleteButton:
                deleteTask();
                break;
            case deleteALLButton:
                alert("save button");
                break;
            default:
                console.log("nothing happend");
        }
    };

    todo.addEventListener("click", todoList);


}());
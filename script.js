
let todos = [];

function addTodo() {
    if (document.querySelector(".input").value === "") {
        alert("Please enter your to-do")
    } else {
        todos.push({
            title: document.querySelector(".input").value,
            isDone: false,
            isEditing: false
        })
    
        document.querySelector(".input").value = "";
        
        render();
    }
    
}

function render() {
    
    //------clear the list-items------
    document.querySelector("#incompleted-list").innerHTML = "";
    document.querySelector("#completed-list").innerHTML = "";
    
    
    todos.forEach((todo, index) => {
        
        if (!todo.isDone) {

//------------------INCOMPLETE-TODO-LIST-------------------------------------

            //------change the style of empty-state and list-container------
            document.querySelector(".empty-state").style.display = "none";
            document.querySelector(".incompleted-todos").style.display = "flex";
            
            //------create the list-items------
            const listItem = document.createElement("div");
            listItem.setAttribute("class", "list-item");
            // listItem.setAttribute("id", `item-${index.id}`);
            
            //------create the todo------
            const todoDiv = document.createElement("div");
            
            //------create the checkbox------
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "checkbox");
            
            //------create the todo value------
            const todoValue = document.createElement("p")
            
            //------create the buttons for edit and delete functions------
            const btns = document.createElement("div");
            btns.setAttribute("class", "btns");
            
            const editBtn = document.createElement("button");
            editBtn.setAttribute("class", "edit-btn");
            
            const deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", "delete-btn");
            
            //------Delete the current todo------
            deleteBtn.addEventListener("click", () => {
                todos.splice(index, 1);
                render();  // Re-render the todo list after deletion
            })

            editBtn.innerHTML = '<i class="fas fa-edit fa-lg"></i>';
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt fa-lg"></i>';
            
            btns.appendChild(editBtn);
            btns.appendChild(deleteBtn);
            
            //------create the DOM for the list-items------
            document.querySelector("#incompleted-list").appendChild(listItem);
            listItem.appendChild(todoDiv);
            listItem.appendChild(btns);
            
            todoDiv.appendChild(checkbox);
            todoDiv.appendChild(todoValue);
            
            //------Insert the input value in the todoValue------
            todoValue.innerHTML = todo.title;

            editBtn.addEventListener("click", () => {
                todo.isEditing = !todo.isEditing;
                render()
            })

            //------Edit the todo------
            if (todo.isEditing) {
                const editInput =  document.createElement("input");
                editInput.setAttribute("class", "list-item-update")
                editInput.value = todo.title;

                todoValue.parentNode.replaceChild(editInput, todoValue);
                editBtn.innerHTML = '<i class="fas fa-check fa-lg"></i>';
                
                editBtn.addEventListener("click", () => {
                    todo.title = editInput.value
                    render();
                })


            }

            //------Mark the todo as complete------
            checkbox.addEventListener("click", () => {
                todo.isDone = !todo.isDone;
                render();  // Re-render the todo list after completion
            })
        } else {

//------------------COMPLETED-TODO-LIST-------------------------------------

            //------change the style of empty-state and list-container------
            document.querySelector(".completed-todos").style.display = "flex";

            //------create the list-items------
            const listItem = document.createElement("div");
            listItem.setAttribute("class", "list-item");
            // listItem.setAttribute("id", `item-${index.id}`);
            
            //------create the todo------
            const todoDiv = document.createElement("div");
            
            //------create the checkbox------
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "checkbox");
            checkbox.setAttribute("checked", "");
            
            //------create the todo value------
            const todoValue = document.createElement("p")
            
            //------create the button delete functions------
            const btns = document.createElement("div");
            btns.setAttribute("class", "btns");
            
            
            const deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", "delete-btn");
            
            //------Delete the current todo------
            deleteBtn.addEventListener("click", () => {
                todos.splice(index, 1);
                render();  // Re-render the todo list after deletion
            })

            deleteBtn.innerHTML = '<i class="fas fa-trash-alt fa-lg"></i>';
            
            btns.appendChild(deleteBtn);
            
            //------create the DOM for the list-items------
            document.querySelector("#completed-list").appendChild(listItem);
            listItem.appendChild(todoDiv);
            listItem.appendChild(btns);
            
            todoDiv.appendChild(checkbox);
            todoDiv.appendChild(todoValue);
            
            //------Insert the input value in the todoValue------
            todoValue.innerHTML = todo.title;



            //------Mark the todo as complete------
            checkbox.addEventListener("click", () => {
                todo.isDone = !todo.isDone;
                render();  // Re-render the todo list after completion
            })
            
        }
        
        

    })

    //------change the style of empty-state and list-container------
    if (document.querySelector("#incompleted-list").innerHTML === "" && document.querySelector("#completed-list").innerHTML === "") {

        document.querySelector(".empty-state").style.display = "flex";
    }

    if (document.querySelector("#incompleted-list").innerHTML === "") {

        document.querySelector(".incompleted-todos").style.display = "none";
    }

    if (document.querySelector("#completed-list").innerHTML === "") {

        document.querySelector(".completed-todos").style.display = "none";
    }
}

//------Initial render------
render();

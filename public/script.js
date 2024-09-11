let ctr = 0;

function addTodo() {
    if (document.querySelector(".input").value === "") {
        alert("Please enter your to-do")
    } else {

    document.querySelector(".empty-state").style.display = "none";
    document.querySelector(".list-container").style.display = "flex";
        
    const inputEl = document.querySelector(".input");
    
    //------create the list-items------
    const listItem = document.createElement("div");
    listItem.setAttribute("class", "list-item");
    listItem.setAttribute("id", `item-${ctr}`);
    
    //------create the todo------
    const todo = document.createElement("div");

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
    deleteBtn.setAttribute("onclick", `deleteTodo(${ctr})`)


    editBtn.innerHTML = '<i class="fas fa-edit fa-lg"></i>';
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt fa-lg"></i>';

    btns.appendChild(editBtn);
    btns.appendChild(deleteBtn);

    //------create the DOM for the list-items------
    document.querySelector(".list").appendChild(listItem);
    listItem.appendChild(todo);
    listItem.appendChild(btns);

    todo.appendChild(checkbox);
    todo.appendChild(todoValue);

    //------Insert the input value in the todoValue------
    todoValue.innerHTML = inputEl.value;

    inputEl.value = "";
    
    ctr += 1;

    }
}

function deleteTodo(index) {
    
    const deleteEl = document.querySelector(".list");
    deleteEl.removeChild(document.getElementById(`item-${index}`));
    
    if (document.querySelector(".list").innerHTML === "") {
        
        document.querySelector(".empty-state").style.display = "flex";
        document.querySelector(".list-container").style.display = "none";

    }

    ctr -= 1;
}

{/* <div class="list-container incompleted-todos">

            <p class="list-title">TO DO</p>

            <div class="list">

                <div class="list-item">

                    <div todo>
                        <input class="checkbox" type="checkbox">
                        <p todoValue>Buy groceries</p>
                    </div>

                    <div class="btns">
                        <button class="edit-btn">
                            <i class="fas fa-edit fa-lg"></i>
                        </button>
                        <button class="delete-btn">
                            <i class="fas fa-trash-alt fa-lg"></i>
                        </button>
                    </div>
                    
                </div>

                <div class="list-item">

                    <div class="list-edit">
                        <input class="checkbox" type="checkbox">
                        <input class="list-item-update" type="text" name="list-item" id="todo-update" value="Write an e-mail">
                    </div>

                    <div class="btns">
                        <button class="edit-btn">
                            <i class="fas fa-check fa-lg"></i>
                        </button>
                        <button class="delete-btn">
                            <i class="fas fa-trash-alt fa-lg"></i>
                        </button>
                    </div>
                    
                </div>
                
                </div>
            </div>
</div> */}




{/* <div class="list-container completed-todos">

    <p class="list-title">COMPLETED</p>

    <div class="list">

        <div class="list-item completed">

            <div>
                <input class="checkbox" type="checkbox">
                <p>Buy groceries</p>
            </div>

            <div class="btns">
                <button class="edit-btn completed">
                    <i class="fas fa-edit fa-lg"></i>
                </button>
                <button class="delete-btn completed">
                    <i class="fas fa-trash-alt fa-lg"></i>
                </button>
            </div>
            
        </div>
        
    </div>

</div> */}



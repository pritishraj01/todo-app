const userInput = document.querySelector(".user-input");
const completeBtn = document.querySelector(".complete");
const nextBtn = document.querySelector(".next");
const deleteBtn = document.querySelector(".delete");
const list = document.querySelectorAll("li");
const taskList= document.querySelector("#task-list");



completeBtn.addEventListener("click", () => {
    console.log(userInput.value);
    if (userInput.value != "") {
        userInput.style.textDecoration = "line-through";
    }
});


deleteBtn.addEventListener("click", () => {
    userInput.value = "";
    userInput.style.textDecoration = "none";
});


nextBtn.addEventListener("click", () => {
    const li = document.createElement("li");

    //new input for new task //
    const input = document.createElement("input");
    input.type = "text"
    input.placeholder = "write what to do";
    input.classList.add("user-input");

    // Create Complete button
    const compBtn = document.createElement("button");
    compBtn.innerText = "Complete";
    compBtn.classList.add("btn", "complete");
    compBtn.addEventListener("click", () => {
        if (input.value !== "") {
            input.style.textDecoration = "line-through";
        }
    });

    // Create Delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("btn", "delete");
    delBtn.addEventListener("click", () => {
        li.remove();
    });

    // Create Next button
    const nextAgainBtn = document.createElement("button");
    nextAgainBtn.innerText = "Next";
    nextAgainBtn.classList.add("btn", "next");
    nextAgainBtn.addEventListener("click", () => {
        nextBtn.click(); // reuse same function
    });

    // Add input and buttons to li
    li.append(input);
    li.append(compBtn);
    li.append(delBtn);
    li.append(nextAgainBtn);

    // Append to list
    taskList.append(li);
});



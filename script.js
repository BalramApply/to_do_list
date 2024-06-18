 inputBox = document.getElementById("inputText");
 addBtn = document.getElementById("addBtn");
 todoList = document.getElementById("todoList");
 todoCount = document.getElementById("todoCount");

count = 0;
todoCount.innerHTML = count;

 addtodo = () => {
  inputText = inputBox.value;
  if (inputText.length <= 0) {
    alert("Write Something");
    return false;
  } else {
    let p = document.createElement("p");
    let li = document.createElement("li");

    p.innerHTML = inputText;
    li.appendChild(p);

    todoCount.innerHTML = count + 1;
    count = count + 1;

    let deltBtn = document.createElement("button");
    deltBtn.innerText = "Remove";
    li.appendChild(deltBtn);
    todoList.appendChild(li);
    inputBox.value = "";
  }
};

 updateTodo = (e) => {
  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement);
    todoCount.innerHTML = count - 1;
    count = count - 1;
  }
};
todoList.addEventListener("click", updateTodo);

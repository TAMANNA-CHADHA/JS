let ScoreStr = localStorage.getItem('todoList');
let todoList;
resetTodoList(ScoreStr);
function resetTodoList(ScoreStr){ 
 todoList =  ScoreStr?JSON.parse(ScoreStr):[
  
  
  
];

  displayItems();}

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  localStorage.setItem('todoList',JSON.stringify(todoList));
  
//   let product2= JSON.parse(localStorage.getItem('todolist'));
// console.log(product2);


  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();  ">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
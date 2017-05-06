//V2 Requrements
//1. It Should have a place to store todos
//2. It Should have a function to display todos
//3. It Should have a function to add new toods
//4. It Should have a function to change a todo
//5. It Should have a function to delete a todo

var todos = ['item 1', 'item 2', 'item 3']; // to store todos
// It Should have a function to display todos
function displayTodos() {
    console.log('My todos:', todos);
}
// It Should have a function to add new toods
function addTodo(todo) {
    todos.push('new todo'); 
    displayTodos();
}
// It Should have a function to change a todo
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
 // It Should have a function to delete a todo
function deleteTodo(position) {
    todos.splice(0,1); 
}


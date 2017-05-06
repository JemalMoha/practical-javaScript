//V1 Requrements
//1. It Should have a place to store todos
//2. It Should have a way to display todos
//3. It Should have a way to add new toods
//4. It Should have a way to change a todo
//5. It Should have a way to delete a todo

var todos = ['item 1', 'item 2', 'item 3']; // to store todos
console.log('My todos:', todos); // to display todos
todos.push('new todo'); // to add new toods
todos[0] = ['Changed']; // to change a todo
todos.splice(0,1); // to delete a todo

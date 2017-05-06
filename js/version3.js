//V3 Requrements
//1. It Should store the todos arra on an object
//2. It Should have a displayTodos method
//3. It Should have an addTodo method
//4. It Should have a changeTodo method
//5. It Should have a deleteTodo method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My todos:', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    }
};

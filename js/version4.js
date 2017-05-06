//v4 requirement
// todoList.addTodo should add object
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property


var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My todos:', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        //this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    }
};
const todos = [{
    text: 'Study',
    completed: true
}, {
    text: 'Run',
    completed: false
}, {
    text: 'Hit the gym',
    completed: true
}, {
    text: 'Get a job',
    completed: false
}, {
    text: 'Make dinner',
    completed: false
}];

const deleteTodo = function (todoList, todoText) {
    const index = todoList.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });

    if (index > -1) 
    {
        todos.splice(index, 1)
    };
};

const getThingsToDo = function (todoList) {
    return todoList.filter(function (todo) {
        return !todo.completed;
    });
};

//sorting todo list by not completed at top
const sortTodos = function (todoList) {
    todoList.sort(function (a, b) {
        if (a.completed === false && b.completed === true) { // could use !a.completed because looking for true
            return -1;
        } else if (a.completed === true && b.completed === false) {
            return 1;
        } else {
            return 0;
        }
    });
};

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos));

// deleteTodo(todos, 'hit the gym');
// console.log(todos);

// const incomplete = todos.filter(function (todo) {
//     return !todo.completed;
// });

// // create header element, put how many are left after filter
// const summary = document.createElement('h2');
// summary.textContent = `You have ${incomplete.length} todos left`;
// document.querySelector('body').appendChild(summary);

// // Print the remaining todos to the DOM 
// incomplete.forEach(function (todo) {
//     const p = document.createElement('p');
//     p.textContent = todo.text;
//     document.querySelector('body').appendChild(p);
// });
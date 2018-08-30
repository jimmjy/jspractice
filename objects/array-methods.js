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



//1. convert array to arry of objects -> text, completed
//2. create a function to remove a todo by text value

const deleteTodo = function (todoList, todoText) {
    //find index of text
    const index = todoList.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });

    //remove that object from the index
    if (index > -1) {
        todos.splice(index, 1)
    };
};

deleteTodo(todos, 'hit the gym');
console.log(todos);

const getThingsToDo = function (todoList) {
    return todoList.filter(function (todo) {
        return !todo.completed;
    });
};

console.log(getThingsToDo(todos));
// //delete the third item
// todos.splice(2, 1);

// //add new item to end
// todos.push('Feed cat');

// //Remove the first item from the list
// todos.shift();

// // print items left todo
// console.log(`You have ${todos.length} todos left on your list:`);

// todos.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`);
// });

// //rewriting the forEach with a for
// console.log(`You have ${todos.length} todos left on your list:`);
// for(let i = 0; i < todos.length; i++) {
//     console.log(`${i + 1}. ${todos[i]}`);
// }

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

// //removing item from end of array
// console.log(notes.pop());

// //adding item to end of array
// notes.push('My new note');

// //removing the first item
// console.log(notes.shift());

// //adding to the beginning of array
// notes.unshift('My first note');

// //modifying the array from a chosen index, the first argument is where are you trying to take action from and the second argument is the number of things we are interested in removing.  A third argument can be provided to add content from the index of the first argument
// notes.splice(1, 1, 'The new second item'); //this is saying, start at index 1 and remove 1 item and add new second item to that place.  You can use 0 for second argument to not remove anything and just insert out last argument there

//using bracket notation
// notes[2] = 'This is new note 3'; // replaces this index

// looping over arrays.  Takes a function as the argument, that function an take 3 arguments, first - current item, second - index, third - the array

// notes.forEach(function(item, index) {
//     console.log(index, item);
// });

// //recreate forEach with a for loop
// for (let i = 0; i < notes.length; i++) {
//     console.log(`${i + 1}: ${notes[i]}`);
// };

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

const findNotes = function (notes, query) {
    return filteredNotes = notes.filter(function (note) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    });
};

console.log(findNotes(notes, 'eating'));

// const findNote = function (notes, noteTitle) {
//     const noteIndex = notes.findIndex(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[noteIndex];
// }

// const note = findNote(notes, 'Office modification');
// console.log(note);

// console.log(notes.length);
// console.log(notes);

// // {} === {} false because in memory, they are not the same object
// // indexOf is bad to use for array of objects, other method needed
// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habbits to work on'
// });
// console.log(index);


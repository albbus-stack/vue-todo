var app = new Vue({
    el: '#app',
    data: {
        title: '',
        todos: []
    },
    methods: {
        createToDo: function(title) {
            if (title != "") {
                this.todos.push({
                    id: 1,
                    title: title,
                    done: false
                })
            }
        },
        deleteToDo: function(todo) {
            for (let i = 0; i < this.todos.length; i++) {
                if (todo.id == this.todos[i].id) {
                    this.todos.splice(i, 1);
                }
            }
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        title: '',
        id: 0,
        todos: []
    },
    methods: {
        createToDo: function(title) {
            if (title != "") {
                this.todos.push({
                    id: this.id,
                    title: title,
                    done: false
                })
                this.id = this.id + 1;
            }
        },
        deleteToDo: function(todo) {
            for (let i = 0; i < this.todos.length; i++) {
                if (todo.id == this.todos[i].id) {
                    this.todos.splice(i, 1)
                }
            }
        },
        update: function(todo) {
            let el = document.getElementById(todo.id)
            el.style.textDecoration = "none"
            for (let i = 0; i < this.todos.length; i++) {
                if (todo.done) {
                    return true
                } else {
                    el.style.textDecoration = "line-through"
                    return false
                }
            }
        }
    }
})
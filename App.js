var app = new Vue({
    el: '#app',
    data: {
        title: '',
        id: 0,
        todos: []
    },
    methods: {
        createToDo: function() {
            if (this.title != "") {
                this.todos.push({
                    title: this.title,
                    done: false
                })
            }
            this.title = ""
        },
        deleteToDo: function(todo) {
            const i = this.todos.indexOf(todo)
            this.todos.splice(i, 1)
        },
    }
})